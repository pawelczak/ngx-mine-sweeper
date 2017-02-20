import { ScoreboardState } from './scoreboard-state';
import { ScoreboardStateFactory } from './scoreboard-state.factory';
import { Score } from './score';
import * as scoreboard from './actions';

const defaultState: ScoreboardState = ScoreboardStateFactory.createDefaultReducerData();

export const scoreboardReducer = (state: ScoreboardState = defaultState, action: scoreboard.Actions) => {

    switch(action.type) {

        case scoreboard.ActionTypes.ADD_SCORE:
            const newScores: Array<Score> = [(action.payload as Score)];

            return Object.assign(ScoreboardStateFactory.createEmptyState(), state, {scores: newScores});

        case scoreboard.ActionTypes.RESET_SCORES:
            const emptyScores: Array<Score> = [];

            return Object.assign(ScoreboardStateFactory.createEmptyState(), state, {scores: emptyScores});

        case scoreboard.ActionTypes.CHANGE_DIFFICULTY:

            const difficulty = action.payload;

            return Object.assign(ScoreboardStateFactory.createEmptyState(), state, {difficulty: difficulty});

        default:
            return state;
    }

};
