import { Score } from './score';

export class ScoreboardStore {

    scores: Array<Score>;

    difficulty: string;

    constructor(scores: Array<Score>, difficulty: string) {
        this.scores = scores;
        this.difficulty = difficulty;
    }
}
