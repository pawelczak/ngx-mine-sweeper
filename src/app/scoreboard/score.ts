import { TimeFormatter } from '../util/time/time.formatter';

export class Score {
    name: string;
    time: string;
    difficulty: string; // TODO replace with enum

    constructor(name: string, time: string, difficulty: string) {
        this.name = name;
        this.time = time;
        this.difficulty = difficulty;
    }

    static sortScoresByTime(scoreOne: Score, scoreTwo: Score): number {
        return TimeFormatter.formatToSeconds(scoreOne.time) - TimeFormatter.formatToSeconds(scoreTwo.time);
    }
}
