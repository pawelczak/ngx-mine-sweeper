import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ADD_SCORE } from '../scoreboard/actions';
import { Score } from '../scoreboard/score';

@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

    constructor(private store: Store<any>) {}

    ngOnInit() {
        this.store.dispatch({type: ADD_SCORE, payload: new Score('Jane Gray', '3:49', 'easy')});
    }
}
