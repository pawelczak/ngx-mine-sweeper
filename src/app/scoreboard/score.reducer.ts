import { ADD_SCORE, RESET_SCORES, INIT_SCORES } from './actions';
import { Score } from './score';

const defaultState: Array<Score> = [
    new Score('John Doe', '--:--', 'easy'),
    new Score('John Doe', '--:--', 'easy'),
    new Score('John Doe', '--:--', 'easy')
];

export const scoreReducer = (state: Array<Score> = defaultState, action: {type?: string, payload?: any} = {}) => {

    switch(action.type) {

        case INIT_SCORES:
            return [
                ...action.payload
            ];

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
