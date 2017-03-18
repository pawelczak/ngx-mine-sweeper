import { BoardField } from './board-field';
import { BoardFieldStatus } from './board-field-status';
import { GameConfiguration } from './configuration/game-configuration';
import { BoardSize } from './board/board-size';

export class Game {

    fields: Array<BoardField> = [];

    boardReady: boolean = false;

    finished: boolean = false;

    boardSize: BoardSize;

    private minesCount: number;

    constructor(gameConfiguration: GameConfiguration) {

        this.minesCount = gameConfiguration.getMinesCount();

        this.boardSize = gameConfiguration.getBoardSize();

        for (let i = 0, length = this.boardSize.countFieldsNumber(); i < length; i += 1) {
            this.fields[i] = new BoardField(BoardFieldStatus.EMPTY);
        }

    }

    static createGame(game: Game): Game {
        const configuration = new GameConfiguration(game.boardSize.getCols(), game.boardSize.getRows(), game.minesCount);

        return new Game(configuration);
    }

    getBoardSize() {
        return this.boardSize;
    }

    getFields() {
        return this.fields;
    }

    isFinished(): boolean {
        return this.finished;
    }

    initBoardWithRandomMines(): void {
        this.resetFields();

        for (let i = 0; i < this.boardSize.countFieldsNumber(); i += 1) {
            let randomStatus = Math.random() > 1.9 ? BoardFieldStatus.MINE : BoardFieldStatus.EMPTY;

            this.fields.push(new BoardField(randomStatus));
        }

        while (this.countMines() !== this.minesCount) {
            const fieldIndex = Math.floor(Math.random() * this.boardSize.countFieldsNumber());

            if (this.fields[fieldIndex].isEmpty()) {
                this.fields[fieldIndex].putMine();
            }
        }

        this.updateMinesCounters();
        this.boardReady = true;
    }

    countMines(): number {
        return this.fields
                    .map((field) => {
                        return +field.isMine();
                    })
                    .reduce((prev, current) => {
                        return prev + current;
                    }, 0);
    }

    markField(position: number): void {
        this.fields[position].mark();

        this.checkIsGameFinished();
    }

    // TODO move to board
    revealField(position: number): void {

        if (this.fields[position].isRevelead()) {
            return;
        }

        if (this.fields[position].isEmpty()) {
            this.revealEmptyFields(position);
        }

        if (this.fields[position].isMine()) {

            this.fields[position].reveal();

            this.finish();
        }

        this.checkIsGameFinished();
    }

    revealEmptyFields(position: number): void {
        this.fields[position].reveal();
        this.revealSurroundingEmptyFields(position);
    }

    // TODO move to board
    private revealSurroundingEmptyFields(position: number): void {

        this.revealSurroundingFieldsWithMines(position);

        if (position % this.boardSize.getCols() !== 0) {
            this.revealEmptyField(position - 1);
            // this.revealEmptyField(position - 1 - this.boardSize.cols);
            // this.revealEmptyField(position - 1 + this.boardSize.cols);
        }

        if (position % this.boardSize.getCols() !== this.boardSize.getCols() - 1) {
            this.revealEmptyField(position + 1);
            // this.revealEmptyField(position + 1 - this.boardSize.cols);
            // this.revealEmptyField(position + 1 + this.boardSize.cols);
        }

        this.revealEmptyField(position - this.boardSize.getCols());
        this.revealEmptyField(position + this.boardSize.getCols());
    }

    private revealEmptyField(position: number): void {
        if (this.isSurroundingField(position) && this.fields[position].isEmpty() && !this.fields[position].isRevelead() && !this.fields[position].hasMines()) {
            this.fields[position].reveal();
            this.revealSurroundingEmptyFields(position);
        }
    }

    private updateMinesCounters(): void {

        for (let i = 0, length = this.fields.length; i < length; i += 1) {

            if (this.fields[i].isMine()) {
                if (i % this.boardSize.getCols() !== 0) {
                    this.checkAndIncMineCounter(i - 1);
                    this.checkAndIncMineCounter(i - 1 - this.boardSize.getCols());
                    this.checkAndIncMineCounter(i - 1 + this.boardSize.getCols());
                }

                if (i % this.boardSize.getCols() !== this.boardSize.getCols() -1) {
                    this.checkAndIncMineCounter(i + 1);
                    this.checkAndIncMineCounter(i + 1 - this.boardSize.getCols());
                    this.checkAndIncMineCounter(i + 1 + this.boardSize.getCols());
                }

                this.checkAndIncMineCounter(i - this.boardSize.getCols());
                this.checkAndIncMineCounter(i + this.boardSize.getCols());
            }
        }
    }

    private checkAndIncMineCounter(position: number): void {
        if (this.isSurroundingField(position) && !this.fields[position].isMine()) {
            this.fields[position].incMinesCounter();
        }
    }

    private isSurroundingField(position: number): boolean {
        return position >= 0
            && position < this.fields.length;
    }

    private revealSurroundingFieldsWithMines(position: number): void {
        if (position % this.boardSize.getCols() !== 0) {
            this.checkFieldForMinesAndReveal(position - 1);
            this.checkFieldForMinesAndReveal(position - 1 - this.boardSize.getCols());
            this.checkFieldForMinesAndReveal(position - 1 + this.boardSize.getCols());
        }

        if (position % this.boardSize.getCols() !== this.boardSize.getCols() -1) {
            this.checkFieldForMinesAndReveal(position + 1);
            this.checkFieldForMinesAndReveal(position + 1 - this.boardSize.getCols());
            this.checkFieldForMinesAndReveal(position + 1 + this.boardSize.getCols());
        }

        this.checkFieldForMinesAndReveal(position - this.boardSize.getCols());
        this.checkFieldForMinesAndReveal(position + this.boardSize.getCols());
    }

    private checkFieldForMinesAndReveal(position: number): void {
        if (this.isSurroundingField(position) && !this.fields[position].isRevelead() && this.fields[position].hasMines()) {
            this.fields[position].reveal();
        }
    }

    private resetFields(): void {
        this.fields = [];
    }

    private finish(): void {
        this.finished = true;
    }

    private checkIsGameFinished(): void {

        const untouchedFields =
            this.fields
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

        this.finished = untouchedFields === 0;
    }
}
