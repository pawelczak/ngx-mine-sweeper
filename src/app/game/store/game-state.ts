import { GameEnd } from '../game.component/game-end/game-end';

export class GameState {

    board: {
        boardSize: any,

        fields: Array<any>
    };

    minesCount: number;

    finished: GameEnd;

    markedMines: number;

    constructor(board: any, minesCount: number) {
        this.board = board;
        this.minesCount = minesCount;
        this.finished = new GameEnd(false);
        this.markedMines = 0;
    }

}
