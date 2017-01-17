import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Game } from './game';
import { GAME_FINISH, GAME_INIT_BOARD } from './actions';

@Injectable()
export class GameService {

    constructor(private store: Store<any>) {}

    getGame(): Observable<Game> {
        return this.store.select('game');
    }

    initBoard(): void {

        this.store.select('game')
            .take(1)
            .subscribe((game: Game) => {
                game.initBoardWithRandomMines();

                this.store.dispatch({type: GAME_INIT_BOARD, payload: {size: game.getBoardSize(), fields: game.getFields()}});
            });
    }

    finishGame(): void {
        this.store.dispatch({type: GAME_FINISH});
    }
}
