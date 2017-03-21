import { scoreboardReducer } from '../../../../src/app/scoreboard/store/scoreboard.reducer';
import { Score } from '../../../../src/app/scoreboard/score';
import { ScoreboardState } from '../../../../src/app/scoreboard/store/scoreboard-state';
import { initialState } from '../../../../src/app/scoreboard/store/scoreboard.reducer';
import * as ScoreboardActions from '../../../../src/app/scoreboard/store/actions';

describe('scoreboardReducer - reducer', () => {

    it ('should return state for default action', () => {

        // given
        const action = {} as any;

        // when
        const actualState = scoreboardReducer(initialState, action);

        // then
        expect(initialState).toBe(actualState);
    });


    it ('should add score', () => {

        // given
        const score = new Score('Selena Kayle', '00:37', 'easy'),
            addScoreAction = new ScoreboardActions.AddScoreAction(score),
            expectedState: ScoreboardState = new ScoreboardState([...initialState.scores, score], 'EASY');

        // when
        const actualState: ScoreboardState = scoreboardReducer(initialState, addScoreAction);

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should reset scores', () => {

        // given
        const resetAction = new ScoreboardActions.ResetScoresAction(),
            expectedState: ScoreboardState = new ScoreboardState([], 'EASY');

        // when
        const actualState: ScoreboardState = scoreboardReducer(initialState, resetAction);

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should change difficulty', () => {

        // given
        const difficulty: string = 'HARD',
            changeDifficultyAction = new ScoreboardActions.ChangeDifficultyAction(difficulty),
            expectedState: ScoreboardState = new ScoreboardState([...initialState.scores], difficulty);

        // when
        const actualState: ScoreboardState = scoreboardReducer(initialState, changeDifficultyAction);

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

});
