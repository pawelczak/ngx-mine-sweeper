import { BoardSize } from '../board/board-size';

export class GameConfiguration {

    private boardSize: BoardSize;

    private minesCount: number;

    constructor(cols: number, rows: number, minesCount: number) {
        this.boardSize = new BoardSize(rows, cols);
        this.minesCount = minesCount;
    }

    getBoardSize(): BoardSize {
        return this.boardSize;
    }

    getMinesCount(): number {
        return this.minesCount;
    }

}
