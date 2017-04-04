import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Game } from '../game';
import { BoardField } from '../board/board-field';
import { GameState } from './game-state';
import { GameStateFactory } from './game-state.factory';
import * as GameActions from './actions';


@Injectable()
export class GameStateRepository {

    constructor(private store: Store<any>) {}

    getState(): Observable<GameState> {
        return this.store.select('game');
    }

    initState(game: Game): void {
        this.store.dispatch(new GameActions.InitStateAction(GameStateFactory.createFromGame(game)));
    }

    initBoard(game: Game): void {
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
