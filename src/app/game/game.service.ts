import { Injectable } from '@angular/core';

import { GameRepository } from './game.repository';
import { Game } from './game';


@Injectable()
export class GameService {

    private game: Game;

    constructor(private gameRepository: GameRepository) {
        this.gameRepository
            .getGame()
            .subscribe((game: Game) => {
                this.game = game;
            });
    }

    revealField(position: number): void {
        this.game.revealField(position);

        this.gameRepository
            .updateFields(this.game.fields);
    }

}
