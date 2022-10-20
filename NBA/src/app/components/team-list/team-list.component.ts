import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/teams-interface';
import { TeamsService } from 'src/app/services/teams.service';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  listTeam: Team[] = [];
  year = new Date().getFullYear();
  selected = this.year;
  listYear : number [] = [];
  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.showTeam();
  }

  showTeam() {
    this.teamService.getTeam(this.year).subscribe((res) => {
      this.listTeam = res.league.standard;
    });
  }

  selectYear(){
    for (let index = 0; 2012+index <= this.year; index++) {
      this.listYear.push(index);      
    } 

  }
}
