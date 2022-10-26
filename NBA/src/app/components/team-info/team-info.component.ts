import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/playersList.interface';
import { Coach } from 'src/app/interfaces/teamCoach.interface';
import { PlayerElement } from 'src/app/interfaces/teamPlayers.interface';
import { Team } from 'src/app/interfaces/teams.interface';
import { Match, StandardHTeam } from 'src/app/interfaces/teamSchudele.interface';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  listTeam: Team[] = [];
  actualYear = new Date().getFullYear();
  year = new Date().getFullYear();
  id: String = {} as String;
  listYear: number[] = [];
  teamSelected: Team = {} as Team;
  listPlayer: Player[] = [];
  listTeamPlayer: PlayerElement[] = [];
  teamRoster: Player[] = [];
  matchList: Match[] = [];
  coachList: Coach[]=[];
  coachSelected: Coach= {} as Coach;


  listScore: StandardHTeam[] = [];

  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute,
    private playerService: PlayersService
  ) { }

  ngOnInit(): void {
    this.teamRoster=[]
    this.getParamsFromUrl();
    this.showTeam();
    this.showPlayers();
    this.showCoaches();
  }

  getParamsFromUrl() {
    this.route.params.subscribe((res) => {
      this.year = res['year'];
      this.id = res['id'];
    })
  }

  showTeam() {
    this.teamService.getTeam(this.year).subscribe((res) => {
      this.listTeam = res.league.standard;

      for (let team of this.listTeam) {
        if (this.id == team.teamId) {
          this.teamSelected = team;
        }

      }
      /* 
       
       this.teamService.getPlayerOfTeam(this.year, this.teamSelected.urlName).subscribe((res) => {
         this.listTeamPlayer = res.league.standard.players;
       });
       */

    });

    for (let i = 0; 2012 + i <= this.actualYear; i++) {
      this.listYear[i] = this.actualYear - i;
    }
  }
  showTeamById(id: String) {
    let teamAux: Team = {} as Team;
    for (let team of this.listTeam) {

      if (team.teamId == id) {
        teamAux = team
      }

    }
    return teamAux
  }

  showPlayers() {
    this.playerService.getPlayerList(this.year).subscribe((res) => {
      this.listPlayer = res.league.standard;
      this.showPlayersOfTeam();
      this.showMatchs();
    });
  }
  showPlayersOfTeam() {

    this.teamService.getPlayerOfTeam(this.year, this.teamSelected.urlName).subscribe((res) => {
      this.listTeamPlayer = res.league.standard.players;
      
      for (let player of this.listPlayer) {
        for (let teamplayer of this.listTeamPlayer) {
          if (player.personId == teamplayer.personId) {
            this.teamRoster.push(player);
          }
        }
      }
    });



  }

  showMatchs() {

    this.teamService.getMatchs(this.year, this.teamSelected.urlName).subscribe((res) => {
      this.matchList = res.league.standard;
    });

  }
  showCoaches() {
    this.teamService.getCoaches(this.year).subscribe((res) => {
      this.coachList = res.league.standard;
      this.selectActualCoach();
    });
  }
  selectActualCoach(){
    
    for(let coach of this.coachList){
      if(coach.teamId==this.id && !coach.isAssistant){
        this.coachSelected=coach;
      }
    }
  }

  showImgTeam() {
    let nick = this.teamSelected.fullName.toUpperCase().substring(3, 0);
    return `${environment.API_IMG_TEAM_URL}/${nick}_logo.svg`;
  }
  showImgTeamById(id: String) {
    let nick = this.showTeamById(id).fullName.toUpperCase().substring(3, 0);
    return `${environment.API_IMG_TEAM_URL}/${nick}_logo.svg`;
  }
  showImgPlayer(player: Player) {
    return `${environment.API_IMG_PLAYER_URL}/${player.personId}.png`;
  }
  showImgCoach() {
    return `${environment.API_IMG_PLAYER_URL}/${this.coachSelected.personId}.png`;
  }
  convertStringToNumber(input: string) {
    var numeric = Number(input);
    return numeric;
  }  
}
