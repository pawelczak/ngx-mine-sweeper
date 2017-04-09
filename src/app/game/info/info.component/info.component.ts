import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TimerService } from '../timer.service';
import { TimeFormatter } from '../../../util/time/time.formatter';
import { GameService } from '../../game.service';


@Component({
    selector: 'info',
    templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit, OnDestroy {

    @Input()
    mines: number;

    time: string;

    markedMines: number;

    private minesSubscription: Subscription;

    private timerSubscription: Subscription;

    constructor(private timerService: TimerService,
                private gameService: GameService) {}

    ngOnInit() {
        this.timerSubscription =
            this.timerService
                .getTime()
                .subscribe((seconds: number) => {
                    this.time = TimeFormatter.formatFromSeconds(seconds);
                });

        this.minesSubscription =
            this.gameService
                .getMarkedMines()
                .subscribe((mines) => {
                    this.markedMines = mines;
                });
    }

    ngOnDestroy() {
        this.timerService.stop();
        this.minesSubscription.unsubscribe();
        this.timerSubscription.unsubscribe();
    }

}
