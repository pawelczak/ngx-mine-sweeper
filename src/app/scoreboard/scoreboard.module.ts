import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';

import { ScoreboardComponent } from './scoreboard.component/scoreboard.component';
import { ScoreboardRepository } from './scoreboard.repository';
import { ScoreByDifficultyPipe } from './scoreboard.component/score-by-difficulty.pipe';
import { ResetScoresWindowComponent } from './scoreboard.component/reset-scores-window.component/reset-scores-window.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule
    ],
    declarations: [
        ScoreboardComponent,
        ResetScoresWindowComponent,
        ScoreByDifficultyPipe
    ],
    providers: [
        ScoreboardRepository
    ],
    entryComponents: [
        ScoreboardComponent,
        ResetScoresWindowComponent
    ]
})
export class ScoreboardModule {}
