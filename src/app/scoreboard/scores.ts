import { ADD_SCORE, RESET_SCORES } from './actions';
import { Score } from './score';

const defaultState: Array<Score> = [
    new Score('John Doe', '00:59', 'easy'),
    new Score('John Doe', '00:54', 'easy'),
    new Score('John Doe', '01:23', 'easy')
];

export const scores = (state: Array<Score> = defaultState, action: any) => {

    switch(action.type) {

        case ADD_SCORE:
            return [
                ...state,
                Object.assign({}, action.payload)
            ];

        case RESET_SCORES:
            return [];

        default:
            return state;
    }

};
