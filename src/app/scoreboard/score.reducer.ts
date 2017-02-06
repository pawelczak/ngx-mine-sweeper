import { ADD_SCORE, RESET_SCORES } from './actions';
import { Score } from './score';
import { ScoreFactory } from './score.factory';

const defaultState: Array<Score> = ScoreFactory.createDefaultReducerData();

export const scoreReducer = (state: Array<Score> = defaultState, action: {type?: string, payload?: any} = {}) => {

    switch(action.type) {

        case ADD_SCORE:
            return [
                ...state,
                action.payload
            ];

        case RESET_SCORES:
            return [];

        default:
            return state;
    }

};
