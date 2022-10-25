import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayerResponse, Team } from '../interfaces/playersList.interface';
import { CoachResponse } from '../interfaces/teamCoach.interface';
import { TeamInfoResponse } from '../interfaces/teamPlayers.interface';
import { League, TeamResponse } from '../interfaces/teams.interface';
import { TeamScheduleResponse } from '../interfaces/teamSchudele.interface';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private http: HttpClient) {}

  /**
   * Le paso un TeamResponse
   * @returns devuelve la url con los equipos de ese año que le he indicado
   */
  getTeam(year: number): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(
      `${environment.API_BASE_URL}/${year}/teams.json`
    );
  
  }

 
  getPlayerOfTeam(year: number, teamName: String): Observable<TeamInfoResponse> {
    
    return this.http.get<TeamInfoResponse>(
      `${environment.API_BASE_URL}/${year}/teams/${teamName}/roster.json`
    );
  }
  getMatchs(year: number, teamName: String): Observable<TeamScheduleResponse>{
    return this.http.get<TeamScheduleResponse>(
      `${environment.API_BASE_URL}/${year}/teams/${teamName}/schedule.json`
    );
  }
  getCoaches(year: number): Observable<CoachResponse>{
    return this.http.get<CoachResponse>(
      `${environment.API_BASE_URL}/${year}/coaches.json`
    );
  }

}
