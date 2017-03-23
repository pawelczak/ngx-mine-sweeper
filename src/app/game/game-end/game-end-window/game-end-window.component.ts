import { Component, OnInit, Input } from '@angular/core';

import { GameEnd } from '../game-end';
import { GameRepository } from '../../game.repository';
import { ScoreboardRepository } from '../../../scoreboard/scoreboard.repository';
import { Score } from '../../../scoreboard/score';
import { TimerService } from '../../info/timer.service';
import { TimeFormatter } from '../../info/time.formatter';

@Component({
    selector: 'game-end-window',
    templateUrl: './game-end-window.component.html',
    styleUrls: [
        './game-end-window.component.ngx.scss'
    ]
})
export class GameEndWindowComponent implements OnInit {

    @Input()
    gameEnd: GameEnd;


    constructor(private gameRepository: GameRepository,
                private scoreboardRepository: ScoreboardRepository,
                private timerService: TimerService) {}

    ngOnInit() {
        // $('#game-end-modal').modal({show: true});
    }

    newGame(): void {
        this.gameRepository.createNewGame();
    }

    saveResult(): void {

        this.timerService
            .getTime()
            .take(1)
            .subscribe((seconds: number) => {

                const time = TimeFormatter.formatFromSeconds(seconds);

                this.scoreboardRepository.addScore(new Score('Lukasz', time, 'HARD'));
            });
    }
}
