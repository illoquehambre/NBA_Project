import { Component, OnInit } from '@angular/core';
import { Player, } from 'src/app/interfaces/playersList.interface';
import { PlayersService } from 'src/app/services/players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  currentYear:number =new Date().getFullYear();
  playerList: Player[]=[]
  yearList:number[]=[]
  yearSelected: number = {} as number;

  constructor(
    private playersService: PlayersService
  ) { }

  ngOnInit(): void {

    this.playersService.getPlayerList(this.currentYear).subscribe(resp =>{
      this.playerList=resp.league.standard;
    })

    for (let i = 0; 2012+i<=this.currentYear; i++) {
      this.yearList[i]=(this.currentYear)-i;      
    }
  }

  selectYear() {
    if(this.yearSelected !== null){
      this.playersService.getPlayerList(this.yearSelected).subscribe(resp =>{
        this.playerList = resp.league.standard;
      })
    }
   

  }

}
