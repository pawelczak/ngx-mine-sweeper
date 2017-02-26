import { Injectable } from '@angular/core';

import { Game } from './game';
import { GameConfiguration } from './configuration/game-configuration';
import { BoardSize } from './board/board-size';
import { GameConfigurationFactory } from './configuration/game-configuration.factory';

@Injectable()
export class GameFactory {


    static createDefaultGame(): Game {
        return new Game(new GameConfiguration(1, 1, 1));
    }

    static createEmptyBoardGame(boardSize: BoardSize): Game {
        let game = new Game(new GameConfiguration(boardSize.getCols(), boardSize.getRows(), 1));

        return game;
    }

    static createInitialGame(difficulty?: string): Game {

        switch(difficulty) {

            case 'EASY':
                return new Game(GameConfigurationFactory.createGameConfigurationEasy());

            case 'NORMAL':
                return new Game(GameConfigurationFactory.createGameConfigurationNormal());

            case 'HARD':
                return new Game(GameConfigurationFactory.createGameConfigurationHard());

            default:
                return new Game(GameConfigurationFactory.createGameConfigurationEasy());
        }

    }


}
