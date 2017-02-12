import { Score } from './score';

export class ScoreFactory {

    static createDefaultReducerData(): Array<Score> {

        const scores: Array<Score> = [
            new Score('John Doe', '12:45', 'EASY'),
            new Score('John Doe', '10:15', 'EASY'),
            new Score('John Doe', '34:59', 'NORMAL')
        ];

        return scores;
    }
}
