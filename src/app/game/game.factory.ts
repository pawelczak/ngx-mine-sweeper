import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable()
export class GameFactory {


    static createDefaultGame(): Game {
        return new Game({cols: 1, rows: 1});
    }

    static createEmptyBoardGame(boardSize: any): Game {
        let game = new Game(boardSize);



        return game;
    }
}
