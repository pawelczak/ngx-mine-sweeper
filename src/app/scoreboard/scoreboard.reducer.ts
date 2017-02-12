import { SCOREBOARD_ADD_SCORE, SCOREBOARD_RESET_SCORES, SCOREBOARD_CHANGE_DIFFICULTY } from './actions';
import { ScoreboardStore } from './scoreboard-store';
import { ScoreboardStoreFactory } from './scoreboard-store.factory';
import { Score } from './score';

const defaultState: ScoreboardStore = ScoreboardStoreFactory.createDefaultReducerData();

export const scoreboardReducer = (state: ScoreboardStore = defaultState, action: {type?: string, payload?: any} = {}) => {

    switch(action.type) {

        case SCOREBOARD_ADD_SCORE:
            const newScores: Array<Score> = [<Score>action.payload];

            return Object.assign(ScoreboardStoreFactory.createEmptyStore(), state, {scores: newScores});

        case SCOREBOARD_RESET_SCORES:
            const emptyScores: Array<Score> = [];

            return Object.assign(ScoreboardStoreFactory.createEmptyStore(), state, {scores: emptyScores});

        case SCOREBOARD_CHANGE_DIFFICULTY:

            return Object.assign(ScoreboardStoreFactory.createEmptyStore(), state, {difficulty: action.payload});

        default:
            return state;
    }

};
