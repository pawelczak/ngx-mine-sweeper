import { BoardField } from './board-field';

export class Game {

    fields: Array<BoardField> = [];

    boardReady: boolean = false;

    finished: boolean = false;

    boardSize: {
        rows: number,
        cols: number
    } = {
        rows: 0,
        cols: 0
    };

    countMines(): number {
        return this.fields
                    .map((field) => {
                        return field.mines;
                    })
                    .reduce((prev, current) => {
                        return prev + current;
                    }, 0);
    }
}
