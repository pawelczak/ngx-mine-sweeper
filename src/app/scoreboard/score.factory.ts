import { Score } from './score';

export class ScoreFactory {

    static createDefaultReducerData(): Array<Score> {

        const scores: Array<Score> = [
            new Score('John Doe', '--:--', 'easy'),
            new Score('John Doe', '--:--', 'easy'),
            new Score('John Doe', '--:--', 'easy')
        ];

        return scores;
    }
}
