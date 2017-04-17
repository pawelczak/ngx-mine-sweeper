import { ScoreboardState } from './scoreboard-state';
import { ScoreboardStateFactory } from './scoreboard-state.factory';
import { Score } from '../score';
import * as scoreboard from './actions';

const initialState: ScoreboardState = ScoreboardStateFactory.createDefaultReducerData();

export function scoreboardReducer(state: ScoreboardState = initialState, action: scoreboard.Actions): ScoreboardState {

    switch(action.type) {

        case scoreboard.ActionTypes.INIT_STATE:

            // action.payload.scores = action.payload.scores.sort(Score.sortScoresByTime);

            return Object.assign(ScoreboardStateFactory.createDefaultReducerData(), action.payload);

        case scoreboard.ActionTypes.ADD_SCORE:
            let newScores: Array<Score> = [...state.scores, (action.payload as Score)];

            newScores = newScores.sort(Score.sortScoresByTime);

            return new ScoreboardState(newScores, state.difficulty);

        case scoreboard.ActionTypes.RESET_SCORES:
            const emptyScores: Array<Score> = [];

            return new ScoreboardState(emptyScores, state.difficulty);

        case scoreboard.ActionTypes.CHANGE_DIFFICULTY:
            const difficulty = action.payload;

            return new ScoreboardState(state.scores, difficulty);

        default:
            return state;
    }

}
