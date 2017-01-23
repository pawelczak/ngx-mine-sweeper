import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScoreboardComponent } from './scoreboard.component/scoreboard.component';
import { ScoreService } from './score.service';
import { ScoreRepository } from './score.repository';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ScoreboardComponent
    ],
    providers: [
        ScoreRepository,
        ScoreService
    ],
    entryComponents: [
        ScoreboardComponent
    ]
})
export class ScoreBoardModule {}
