import { ScoresStore } from './scores-store';
import { ScoreFactory } from './score.factory';
import { Score } from './score';


export class ScoresStoreFactory {

    static createEmptyStore(): ScoresStore {
        return new ScoresStore([]);
    }

    static createDefaultReducerData(): ScoresStore {

        const scores: Array<Score> = ScoreFactory.createDefaultReducerData();

        return new ScoresStore(scores);
    }

}
