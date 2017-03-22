import { BoardField } from './board/board-field';
import { GameConfiguration } from './configuration/game-configuration';
import { BoardSize } from './board/board-size';
import { Board } from './board/board';
import { GameEnd } from './game-end/game-end';
import { GameResults } from './game-end/game-results';

export class Game {

    board: Board;

    boardReady: boolean = false;

    gameEnd: GameEnd;

    private minesCount: number;

    constructor(gameConfiguration: GameConfiguration) {

        this.minesCount = gameConfiguration.getMinesCount();

        this.board = new Board(gameConfiguration.getBoardSize());

        this.gameEnd = new GameEnd(false);
    }

    static createGame(game: Game): Game {
        const configuration = new GameConfiguration(game.board.getBoardSize(), game.minesCount);

        return new Game(configuration);
    }

    getBoardSize(): BoardSize {
        return this.board.getBoardSize();
    }

    getFields(): Array<BoardField> {
        return this.board.getFields();
    }

    isFinished(): boolean {
        return this.gameEnd.isFinished();
    }

    initBoardWithRandomMines(): void {
        this.board.initBoardWithRandomMines(this.minesCount);

        this.board.updateMinesCounters();
        this.boardReady = true;
    }

    countMines(): number {
        return this.board.countMines();
    }

    markField(position: number): void {
        this.board.markField(position);

        this.checkIsGameFinished();
    }

    revealField(position: number): void {

        if (this.board.getFields()[position].isRevelead()) {
        }

        if (this.board.getFields()[position].isEmpty()) {
            this.board.revealEmptyFields(position);
        }

        if (this.board.getFields()[position].isMine()) {

            this.board.getFields()[position].reveal();

            this.gameEnd = this.gameEnd.endWithFailure(new GameResults('EASY', '12'));
        }

        this.checkIsGameFinished();
    }

    private checkIsGameFinished(): void {

        if (this.board.countUntouchedFields() === 0) {
            this.gameEnd.endWithSuccess(new GameResults('EASY', '12'));
        }

    }
}
