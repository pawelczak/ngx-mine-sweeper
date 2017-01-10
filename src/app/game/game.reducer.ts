import { GAME_INIT_BOARD, GAME_FINISH, GAME_MARK_MINE, GAME_SHOW_MINES, GAME_SHOW_FIELDS } from './actions';
import { Game } from './game';


const defaultState: Game = new Game();

export const gameReducer = (state: Game = defaultState, action: any = {}) => {
    switch(action.type) {

        case GAME_INIT_BOARD:
            return state;

        case GAME_MARK_MINE:
            return state;

        case GAME_SHOW_MINES:
            return state;

        case GAME_SHOW_FIELDS:
            return state;

        case GAME_FINISH:
            return state;

        default:
            return state;
    }
};
