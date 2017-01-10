import { Component, Input, OnInit } from '@angular/core';

import { TimerService } from '../timer.service';

@Component({
    selector: 'info',
    templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit {


    @Input()
    mines: Number;

    time: string;

    constructor(private timerService: TimerService) {}

    ngOnInit() {
        this.timerService.start();
        this.timerService
            .getTime()
            .subscribe((seconds: number) => {
                this.time = this.formatTime(seconds);
            });
    }

    private formatTime(seconds: number): string {

        let time: string = '',
            minutes: number = Math.floor(seconds / 60);

        if (minutes < 10) {
            time += '0';
        }

        time += minutes;

        time += ':';

        if (seconds < 10) {
            time += '0';
        }

        time += seconds;

        return time;
    }
}
