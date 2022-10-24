import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/teams.interface';
import { TeamsService } from 'src/app/services/teams.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  listTeam: Team[] = [];
  year = new Date().getFullYear();
  shearchText: any;
  listYear: number[] = [];
  yearSelected: number = this.year;

  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.showTeam();
  }

  /**Muestra los equipos */
  showTeam() {
    this.teamService.getTeam(this.year).subscribe((res) => {
      this.listTeam = res.league.standard;
    });

    for (let i = 0; 2012 + i <= this.year; i++) {
      this.listYear[i] = this.year - i;
    }
  }

  /*Se cambia al año que seleccionamos la lista*/
  selectYear() {
    if (this.yearSelected !== null) {
      this.teamService.getTeam(this.yearSelected).subscribe((res) => {
        this.listTeam = res.league.standard;
      });
    }
  }

  /**Muestra las imagenes de los equipos */
  showImgTeam(team: Team) {
    let nick = team.fullName.substring(3, -1).toUpperCase();
    return `${environment.API_IMG_TEAM_URL}/${nick}_logo.svg`;
  }
}
