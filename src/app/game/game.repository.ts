import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Game } from './game';
import { BoardField } from './board/board-field';
import { GameFactory } from './game.factory';
import { OptionsRepository } from '../options/repositories/options.repository';
import { TimerService } from './info/timer.service';
import { GameState } from './store/game-state';
import { GameStateFactory } from './store/game-state.factory';
import * as GameActions from './store/actions';


@Injectable()
export class GameRepository {

    constructor(private store: Store<any>,
                private timerService: TimerService,
                private optionsRepository: OptionsRepository) {}

    getGame(): Observable<GameState> {
        return this.store.select('game');
    }

    createNewGame(): void {

        this.optionsRepository
            .getDifficulty()
            .take(1)
            .subscribe((difficulty: string) => {

                const newGame = GameFactory.createInitialGame(difficulty);
                newGame.initBoardWithRandomMines();

                this.store.dispatch(new GameActions.InitStateAction(GameStateFactory.createFromGame(newGame)));

                this.timerService.start();
            });

    }

    initBoard(game: Game): void {

        game.initBoardWithRandomMines();

        this.store.dispatch(new GameActions.InitBoardAction({size: game.getBoardSize(), fields: game.getFields()}));
    }

    revealField(position: number): void {
        this.store.dispatch(new GameActions.RevealFieldAction(position));
    }

    markField(position: number): void {
        this.store.dispatch(new GameActions.MarkFieldAction(position));
    }

    finishGame(): void {
        this.store.dispatch(new GameActions.FinishAction());
    }

    updateFields(fields: Array<BoardField>): void {
        this.store.dispatch(new GameActions.UpdateFieldsAction(fields));
    }
}
