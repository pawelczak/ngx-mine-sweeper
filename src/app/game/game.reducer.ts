import { GAME_INIT_BOARD } from './actions';

export const gameReducer = (state = {}, action: any = {}) => {
    switch(action.type) {

        case GAME_INIT_BOARD:
            return state;

        default:
            return state;
    }
};
