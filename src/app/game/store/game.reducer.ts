import {
    GAME_INIT_BOARD, GAME_FINISH, GAME_MARK_FIELD, GAME_SHOW_MINES, GAME_SHOW_FIELDS,
    GAME_REVEAL_FIELD, GAME_UPDATE_FIELDS, GAME_CREATE_NEW
} from './actions';
import { Game } from '../game';
import { GameFactory } from '../game.factory';


const defaultState: Game = GameFactory.createDefaultGame();

export function gameReducer(state: Game = defaultState, action: any = {})  {
    switch(action.type) {

        case GAME_INIT_BOARD:

            const board = {
                boardSize: action.payload.size,
                fields: action.payload.fields
            };

            return Object.assign(GameFactory.createDefaultGame(), state, board);

        case GAME_CREATE_NEW:

            const newGame = action.payload;

            return Object.assign(GameFactory.createDefaultGame(), state, newGame);

        case GAME_REVEAL_FIELD:

            const revBoard = state;

            revBoard.board.getFields()[action.payload].revelead = true;

            return Object.assign(GameFactory.createDefaultGame(), state, revBoard);

        case GAME_MARK_FIELD:

            const markBoard = state;

            markBoard.board.getFields()[action.payload].marked = true;

            return Object.assign(GameFactory.createDefaultGame(), state, markBoard);

        case GAME_SHOW_MINES:
            return state;

        case GAME_SHOW_FIELDS:
            return state;

        case GAME_FINISH:

            return Object.assign(GameFactory.createDefaultGame(), state, {finished: true});

        case GAME_UPDATE_FIELDS:
            return Object.assign(GameFactory.createDefaultGame(), state, {fields: action.payload});

        default:
            return state;
    }
};