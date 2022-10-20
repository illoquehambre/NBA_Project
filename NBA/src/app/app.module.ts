import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/index/index.component';

import { MaterialImportsModule } from './material-imports/material-imports.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TeamListComponent } from './components/team-list/team-list.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    TeamListComponent,
    TeamInfoComponent,
    PlayerListComponent,
    PlayerInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
