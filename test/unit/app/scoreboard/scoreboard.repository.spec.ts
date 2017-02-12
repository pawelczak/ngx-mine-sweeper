import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { ScoreboardRepository } from '../../../../src/app/scoreboard/scoreboard.repository';
import { Score } from '../../../../src/app/scoreboard/score';
import { SCOREBOARD_ADD_SCORE, SCOREBOARD_RESET_SCORES } from '../../../../src/app/scoreboard/actions';


describe('ScoreboardRepository', () => {


    class MockStore {

        select(): any {
            return {
                map: () => {}
            };
        }

        dispatch(): void {}
    }

    const mockStore = new MockStore();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ScoreboardRepository,
                {provide: Store, useValue: mockStore}
            ]
        });
    });

    it ('should return scores',
        inject([ScoreboardRepository], (scoreService: ScoreboardRepository) => {

            // given
            const reducer = 'scoreboard';

            spyOn(mockStore, 'select').and.callThrough();

            // when
            scoreService.getScoreboardState();

            // then
            expect(mockStore.select).toHaveBeenCalledWith(reducer);
        })
    );

    it ('should add score',
        inject([ScoreboardRepository], (scoreService: ScoreboardRepository) => {

            // given
            const givenScore = new Score('', '', ''),
                expectedAction = {type: SCOREBOARD_ADD_SCORE, payload: givenScore};

            spyOn(mockStore, 'dispatch').and.callThrough();

            // when
            scoreService.addScore(givenScore);

            // then
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        })
    );

    it ('should reset scores',
        inject([ScoreboardRepository], (scoreService: ScoreboardRepository) => {

            // given
            const expectedAction = {type: SCOREBOARD_RESET_SCORES};

            spyOn(mockStore, 'dispatch').and.callThrough();

            // when
            scoreService.resetScores();

            // then
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        })
    );
});
