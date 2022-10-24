import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Team } from '../interfaces/teams-interface';

@Pipe({
  name: 'show-img',
})
export class PipePipe implements PipeTransform {
  /**Muestra las imagenes de los equipos del año seleccionado **/

  transform(team: Team): string {
    let nick = team.fullName.substring(3, -1).toUpperCase();
    return `${environment.API_IMG_TEAM_URL}/${nick}_logo.svg`;
  }
}
