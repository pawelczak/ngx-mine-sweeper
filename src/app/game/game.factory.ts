import { Injectable } from '@angular/core';

import { Game } from './game';
import { GameConfiguration } from './configuration/game-configuration';
import { BoardSize } from './board/board-size';
import { GameConfigurationFactory } from './configuration/game-configuration.factory';

@Injectable()
export class GameFactory {


    static createDefaultGame(): Game {
        return new Game(new GameConfiguration(new BoardSize(1, 1), 1));
    }

    static createEmptyBoardGame(boardSize: BoardSize): Game {
        return new Game(new GameConfiguration(boardSize, 1));
    }

    static createInitialGame(difficulty?: string): Game {

        let newGame: Game;

        switch(difficulty) {

            case 'EASY':
                newGame = new Game(GameConfigurationFactory.createGameConfigurationEasy());
                return newGame;

            case 'NORMAL':
                newGame = new Game(GameConfigurationFactory.createGameConfigurationNormal());
                return newGame;

            case 'HARD':
                newGame = new Game(GameConfigurationFactory.createGameConfigurationHard());
                return newGame;

            default:
                newGame = new Game(GameConfigurationFactory.createGameConfigurationEasy());
                return newGame;
        }

    }


}
