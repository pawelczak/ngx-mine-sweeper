import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { OptionsModule } from './options/options.module';
import { GameModule } from './game/game.module';
import { DashboardModule } from './dashboard/dashboard.module';

// reducers
import { optionsReducer as options }  from './options/options.reducer';
import { scoreboardReducer as scoreboard } from './scoreboard/scoreboard.reducer';
import { gameReducer as game } from './game/game-store/game.reducer';


@NgModule({
    imports: [
        BrowserModule,
        routing,
        GameModule,
        ScoreboardModule,
        OptionsModule,
        DashboardModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        provideStore({ options, scoreboard, game})
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
