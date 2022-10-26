import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamListComponent } from './components/team-list/team-list.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'player-list', component: PlayerListComponent },
  { path: 'player-info/:year/:id', component: PlayerInfoComponent },
  { path: 'team-list', component: TeamListComponent },
  { path: 'team-info/:id/:year', component: TeamInfoComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
