import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/playersList.interface';
import { Team } from 'src/app/interfaces/teams-interface';
import { TeamsService } from 'src/app/services/teams.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  listTeam: Team[] = [];
  year = new Date().getFullYear();
  id: String = {} as String;
  listYear: number[] = [];
  teamSelected: Team = {} as Team;
  listPlayer: Player[]= [];


  constructor(
    private teamService: TeamsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   
    this.getParamsFromUrl();
    this.showTeam();
    this.showPlayers(); 

    

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
      debugger
      for (let team of this.listTeam) {
        if (this.id == team.teamId) {
          this.teamSelected = team;
        }      

      }
      debugger
      this.teamService.getPlayerOfTeam(this.year, this.teamSelected.urlName).subscribe((res) => {
        this.listPlayer = res.league.standard;
      });
      

    });

    for (let i = 0; 2012 + i <= this.year; i++) {
      this.listYear[i] = this.year - i;
    }
  }
  showPlayers() {
    debugger
    this.teamService.getPlayerOfTeam(this.year, this.teamSelected.urlName).subscribe((res) => {
      this.listPlayer = res.league.standard;
     
    });
    
  }

  showMatchs() {
    this.teamService.getTeam(this.year).subscribe((res) => {
      this.listTeam = res.league.standard;     
    });
    
  }
  showImgTeam() {
    let nick = this.teamSelected.fullName.toUpperCase().substring(3, 0);
    return `${environment.API_IMG_TEAM_URL}/${nick}_logo.svg`;
  }
}
