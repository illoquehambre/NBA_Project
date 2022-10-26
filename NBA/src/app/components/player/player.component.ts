import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/playersList.interface';
import { PlayersService } from 'src/app/services/players.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  shearchText : any;
  playerList: Player[] = [];
  yearList: number[] = [];
  yearSelected: number = this.currentYear;
  @Input() player: Player = {} as Player; 
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
  }

  showImgPlayer(player: Player) {
    /*no hace falta declarar una variable
    let id = player.personId;
    */
    return `${environment.API_IMG_PLAYER_URL}/${player.personId}.png`;
  }
}
