import { Score } from './score';

export class ScoreboardState {

    scores: Array<Score>;

    difficulty: string;

    constructor(scores: Array<Score>, difficulty: string) {
        this.scores = scores;
        this.difficulty = difficulty;
    }

    static createFromState(state: ScoreboardState): ScoreboardState {
        return new ScoreboardState(state.scores, state.difficulty);
    }
}
