import { scoreReducer } from '../../../../src/app/scoreboard/score.reducer';
import { Score } from '../../../../src/app/scoreboard/score';
import { INIT_SCORES, ADD_SCORE, RESET_SCORES } from '../../../../src/app/scoreboard/actions';

describe('scoreReducer - reducer', () => {


    it ('should init scores', () => {

        // given
        const scores = [
            new Score('John', '02:34', 'easy'),
            new Score('Logan', '01:29', 'easy'),
            new Score('Peter', '02:54', 'easy')
            ],
            expectedState = Object.assign([], scoreReducer(), scores);

        // when
        const actualState = scoreReducer(undefined, {type: INIT_SCORES, payload: scores});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState);
    });

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
