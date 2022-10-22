import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerSummary } from 'src/app/interfaces/playerInfo.interface';
import { Player } from 'src/app/interfaces/playersList.interface';
import { Team } from 'src/app/interfaces/teams-interface';
import { PlayersService } from 'src/app/services/players.service';
import { TeamsService } from 'src/app/services/teams.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css'],
})
export class PlayerInfoComponent implements OnInit {
  player: Player = {} as Player;
  year: number = 0;
  id: string = '';
  playerList: Player[] = [];
  listTeam: Team[] = [];
  hiden = false;

  /**
   * Array de la carrera de este señor
   */
  stats: CareerSummary = {} as CareerSummary;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayersService,
    private teamService: TeamsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.year = res['year'];
      this.id = res['id'];
      this.savePlayer();
      this.showInformation();
    });
  }

  savePlayer() {
    this.playerService.getPlayerList(this.year).subscribe((resp) => {
      this.playerList = resp.league.standard;
      for (let i of this.playerList) {
        if (this.id == i.personId) {
          this.player = i;
        }
      }
    });
  }

  showImg(player: Player) {
    return `${environment.API_IMG_PLAYER_URL}/${player.personId}.png`;
  }

  visibilityOf() {
    this.hiden = !this.hiden;
  }

  showInformation() {
    this.playerService.getPlayerInfo(this.year, this.id).subscribe((res) => {
      this.stats = res.league.standard.stats.careerSummary;
    });
  }

  showNameTeam(id: string) {
    this.teamService.getTeam(this.year).subscribe((res) => {
      this.listTeam = res.league.standard;
      for (let team of this.listTeam) {
        if (id == team.teamId) {
          return true;
        }
      }
      return undefined;
    });
  }
}
