import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LambsTigerComponentComponent } from './lambs-tiger-component/lambs-tiger-component.component';
import { ScorecardCardsgameComponent } from './scorecard-cardsgame/scorecard-cardsgame.component';
import { ScoreCardParentComponent } from './score-card-parent/score-card-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    LambsTigerComponentComponent,
    ScorecardCardsgameComponent,
    ScoreCardParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
