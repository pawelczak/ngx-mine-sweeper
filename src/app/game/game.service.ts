import { Injectable } from '@angular/core';

import { GameRepository } from './game.repository';
import { Game } from './game';
import { TimerService } from './info/timer.service';


@Injectable()
export class GameService {

    private game: Game;

    constructor(private gameRepository: GameRepository,
                private timerService: TimerService) {


        // this.gameRepository
        //     .getGame()
        //     .subscribe((game: Game) => {
        //         this.game = game;
        //     });
    }

    startNewGame(): void {
        this.gameRepository.createNewGame();
    }

    revealField(position: number): void {
        this.game.revealField(position);

        this.gameRepository
            .updateFields(this.game.board.getFields());

        if (this.game.isFinished()) {
            this.finishGame();
        }
    }

    markField(position: number): void {
        this.game.markField(position);

        this.gameRepository
            .updateFields(this.game.board.getFields());

        if (this.game.isFinished()) {
            this.finishGame();
        }
    }

    private finishGame(): void {
        this.timerService.stop();
        this.gameRepository.finishGame();
    }

}
