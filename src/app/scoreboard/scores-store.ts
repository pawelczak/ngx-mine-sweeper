import { Score } from './score';

export class ScoresStore {
    scores: Array<Score>;

    constructor(scores: Array<Score>) {
        this.scores = scores;
    }
}
