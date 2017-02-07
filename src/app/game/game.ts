import { BoardField } from './board-field';
import { BoardFieldStatus } from './board-field-status';

export class Game {

    fields: Array<BoardField> = [];

    boardReady: boolean = false;

    finished: boolean = false;

    boardSize: {
        rows: number,
        cols: number
    } = {
        rows: 1,
        cols: 1
    };

    constructor(boardSize: any) {
        this.boardSize = boardSize;

        for (let i = 0, length = boardSize.cols * boardSize.rows; i < length; i += 1) {
            this.fields[i] = new BoardField(BoardFieldStatus.EMPTY);
        }
    }

    getBoardSize() {
        return this.boardSize;
    }

    getFields() {
        return this.fields;
    }

    initBoardWithRandomMines(): void {
        const mines = 6;

        this.setBoardSize(8, 8);
        this.resetFields();

        for (let i = 0; i < 64; i += 1) {
            let randomStatus = Math.random() > 1.9 ? BoardFieldStatus.MINE : BoardFieldStatus.EMPTY;

            this.fields.push(new BoardField(randomStatus));
        }

        while (this.countMines() !== 10) {
            const fieldIndex = Math.floor(Math.random() * 64);

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

    // TODO move to board
    revealField(position: number): void {

        if (this.fields[position].isRevelead()) {
            return;
        }


        if (this.fields[position].isEmpty()) {
            this.revealEmptyFields(position);
        }

        if (this.fields[position].isMine()) {

        }

        if (this.fields[position].hasMines()) {

        }

    }

    revealEmptyFields(position: number): void {
        this.fields[position].reveal();
        this.revealSurroundingEmptyFields(position);
    }

    // TODO move to board
    private revealSurroundingEmptyFields(position: number): void {

        if (position % this.boardSize.cols !== 0) {
            this.revealEmptyField(position - 1);
            this.revealEmptyField(position - 1 - this.boardSize.cols);
            this.revealEmptyField(position - 1 + this.boardSize.cols);
        }

        if (position % this.boardSize.cols !== this.boardSize.cols - 1) {
            this.revealEmptyField(position + 1);
            this.revealEmptyField(position + 1 - this.boardSize.cols);
            this.revealEmptyField(position + 1 + this.boardSize.cols);
        }

        this.revealEmptyField(position - this.boardSize.cols);
        this.revealEmptyField(position + this.boardSize.cols);
    }

    private revealEmptyField(position: number): void {
        if (this.fields[position].isEmpty() && !this.fields[position].isRevelead()) {
            this.fields[position].reveal();
            this.revealSurroundingEmptyFields(position);
        }
    }

    private updateMinesCounters(): void {

        for (let i = 0, length = this.fields.length; i < length; i += 1) {

            if (this.fields[i].isMine()) {
                if (i % this.boardSize.cols !== 0) {
                    this.checkAndIncMineCounter(i - 1);
                    this.checkAndIncMineCounter(i - 1 - this.boardSize.cols);
                    this.checkAndIncMineCounter(i - 1 + this.boardSize.cols);
                }

                if (i % this.boardSize.cols !== this.boardSize.cols -1) {
                    this.checkAndIncMineCounter(i + 1);
                    this.checkAndIncMineCounter(i + 1 - this.boardSize.cols);
                    this.checkAndIncMineCounter(i + 1 + this.boardSize.cols);
                }

                this.checkAndIncMineCounter(i - this.boardSize.cols);
                this.checkAndIncMineCounter(i + this.boardSize.cols);
            }
        }
    }

    private checkAndIncMineCounter(position: number): void {
        if (this.isSurroundingField(position) && !this.fields[position].isMine()) {
            this.fields[position].incMinesCounter();
        }
    }

    private isSurroundingField(position: number): boolean {
        return position >= 0 && position < this.fields.length;
    }


    private setBoardSize(rows: number, cols: number): void {
        this.boardSize = {
            rows: rows,
            cols: cols
        };
    }

    private resetFields(): void {
        this.fields = [];
    }
}
