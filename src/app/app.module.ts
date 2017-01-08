import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component';
import { GameComponent } from './game/game.component';
import { ScoreService } from './scoreboard/score.service';
import { ScoreRepository } from './scoreboard/score.repository';
import { ScoreboardComponent } from './scoreboard/scoreboard.component/scoreboard.component';
import { options } from './options/options';
import { scores } from './scoreboard/scores';



@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        OptionsComponent,
        GameComponent,
        ScoreboardComponent
    ],
    providers: [
        provideStore({ options, scores }),
        ScoreRepository,
        ScoreService
    ],
    entryComponents: [
        AppComponent,
        ScoreboardComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
