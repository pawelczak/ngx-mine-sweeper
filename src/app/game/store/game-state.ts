import { Board } from 'src/app/game/board/board';

export class GameState {

    board: {
        boardSize: any,

        fields: Array<any>
    };

    minesCount: number;

    finished: boolean = false;

    constructor(board: any, minesCount: number) {
        this.board = board;
        this.minesCount = minesCount;
    }

}
