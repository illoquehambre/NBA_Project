import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PlayerInfoReponse } from '../interfaces/playerInfo.interface';
import { Player, PlayerResponse } from '../interfaces/playersList.interface';
@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private http: HttpClient) {}


  getPlayerList(year: number, page:number): Observable<PlayerResponse>{
    return this.http.get<PlayerResponse>(`${environment.API_BASE_URL}/${year}/players.json?page=${page}?limit=20`)
  }

  getPlayerInfo(year: number, id: string): Observable<Player> {
    return this.http.get<Player>(
      `https://data.nba.net/data/10s/prod/v1/${year}/players/${id}_profile.json`
    );
  }
}
