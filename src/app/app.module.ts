import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { GameComponent } from './game/game.component';
import { options } from './options/options';


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
        provideStore({ options })
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
