import { scoreboardReducer } from '../../../../src/app/scoreboard/scoreboard.reducer';
import { Score } from '../../../../src/app/scoreboard/score';
import { SCOREBOARD_ADD_SCORE, SCOREBOARD_RESET_SCORES } from '../../../../src/app/scoreboard/actions';
import { ScoreboardStore } from '../../../../src/app/scoreboard/scoreboard-store';


describe('scoreboardReducer - reducer', () => {

    it ('should add score', () => {

        // given
        const score = new Score('Selena Kayle', '00:37', 'easy'),
            scoresState: ScoreboardStore = new ScoreboardStore([score]),
            expectedState: ScoreboardStore = Object.assign(new ScoreboardStore([]), scoresState);

        // when
        const actualState: ScoreboardStore = scoreboardReducer(undefined, {type: SCOREBOARD_ADD_SCORE, payload: score});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should reset state', () => {

        // given
        const expectedState: ScoreboardStore = new ScoreboardStore([]);

        // when
        const actualState: ScoreboardStore = scoreboardReducer(undefined, {type: SCOREBOARD_RESET_SCORES});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

});
