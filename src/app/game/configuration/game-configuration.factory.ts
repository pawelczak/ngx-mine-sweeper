import { GameConfiguration } from './game-configuration';

export class GameConfigurationFactory {

    static createGameConfigurationEasy(): GameConfiguration {
        return new GameConfiguration(8, 8, 10);
    }

    static createGameConfigurationNormal(): GameConfiguration {
        return new GameConfiguration(12, 12, 10);
    }

    static createGameConfigurationHard(): GameConfiguration {
        return new GameConfiguration(16, 16, 10);
    }
}
