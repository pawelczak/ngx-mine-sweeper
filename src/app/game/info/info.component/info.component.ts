import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TimerService } from '../timer.service';

@Component({
    selector: 'info',
    templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit, OnDestroy {


    @Input()
    mines: Number;

    time: string;

    private timerSubscription: Subscription;

    constructor(private timerService: TimerService) {}

    ngOnInit() {
        this.timerService.start();

        this.timerSubscription =
                this.timerService
                    .getTime()
                    .subscribe((seconds: number) => {
                        this.time = this.formatTime(seconds);
                    });
    }

    ngOnDestroy() {
        this.timerService.stop();
        this.timerSubscription.unsubscribe();
    }


    private formatTime(seconds: number): string {

        let time: string = '',
            minutes: number = Math.floor(seconds / 60),
            formatedSeconds = seconds % 60;

        if (minutes < 10) {
            time += '0';
        }

        time += minutes;

        time += ':';

        if (formatedSeconds < 10) {
            time += '0';
        }

        time += formatedSeconds;

        return time;
    }
}
