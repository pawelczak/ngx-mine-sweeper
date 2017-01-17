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

        this.updateMineCounts();
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

    private addMineAtField(field: BoardField): void {
        field.addMineCount();
    }


    private updateMineCounts(): void {

        for (let i = 0, length = this.fields.length; i < length; i += 1) {

            if (this.fields[i].isMine()) {

                if (i - 1 > 0 && !this.fields[i - 1].isMine()) {
                    this.fields[i - 1].addMineCount();
                }

                if (i + 1 > 0 && !this.fields[i + 1].isMine()) {
                    this.fields[i + 1].addMineCount();
                }

                let topRowIndex = i - this.boardSize.cols;

                if (topRowIndex - 1 > 0 && !this.fields[topRowIndex - 1].isMine()) {
                    this.fields[topRowIndex - 1].addMineCount();
                }

                if (topRowIndex > 0 && !this.fields[topRowIndex].isMine()) {
                    this.fields[topRowIndex].addMineCount();
                }

                if (topRowIndex + 1 > 0 && topRowIndex + 1 < length && !this.fields[topRowIndex + 1].isMine()) {
                    this.fields[topRowIndex + 1].addMineCount();
                }

                let bottomRowIndex = i + this.boardSize.cols;

                if (bottomRowIndex - 1 > 0 && bottomRowIndex - 1 < length && !this.fields[bottomRowIndex - 1].isMine()) {
                    this.fields[bottomRowIndex - 1].addMineCount();
                }

                if (bottomRowIndex < length &&!this.fields[bottomRowIndex].isMine()) {
                    this.fields[bottomRowIndex].addMineCount();
                }

                if (bottomRowIndex + 1 < length && !this.fields[bottomRowIndex + 1].isMine()) {
                    this.fields[bottomRowIndex + 1].addMineCount();
                }
            }

        }
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
