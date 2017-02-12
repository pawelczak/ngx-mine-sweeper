import { ScoreboardStore } from './scoreboard-store';
import { ScoreFactory } from './score.factory';
import { Score } from './score';


export class ScoreboardStoreFactory {

    static createEmptyStore(): ScoreboardStore {
        return new ScoreboardStore([], 'EASY');
    }

    static createDefaultReducerData(): ScoreboardStore {

        const scoreboard: Array<Score> = ScoreFactory.createDefaultReducerData();

        return new ScoreboardStore(scoreboard, 'EASY');
    }

}
