import { ScoreFactory } from '../../../../src/app/scoreboard/score.factory';
import { Score } from '../../../../src/app/scoreboard/score';
describe('ScoreFactory', () => {


    it('should create default data for reducer', () => {

        // when
        const expectedScores: Array<Score> = ScoreFactory.createDefaultReducerData();

        // then
        expect(expectedScores.length).toBeGreaterThan(0);
        for (let score of expectedScores) {
            expect(score instanceof Score).toBe(true);
        }
    });

});


