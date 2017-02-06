import { scoreReducer } from '../../../../src/app/scoreboard/score.reducer';
import { Score } from '../../../../src/app/scoreboard/score';
import { ADD_SCORE, RESET_SCORES } from '../../../../src/app/scoreboard/actions';


describe('scoreReducer - reducer', () => {

    it ('should add score', () => {

        // given
        const score = new Score('Selena Kayle', '00:37', 'easy'),
            expectedState = Object.assign([], [...scoreReducer(), score]);

        // when
        const actualState = scoreReducer(undefined, {type: ADD_SCORE, payload: score});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should reset state', () => {

        // given
        const expectedState: Array<Score> = [];

        // when
        const actualState = scoreReducer(undefined, {type: RESET_SCORES});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

});
