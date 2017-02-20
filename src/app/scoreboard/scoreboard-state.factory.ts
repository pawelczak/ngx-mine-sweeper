import { ScoreboardState } from './scoreboard-state';
import { ScoreFactory } from './score.factory';
import { Score } from './score';


export class ScoreboardStateFactory {

    static createEmptyState(): ScoreboardState {
        return new ScoreboardState([], 'EASY');
    }

    static createDefaultReducerData(): ScoreboardState {

        const scoreboard: Array<Score> = ScoreFactory.createDefaultReducerData();

        return new ScoreboardState(scoreboard, 'EASY');
    }

}
