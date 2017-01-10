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
import { scoreReducer } from './scoreboard/score.reducer';
import { gameReducer } from './game/game.reducer';
import { BoardComponent } from './game/board.component/board.component';
import { BoardFieldComponent } from './game/board.component/board-field.component/board-field.component';
import { InfoComponent } from './game/info/info.component/info.component';
import { TimerService } from './game/info/timer.service';
import { GameService } from './game/game.service';


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
        BoardComponent,
        BoardFieldComponent,
        InfoComponent,
        ScoreboardComponent
    ],
    providers: [
        provideStore({ options, scoreReducer, gameReducer}),
        ScoreRepository,
        ScoreService,
        GameService,
        TimerService
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
