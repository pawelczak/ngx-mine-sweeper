import { BoardField } from './board-field';

export class Game {

    fields: Array<BoardField> = [];

    boardReady: boolean = false;

    finished: boolean = false;


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
