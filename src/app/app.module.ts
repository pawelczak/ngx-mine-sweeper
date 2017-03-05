import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { OptionsModule } from './options/options.module';
import { GameModule } from './game/game.module';
import { DashboardModule } from './dashboard/dashboard.module';

// reducers
import { optionsReducer as options }  from './options/store/options.reducer';
import { scoreboardReducer as scoreboard } from './scoreboard/scoreboard.reducer';
import { gameReducer as game } from './game/game-store/game.reducer';
import { ModalModule } from './util/modal/modal.module';


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        routing,
        GameModule,
        ScoreboardModule,
        OptionsModule,
        DashboardModule,
        ModalModule
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
