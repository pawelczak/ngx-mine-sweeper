import {
    GAME_INIT_BOARD, GAME_FINISH, GAME_MARK_FIELD, GAME_SHOW_MINES, GAME_SHOW_FIELDS,
    GAME_REVEAL_FIELD, GAME_UPDATE_FIELDS
} from './actions';
import { Game } from './game';
import { GameFactory } from './game.factory';


const defaultState: Game = GameFactory.createDefaultGame();

export const gameReducer = (state: Game = defaultState, action: any = {}) => {
    switch(action.type) {

        case GAME_INIT_BOARD:

            const board = {
                boardSize: action.payload.size,
                fields: action.payload.fields
            };

            return Object.assign(GameFactory.createDefaultGame(), state, board);

        case GAME_REVEAL_FIELD:

            const revBoard = state;

            revBoard.fields[action.payload].revelead = true;

            return Object.assign(GameFactory.createDefaultGame(), state, revBoard);

        case GAME_MARK_FIELD:

            const markBoard = state;

            markBoard.fields[action.payload].marked = true;

            return Object.assign(GameFactory.createDefaultGame(), state, markBoard);

        case GAME_SHOW_MINES:
            return state;

        case GAME_SHOW_FIELDS:
            return state;

        case GAME_FINISH:
            return state;

        case GAME_UPDATE_FIELDS:
            return Object.assign(GameFactory.createDefaultGame(), state, {fields: action.payload});

        default:
            return state;
    }
};
