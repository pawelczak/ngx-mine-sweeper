import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScoreboardComponent } from './scoreboard.component/scoreboard.component';
import { ScoreboardRepository } from './scoreboard.repository';
import { ScoreByDifficultyPipe } from './scoreboard.component/score-by-difficulty.pipe';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ScoreboardComponent,
        ScoreByDifficultyPipe
    ],
    providers: [
        ScoreboardRepository
    ],
    entryComponents: [
        ScoreboardComponent
    ]
})
export class ScoreboardModule {}
