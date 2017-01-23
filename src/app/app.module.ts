import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ScoreBoardModule } from './scoreboard/scoreboard.module';
import { OptionsModule } from './options/options.module';
import { GameModule } from './game/game.module';
import { DashboardModule } from './dashboard/dashboard.module';

// reducers
import { optionsReducer as options }  from './options/options.reducer';
import { scoreReducer as score } from './scoreboard/score.reducer';
import { gameReducer as game } from './game/game.reducer';


@NgModule({
    imports: [
        BrowserModule,
        routing,
        GameModule,
        ScoreBoardModule,
        OptionsModule,
        DashboardModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        provideStore({ options, score, game})
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
