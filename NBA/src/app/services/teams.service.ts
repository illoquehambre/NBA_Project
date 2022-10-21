import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { League, TeamResponse } from '../interfaces/teams-interface';

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
}
