import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { RouterModule } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
import { LanguageService } from './util/language/language.service';


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
        ModalModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        StoreModule.provideStore({ options, scoreboard, game}),
        StoreDevtoolsModule.instrumentOnlyWithExtension({
            maxAge: 10
        })
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        LanguageService
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
