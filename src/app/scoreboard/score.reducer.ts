import { ADD_SCORE, RESET_SCORES } from './actions';
import { ScoresStore } from './scores-store';
import { ScoresStoreFactory } from './scores-store.factory';
import { Score } from './score';

const defaultState: ScoresStore = ScoresStoreFactory.createDefaultReducerData();

export const scoreReducer = (state: ScoresStore = defaultState, action: {type?: string, payload?: any} = {}) => {

    switch(action.type) {

        case ADD_SCORE:
            const newScores: Array<Score> = [<Score>action.payload];

            return Object.assign(ScoresStoreFactory.createEmptyStore(), state, {scores: newScores});

        case RESET_SCORES:
            const emptyScores: Array<Score> = [];

            return Object.assign(ScoresStoreFactory.createEmptyStore(), state, {scores: emptyScores});

        default:
            return state;
    }

};
