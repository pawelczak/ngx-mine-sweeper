import { BoardFieldStatus } from './board-field-status';

export class BoardField {
    marked: boolean = false;
    status: BoardFieldStatus;
    mines: number = 0;
}
