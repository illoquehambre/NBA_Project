import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Player } from 'src/app/interfaces/playersList.interface';
import { PlayersService } from 'src/app/services/players.service';
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
  constructor(
    private route: ActivatedRoute,
    private playerService: PlayersService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.year = res['year'];
      this.id = res['id'];
      this.savePlayer();
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
}
