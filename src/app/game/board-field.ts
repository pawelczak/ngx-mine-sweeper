import { BoardFieldStatus } from './board-field-status';

export class BoardField {
    marked: boolean = false;
    status: BoardFieldStatus;
    mines: number = 0;


    constructor(status: BoardFieldStatus) {
        this.status = status;
    }

    isMine(): boolean {
        return this.status === BoardFieldStatus.MINE;
    }

    isEmpty(): boolean {
        return this.status === BoardFieldStatus.EMPTY;
    }

    getMines(): number {
        return this.mines;
    }

    putMine(): void {
        this.status = BoardFieldStatus.MINE;
    }

    addMineCount(): void {
        this.mines += 1;
    }
}
