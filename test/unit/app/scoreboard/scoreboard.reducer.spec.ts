import { scoreboardReducer } from '../../../../src/app/scoreboard/scoreboard.reducer';
import { Score } from '../../../../src/app/scoreboard/score';
import { SCOREBOARD_ADD_SCORE, SCOREBOARD_RESET_SCORES, SCOREBOARD_CHANGE_DIFFICULTY } from '../../../../src/app/scoreboard/actions';
import { ScoreboardState } from '../../../../src/app/scoreboard/scoreboard-state';
import * as ScoreboardActions from '../../../../src/app/scoreboard/actions';

describe('scoreboardReducer - reducer', () => {


    it ('should add score', () => {

        // given
        const score = new Score('Selena Kayle', '00:37', 'easy'),
            addScoreAction = new ScoreboardActions.AddScoreAction(score),
            scoresState: ScoreboardState = new ScoreboardState([score], 'EASY'),
            expectedState: ScoreboardState = Object.assign(new ScoreboardState([], 'EASY'), scoresState);

        // when
        const actualState: ScoreboardState = scoreboardReducer(undefined, addScoreAction);

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should reset scores', () => {

        // given
        const resetAction = new ScoreboardActions.ResetScoresAction(),
            expectedState: ScoreboardState = new ScoreboardState([], 'EASY');

        // when
        const actualState: ScoreboardState = scoreboardReducer(undefined, resetAction);

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should change difficulty', () => {

        // given
        const difficulty: string = 'HARD',
            changeDifficultyAction = new ScoreboardActions.ChangeDifficultyAction(difficulty),
            expectedState: ScoreboardState = Object.assign(new ScoreboardState([], 'EASY'), { difficulty: difficulty});

        // when
        const actualState: ScoreboardState = scoreboardReducer(undefined, changeDifficultyAction);

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

});
