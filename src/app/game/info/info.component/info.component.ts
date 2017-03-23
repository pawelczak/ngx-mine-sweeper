import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { TimerService } from '../timer.service';
import { TimeFormatter } from '../time.formatter';

@Component({
    selector: 'info',
    templateUrl: './info.component.html'
})
export class InfoComponent implements OnInit, OnDestroy {

    @Input()
    mines: number;

    time: string;

    private timerSubscription: Subscription;

    constructor(private timerService: TimerService) {}

    ngOnInit() {
        this.timerSubscription =
                this.timerService
                    .getTime()
                    .subscribe((seconds: number) => {
                        this.time = TimeFormatter.formatFromSeconds(seconds);
                    });
    }

    ngOnDestroy() {
        this.timerService.stop();
        this.timerSubscription.unsubscribe();
    }

}
