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

            const revBoard = state;

            revBoard.board.fields[action.payload].revelead = true;

            return Object.assign({}, state, revBoard);

        case game.ActionTypes.MARK_FIELD:

            const markBoard = state;

            markBoard.board.fields[action.payload].marked = true;

            return Object.assign({}, state, markBoard);

        case game.ActionTypes.SHOW_MINES:
            return state;

        case game.ActionTypes.SHOW_FIELDS:
            return state;

        case game.ActionTypes.FINISH:

            return Object.assign({}, state, {finished: true});

        case game.ActionTypes.UPDATE_FIELDS:

            state.board.fields = action.payload;


            return Object.assign({}, state);

        default:
            return state;
    }
};
