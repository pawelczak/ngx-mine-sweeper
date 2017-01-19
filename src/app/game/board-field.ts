import { BoardFieldStatus } from './board-field-status';

export class BoardField {
    marked: boolean = false;
    status: BoardFieldStatus;
    mines: number = 0;
    revelead: boolean = true;


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

    hasMines(): boolean {
        return this.mines !== 0;
    }

    putMine(): void {
        this.status = BoardFieldStatus.MINE;
    }

    addMineCount(): void {
        this.mines += 1;
    }

    revel(): void {
        this.revelead = true;
    }

    isRevelead(): boolean {
        return this.revelead;
    }

    isMarked(): boolean {
        return this.marked;
    }
}
