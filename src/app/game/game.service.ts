import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GameRepository } from './game.repository';
import { Game } from './game';
import { TimerService } from './info/timer.service';
import { GameStateRepository } from './store/game-state.repository';
import { OptionsRepository } from '../options/repositories/options.repository';
import { GameFactory } from './game.factory';
import { GameState } from './store/game-state';


@Injectable()
export class GameService {

    private game: Game;

    constructor(private gameRepository: GameRepository,
                private gameStateRepository: GameStateRepository,
                private optionsRepository: OptionsRepository,
                private timerService: TimerService) {

        // this.gameRepository
        //     .getState()
        //     .subscribe((game: Game) => {
        //         this.game = game;
        //     });
    }

    getState(): Observable<GameState> {
        return this.gameStateRepository.getState();
    }

    startNewGame(): void {

        this.optionsRepository
            .getDifficulty()
            .subscribe((difficulty: string) => {

                this.game = GameFactory.createInitialGame(difficulty);

                this.gameStateRepository.initState(this.game);
            });
    }

    revealField(position: number): void {
        this.game.revealField(position);

        this.gameStateRepository
            .updateFields(this.game.board.getFields());

        if (this.game.isFinished()) {
            this.finishGame();
        }
    }

    markField(position: number): void {
        this.game.markField(position);

        this.gameStateRepository
            .updateFields(this.game.board.getFields());

        if (this.game.isFinished()) {
            this.finishGame();
        }
    }

    private finishGame(): void {
        this.timerService.stop();
        this.gameStateRepository.finishGame();
    }

}
