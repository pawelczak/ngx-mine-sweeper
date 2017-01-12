import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import Timer = NodeJS.Timer;


@Injectable()
export class TimerService {

    private seconds: number = 0;
    private timer$: Subject<number> = new BehaviorSubject(this.seconds);
    private subscription: Timer;


    getTime(): Observable<number> {
        return this.timer$.asObservable();
    }

    start(): void {
        this.seconds = 0;
        this.timer$.next(this.seconds);
        this.subscription = setInterval(() => {
            this.seconds += 1;
            this.timer$.next(this.seconds);
        }, 1000);
    }

    stop(): void {
        clearInterval(this.subscription);
    }
}
