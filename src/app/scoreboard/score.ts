export class Score {
    name: string;
    time: string;
    difficulty: string; // TODO replace with enum

    constructor(name: string, time: string, difficulty: string) {
        this.name = name;
        this.time = time;
        this.difficulty = difficulty;
    }
}
