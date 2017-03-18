import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import Timer = NodeJS.Timer;


@Injectable()
export class TimerService {

    private timer$: Subject<number> = new BehaviorSubject(0);
    private subscription: Timer;

    getTime(): Observable<number> {
        return this.timer$
                    .asObservable()
                    .startWith(0)
                    .scan((acc, value) => {
                        return acc + value;
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
        this.timer$.next(0);
    }
}
