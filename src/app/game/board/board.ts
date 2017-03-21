import { BoardField } from './board-field';
import { BoardFieldStatus } from './board-field-status';
import { BoardSize } from './board-size';

export class Board {

    private fields: Array<BoardField> = [];

    private boardSize: BoardSize;

    constructor(boardSize: BoardSize) {
        this.boardSize = boardSize;
        this.initializeWithEmptyFields();
    }

    getBoardSize(): BoardSize {
        return this.boardSize;
    }

    getFields() {
        return this.fields;
    }

    initializeWithEmptyFields() {
        this.resetFields();
        for (let i = 0, length = this.boardSize.countFieldsNumber(); i < length; i += 1) {
            this.fields.push(new BoardField(BoardFieldStatus.EMPTY));
        }
    }

    initBoardWithRandomMines(minesCount: number): void {
        this.initializeWithEmptyFields();

        let mines = 0;

        while (mines !== minesCount) {
            const fieldIndex = Math.floor(Math.random() * this.boardSize.countFieldsNumber());

            if (this.fields[fieldIndex].isEmpty()) {
                this.fields[fieldIndex].putMine();
                mines++;
            }
        }
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
    }

    revealEmptyFields(position: number): void {
        this.fields[position].reveal();
        this.revealSurroundingEmptyFields(position);
    }

    revealSurroundingEmptyFields(position: number): void {

        this.revealSurroundingFieldsWithMines(position);

        if (position % this.boardSize.getCols() !== 0) {
            this.revealEmptyField(position - 1);
        }

        if (position % this.boardSize.getCols() !== this.boardSize.getCols() - 1) {
            this.revealEmptyField(position + 1);
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

    updateMinesCounters(): void {

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
        this.fields.length = 0;
    }
}
