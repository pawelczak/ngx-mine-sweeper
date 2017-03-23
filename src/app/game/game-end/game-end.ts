import { GameResults } from './game-results';

export class GameEnd {

    finished: boolean;

    status: boolean;

    private gameResults: GameResults;

    constructor(finished: boolean) {
        this.finished = finished;
    }

    isFinished(): boolean {
        return this.finished;
    }

    endWithSuccess(results: GameResults): GameEnd {
        let gameEnd = new GameEnd(true);
        gameEnd.status = true;
        gameEnd.gameResults = results;
        return gameEnd;
    }

    endWithFailure(results: GameResults): GameEnd {
        let gameEnd = new GameEnd(true);
        gameEnd.status = false;
        gameEnd.gameResults = results;
        return gameEnd;
    }

    isSuccessful(): boolean {
        if (this.finished) {
            return this.status;
        } else {
            return false;
        }
    }

    isFailure(): boolean {
        if (this.finished) {
            return !this.status;
        } else {
            return false;
        }
    }

    setGameResult(difficulty: string, time: string): void {
        this.gameResults = new GameResults(difficulty, time);
    }

    getGameResults(): GameResults {
        return this.gameResults;
    }

}
