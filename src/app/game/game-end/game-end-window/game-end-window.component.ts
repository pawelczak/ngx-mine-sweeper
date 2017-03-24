import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { GameEnd } from '../game-end';
import { GameRepository } from '../../game.repository';
import { ScoreboardRepository } from '../../../scoreboard/scoreboard.repository';
import { Score } from '../../../scoreboard/score';
import { TimerService } from '../../info/timer.service';
import { TimeFormatter } from '../../info/time.formatter';
import { OptionsRepository } from '../../../options/options.repository';


@Component({
    selector: 'game-end-window',
    templateUrl: './game-end-window.component.html',
    styleUrls: [
        './game-end-window.component.ngx.scss'
    ]
})
export class GameEndWindowComponent implements OnInit, OnDestroy {

    @Input()
    gameEnd: GameEnd;

    time: any;

    subscription: Subscription;

    constructor(private gameRepository: GameRepository,
                private scoreboardRepository: ScoreboardRepository,
                private optionsRepository: OptionsRepository,
                private timerService: TimerService) {

        this.timerService.getTime().subscribe((t) => {
            this.time = t;
        });
    }

    ngOnInit() {
        // $('#game-end-modal').modal({show: true});
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    newGame(): void {
        this.gameRepository.createNewGame();
    }

    saveResult(): void {

        this.subscription =
            Observable.zip(
                this.timerService.getTime(),
                this.optionsRepository.getDifficulty()
            )
            .take(1)
            .subscribe((results: Array<any>) => {

                const time = TimeFormatter.formatFromSeconds(results[0]);
                const difficulty = results[1];

                this.scoreboardRepository.addScore(new Score('Lukasz', time, difficulty));
            });
    }
}
