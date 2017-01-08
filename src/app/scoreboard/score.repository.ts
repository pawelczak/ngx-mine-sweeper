import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { Score } from './score';


@Injectable()
export class ScoreRepository {

    private scores: Array<Score> = [];

    private defaultScores: Array<Score> = [
        new Score('Seth', '01:14', 'easy'),
        new Score('McLovin', '00:49', 'easy'),
        new Score('Evan', '00:56', 'easy')
    ];

    constructor() {
        this.scores = this.defaultScores;
    }

    findAll(): Observable<Array<Score>> {

        return new Observable((observer: Observer<Array<Score>>) => {
            observer.next(this.scores);
            observer.complete();
        });
    }

    saveScore(score: Score): Observable<Array<Score>> {
        this.scores.push(score);
        return this.findAll();
    }

    reset(): void {
        this.scores = this.defaultScores;
    }
}
