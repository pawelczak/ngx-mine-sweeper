import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import Timer = NodeJS.Timer;


@Injectable()
export class TimerService {

    private timer$: Subject<number> = new ReplaySubject(1);
    private subscription: Timer;

    private time: number;

    getSimpleTime(): number {
        return this.time;
    }

    getTime(): Observable<number> {
        return this.timer$
                    .asObservable()
                    .startWith(0)
                    .scan((acc, value) => {

                        if (value === -1) {
                            return 0;
                        } else {
                            return acc + value;
                        }

                    })
                    .do((val) => {
                        this.time = val;
                    });
    }

    start(): void {
        this.reset();

        this.subscription = setInterval(() => {
            this.timer$.next(1);
        }, 1000);
    }

    stop(): void {
        clearInterval(this.subscription);
    }

    private reset(): void {
        this.timer$.next(-1);
    }
}
