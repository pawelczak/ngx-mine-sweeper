import { scoreboardReducer } from '../../../../src/app/scoreboard/scoreboard.reducer';
import { Score } from '../../../../src/app/scoreboard/score';
import { SCOREBOARD_ADD_SCORE, SCOREBOARD_RESET_SCORES, SCOREBOARD_CHANGE_DIFFICULTY } from '../../../../src/app/scoreboard/actions';
import { ScoreboardState } from '../../../../src/app/scoreboard/scoreboard-state';


describe('scoreboardReducer - reducer', () => {


    it ('should add score', () => {

        // given
        const score = new Score('Selena Kayle', '00:37', 'easy'),
            scoresState: ScoreboardState = new ScoreboardState([score], 'EASY'),
            expectedState: ScoreboardState = Object.assign(new ScoreboardState([], 'EASY'), scoresState);

        // when
        const actualState: ScoreboardState = scoreboardReducer(undefined, {type: SCOREBOARD_ADD_SCORE, payload: score});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should reset scores', () => {

        // given
        const expectedState: ScoreboardState = new ScoreboardState([], 'EASY');

        // when
        const actualState: ScoreboardState = scoreboardReducer(undefined, {type: SCOREBOARD_RESET_SCORES});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should change difficulty', () => {

        // given
        const expectedState: ScoreboardState = Object.assign(scoreboardReducer(), {difficulty: 'HARD'});

        // when
        const actualState: ScoreboardState = scoreboardReducer(undefined, {type: SCOREBOARD_CHANGE_DIFFICULTY, payload: 'HARD'});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

});
