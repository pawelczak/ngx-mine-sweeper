import { GameConfiguration } from './game-configuration';
import { BoardSize } from '../board/board-size';

export class GameConfigurationFactory {

    static createGameConfigurationEasy(): GameConfiguration {
        return new GameConfiguration(new BoardSize(8, 8), 10);
    }

    static createGameConfigurationNormal(): GameConfiguration {
        return new GameConfiguration(new BoardSize(12, 12), 10);
    }

    static createGameConfigurationHard(): GameConfiguration {
        return new GameConfiguration(new BoardSize(16, 16), 1);
    }
}
