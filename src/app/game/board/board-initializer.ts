import { BoardField } from './board-field';
import { Board } from './board';
import { BoardSize } from './board-size';

export class BoardInitializer {

    initSimpleBoard(board: Board, minesCount: number): void {
        board.initializeWithEmptyFields();

        let mines = 0;

        while (mines !== minesCount) {
            const fieldIndex = Math.floor(Math.random() * board.getBoardSize().countFieldsNumber());

            if (board.getField(fieldIndex).isEmpty()) {
                board.getField(fieldIndex).putMine();
                mines++;
            }
        }
    }


    initSmart(board: Board, minesCount: number, position: number): void {

        board.initializeWithEmptyFields();

        let minelessFieldPositions = this.generateSurroundingPositions(board.getBoardSize(), position);

        while (minesCount !== 0) {
            const fieldIndex = Math.floor(Math.random() * board.getBoardSize().countFieldsNumber());

            if (minelessFieldPositions.find((m) => m === fieldIndex) !== undefined) {
                continue;
            }

            if (board.getField(fieldIndex).isEmpty()) {
                board.getField(fieldIndex).putMine();
                minesCount--;
            }
        }

    }

    private generateSurroundingPositions(boardSize: BoardSize, position: number) {

        let positions: Array<number> = [position];

        this.checkAndPosition(boardSize, positions, position + 1);
        this.checkAndPosition(boardSize, positions, position - 1);
        this.checkAndPosition(boardSize, positions, position + 1 - boardSize.getRows());
        this.checkAndPosition(boardSize, positions, position + 1 + boardSize.getRows());
        this.checkAndPosition(boardSize, positions, position + boardSize.getRows());
        this.checkAndPosition(boardSize, positions, position - 1 - boardSize.getRows());
        this.checkAndPosition(boardSize, positions, position - 1 + boardSize.getRows());
        this.checkAndPosition(boardSize, positions, position - boardSize.getRows());

        return positions;
    }

    private checkAndPosition(boardSize, positions, newPosition): void {
        if (boardSize.isPositionValid(newPosition)) {
            positions.push(newPosition);
        }
    }

}
