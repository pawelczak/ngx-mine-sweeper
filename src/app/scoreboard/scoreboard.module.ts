import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScoreboardComponent } from './scoreboard.component/scoreboard.component';
import { ScoreRepository } from './score.repository';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ScoreboardComponent
    ],
    providers: [
        ScoreRepository
    ],
    entryComponents: [
        ScoreboardComponent
    ]
})
export class ScoreBoardModule {}
