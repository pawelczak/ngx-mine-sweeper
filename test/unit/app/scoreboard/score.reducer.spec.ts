import { scoreReducer } from '../../../../src/app/scoreboard/score.reducer';
import { Score } from '../../../../src/app/scoreboard/score';
import { ADD_SCORE, RESET_SCORES } from '../../../../src/app/scoreboard/actions';
import { ScoresStore } from '../../../../src/app/scoreboard/scores-store';


describe('scoreReducer - reducer', () => {

    it ('should add score', () => {

        // given
        const score = new Score('Selena Kayle', '00:37', 'easy'),
            scoresState: ScoresStore = new ScoresStore([score]),
            expectedState: ScoresStore = Object.assign(new ScoresStore([]), scoresState);

        // when
        const actualState: ScoresStore = scoreReducer(undefined, {type: ADD_SCORE, payload: score});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should reset state', () => {

        // given
        const expectedState: ScoresStore = new ScoresStore([]);

        // when
        const actualState: ScoresStore = scoreReducer(undefined, {type: RESET_SCORES});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

});
