import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/playersList.interface';
import { PlayersService } from 'src/app/services/players.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  playerList: Player[] = [];
  yearList: number[] = [];
  yearSelected: number = this.currentYear;
  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    this.playersService.getPlayerList(this.currentYear).subscribe((resp) => {
      this.playerList = resp.league.standard;
    });
    /**
     * 
    this.getPlayersPage(1, this.currentYear);

     * 
     */
    for (let i = 0; 2012 + i <= this.currentYear; i++) {
      this.yearList[i] = this.currentYear - i;
    }
  }

  /*** 
   * 
   *getPlayersPage(page: number, year: number){
    let count=0
    this.playersService.getPlayerList(year, page).subscribe(resp =>{
      this.playerList=resp.league.standard;
      this.playerList.forEach(player => {
        count++      
      });
      this.numPages=Math.ceil(count/20)
    })
  } 
   * 
  */

  selectYear() {
    if (this.yearSelected !== null) {
      this.playersService.getPlayerList(this.yearSelected).subscribe((resp) => {
        this.playerList = resp.league.standard;
      });
    }
  }

  showImgPlayer(player: Player) {
    /*no hace falta declarar una variable
    let id = player.personId;
    */
    return `${environment.API_IMG_PLAYER_URL}/${player.personId}.png`;
  }

  /**
   * 
  counter() {
    return new Array(this.numPages);
  } 
  */
}
