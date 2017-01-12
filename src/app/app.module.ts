import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component/options.component';
import { GameComponent } from './game/game.component/game.component';
import { ScoreService } from './scoreboard/score.service';
import { ScoreRepository } from './scoreboard/score.repository';
import { ScoreboardComponent } from './scoreboard/scoreboard.component/scoreboard.component';
import { BoardComponent } from './game/board.component/board.component';
import { BoardFieldComponent } from './game/board.component/board-field.component/board-field.component';
import { InfoComponent } from './game/info/info.component/info.component';
import { TimerService } from './game/info/timer.service';
import { GameService } from './game/game.service';
import { OptionsStore } from './options/options.store';

// reducers
import { optionsReducer as options }  from './options/options.reducer';
import { scoreReducer as score } from './scoreboard/score.reducer';
import { gameReducer as game } from './game/game.reducer';

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
        provideStore({ options, score, game}),
        ScoreRepository,
        ScoreService,
        GameService,
        TimerService,
        OptionsStore
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
