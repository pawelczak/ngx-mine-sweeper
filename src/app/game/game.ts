import { BoardField } from './board/board-field';
import { GameConfiguration } from './configuration/game-configuration';
import { BoardSize } from './board/board-size';
import { Board } from './board/board';

export class Game {

    board: Board;

    boardReady: boolean = false;

    finished: boolean = false;

    private minesCount: number;

    constructor(gameConfiguration: GameConfiguration) {

        this.minesCount = gameConfiguration.getMinesCount();

        this.board = new Board(gameConfiguration.getBoardSize());
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
        return this.finished;
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
            return;
        }

        if (this.board.getFields()[position].isEmpty()) {
            this.board.revealEmptyFields(position);
        }

        if (this.board.getFields()[position].isMine()) {

            this.board.getFields()[position].reveal();

            this.finish();
        }

        this.checkIsGameFinished();
    }

    private finish(): void {
        this.finished = true;
    }

    private checkIsGameFinished(): void {

        const untouchedFields =
            this.board
                .getFields()
                .map((field) => {
                    if (!field.isRevelead()) {
                        if (!field.isMarked()) {
                            return 1;
                        }
                    }
                    return 0;
                })
                .reduce((prev, current) => {
                    return prev + current;
                }, 0);

        this.finished = this.finished ? true : untouchedFields === 0;
    }
}
