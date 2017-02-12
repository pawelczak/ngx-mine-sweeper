import { scoreboardReducer } from '../../../../src/app/scoreboard/scoreboard.reducer';
import { Score } from '../../../../src/app/scoreboard/score';
import { SCOREBOARD_ADD_SCORE, SCOREBOARD_RESET_SCORES, SCOREBOARD_CHANGE_DIFFICULTY } from '../../../../src/app/scoreboard/actions';
import { ScoreboardStore } from '../../../../src/app/scoreboard/scoreboard-store';


describe('scoreboardReducer - reducer', () => {


    it ('should add score', () => {

        // given
        const score = new Score('Selena Kayle', '00:37', 'easy'),
            scoresState: ScoreboardStore = new ScoreboardStore([score], 'EASY'),
            expectedState: ScoreboardStore = Object.assign(new ScoreboardStore([], 'EASY'), scoresState);

        // when
        const actualState: ScoreboardStore = scoreboardReducer(undefined, {type: SCOREBOARD_ADD_SCORE, payload: score});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should reset scores', () => {

        // given
        const expectedState: ScoreboardStore = new ScoreboardStore([], 'EASY');

        // when
        const actualState: ScoreboardStore = scoreboardReducer(undefined, {type: SCOREBOARD_RESET_SCORES});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

    it ('should change difficulty', () => {

        // given
        const expectedState: ScoreboardStore = Object.assign(scoreboardReducer(), {difficulty: 'HARD'});

        // when
        const actualState: ScoreboardStore = scoreboardReducer(undefined, {type: SCOREBOARD_CHANGE_DIFFICULTY, payload: 'HARD'});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState)
    });

});
