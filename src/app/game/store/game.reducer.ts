import { GameState } from './game-state';
import { GameStateFactory } from './game-state.factory';
import * as game from './actions';


const defaultState: GameState = GameStateFactory.createDefaultState();

export function gameReducer(state: GameState = defaultState, action: game.Actions): GameState  {
    switch(action.type) {

        case game.ActionTypes.INIT_STATE:

            const newGame = action.payload;

            return Object.assign({}, state, newGame);

        case game.ActionTypes.INIT_BOARD:

            const board = {
                board: {
                    boardSize: action.payload.size,
                    fields: action.payload.fields
                }
            };

            return Object.assign({}, state, board);

        case game.ActionTypes.REVEAL_FIELD:

            return state;

        case game.ActionTypes.MARK_FIELD:

            const markedFields = [...state.board.fields];

            markedFields[action.payload].marked = true;

            const markBoard = {
                board: {
                    fields: markedFields,
                    boardSize: state.board.boardSize
                }
            };

            return Object.assign({}, state, markBoard);

        case game.ActionTypes.SHOW_MINES:
            return state;

        case game.ActionTypes.SHOW_FIELDS:
            return state;

        case game.ActionTypes.FINISH:

            const gameStatus = {
                finished: true,
                status: action.payload
            };

            return Object.assign({}, state, {finished: gameStatus});

        case game.ActionTypes.UPDATE_FIELDS:

            const fields = action.payload.fields,
                markedMines = action.payload.markedMines;

            const updatedState = {
                board: {
                    fields: fields,
                    boardSize: state.board.boardSize
                },
                markedMines: markedMines
            };


            return Object.assign({}, state, updatedState);

        default:
            return state;
    }
};
