import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Game } from './game';
import {
    GAME_FINISH, GAME_INIT_BOARD, GAME_MARK_FIELD, GAME_REVEAL_FIELD, GAME_UPDATE_FIELDS,
    GAME_CREATE_NEW
} from './game-store/actions';
import { BoardField } from './board/board-field';
import { GameFactory } from './game.factory';
import { OptionsRepository } from '../options/options.repository';
import { TimerService } from './info/timer.service';

@Injectable()
export class GameRepository {

    constructor(private store: Store<any>,
                private timerService: TimerService,
                private optionsRepository: OptionsRepository) {}

    getGame(): Observable<Game> {
        return this.store.select('game');
    }

    createNewGame(): void {

        this.optionsRepository
            .getDifficulty()
            .take(1)
            .subscribe((difficulty: string) => {

                const newGame = GameFactory.createInitialGame(difficulty);
                newGame.initBoardWithRandomMines();

                this.store.dispatch({type: GAME_CREATE_NEW, payload: newGame});

                this.timerService.reset();
                this.timerService.start();
            });

    }

    initBoard(): void {

        // TODO This should be done differently
        this.store.select('game')
            .take(1)
            .subscribe((game: Game) => {

                game.initBoardWithRandomMines();

                this.store.dispatch({type: GAME_INIT_BOARD, payload: {size: game.getBoardSize(), fields: game.getFields()}});
            });
    }

    revealField(position: number): void {
        this.store.dispatch({type: GAME_REVEAL_FIELD, payload: position});
    }

    markField(position: number): void {
        this.store.dispatch({type: GAME_MARK_FIELD, payload: position});
    }

    finishGame(): void {
        this.store.dispatch({type: GAME_FINISH});
    }

    updateFields(fields: Array<BoardField>): void {
        this.store.dispatch({type: GAME_UPDATE_FIELDS, payload: fields});
    }
}
