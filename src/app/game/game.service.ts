import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Game } from './game';
import { GAME_FINISH, GAME_INIT_BOARD } from './actions';
import { BoardField } from './board-field';
import { BoardFieldStatus } from './board-field-status';

@Injectable()
export class GameService {

    constructor(private store: Store<any>) {}

    getGame(): Observable<Game> {
        return this.store.select('game');
    }

    initBoard(): void {

        const boardSize = {
            rows: 8,
            cols: 8
        };

        let fields = [];

        for (let i = 0; i < 64; i += 1) {
            let boardField = new BoardField();

            boardField.status = Math.random() > 0.9 ? BoardFieldStatus.MINE : BoardFieldStatus.EMPTY;

            fields.push(boardField);
        }

        this.store.dispatch({type: GAME_INIT_BOARD, payload: {size: boardSize, fields: fields}});
    }

    finishGame(): void {
        this.store.dispatch({type: GAME_FINISH});
    }
}
