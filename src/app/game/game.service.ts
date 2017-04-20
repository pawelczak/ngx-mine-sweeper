import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Game } from './game';
import { TimerService } from './info/timer.service';
import { GameStateRepository } from './store/game-state.repository';
import { OptionsRepository } from '../options/repositories/options.repository';
import { GameFactory } from './game.factory';
import { GameState } from './store/game-state';
import { GameEnd } from './game.component/game-end/game-end';

declare var _: any;

@Injectable()
export class GameService {

    private game: Game;

    constructor(private gameStateRepository: GameStateRepository,
                private optionsRepository: OptionsRepository,
                private timerService: TimerService) {
    }

    getState(): Observable<GameState> {
        return this.gameStateRepository.getState();
    }

    getMarkedMines(): Observable<number> {
        return this.gameStateRepository.getMarkedMines();
    }

    startNewGame(): void {

        this.optionsRepository
            .getDifficulty()
            .take(1)
            .subscribe((difficulty: string) => {

                this.game = GameFactory.createInitialGame(difficulty);

                this.gameStateRepository.initState(_.cloneDeep(this.game));

                this.timerService.start();
            });
    }

    revealField(position: number): void {

        this.game.revealField(position);

        let copiedGame = _.cloneDeep(this.game);

        this.gameStateRepository
            .updateFields(copiedGame.board.getFields(), copiedGame.countMarkedMines());

        if (this.game.isFinished()) {
            this.finishGame(this.game.gameEnd);
        }
    }

    markField(position: number): void {
        this.game.markField(position);

        let copiedGame = _.cloneDeep(this.game);

        this.gameStateRepository
            .updateFields(copiedGame.board.getFields(), copiedGame.countMarkedMines());

        if (this.game.isFinished()) {
            this.finishGame(this.game.gameEnd);
        }
    }

    private finishGame(gameEnd: GameEnd): void {
        this.timerService.stop();
        this.gameStateRepository.finishGame(gameEnd.isSuccessful());
    }

}
