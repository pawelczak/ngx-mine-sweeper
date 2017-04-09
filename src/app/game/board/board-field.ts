import { BoardFieldStatus } from './board-field-status';

export class BoardField {
    marked: boolean = false;
    status: BoardFieldStatus;
    minesCounter: number = 0;
    revelead: boolean = false;


    constructor(status: BoardFieldStatus) {
        this.status = status;
    }

    isMine(): boolean {
        return this.status === BoardFieldStatus.MINE;
    }

    isEmpty(): boolean {
        return this.status === BoardFieldStatus.EMPTY;
    }

    getMinesCounter(): number {
        return this.minesCounter;
    }

    hasMines(): boolean {
        return this.minesCounter > 0;
    }

    putMine(): void {
        this.status = BoardFieldStatus.MINE;
    }

    incMinesCounter(): void {
        this.minesCounter += 1;
    }

    reveal(): void {
        this.revelead = true;
        this.marked = false;
    }

    isRevelead(): boolean {
        return this.revelead;
    }

    isMarked(): boolean {
        return this.marked;
    }

    mark(): number {
        if (!this.revelead) {
            this.marked = !this.marked;
            return this.marked ? 1 : -1;
        }
        return 0;
    }
}
