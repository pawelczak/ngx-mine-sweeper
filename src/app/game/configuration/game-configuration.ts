import { BoardSize } from '../board/board-size';

export class GameConfiguration {

    private boardSize: BoardSize;

    private minesCount: number;

    constructor(size: BoardSize, minesCount: number) {
        this.boardSize = size;
        this.minesCount = minesCount;
    }

    getBoardSize(): BoardSize {
        return this.boardSize;
    }

    getMinesCount(): number {
        return this.minesCount;
    }

}
