import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipePipe } from './pipes/pipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlayerComponent } from './components/player/player.component';
import { OneTeamComponent } from './components/one-team/one-team.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TeamListComponent,
    TeamInfoComponent,
    PlayerListComponent,
    PlayerInfoComponent,
    PipePipe,
    PageNotFoundComponent,
    PlayerComponent,
    OneTeamComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
