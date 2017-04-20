export class BoardSize {

    private cols: number;

    private rows: number;

    constructor(cols: number, rows: number) {
        this.cols = cols;
        this.rows = rows;
    }

    getCols(): number {
        return this.cols;
    }

    getRows(): number {
        return this.rows;
    }

    countFieldsNumber(): number {
        return this.rows * this.cols;
    }

    isPositionValid(position: number): boolean {
        return position >= 0 && position < this.countFieldsNumber();
    }
}
