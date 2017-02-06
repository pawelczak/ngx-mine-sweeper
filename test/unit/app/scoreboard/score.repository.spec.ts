import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { ScoreRepository } from '../../../../src/app/scoreboard/score.repository';
import { Score } from '../../../../src/app/scoreboard/score';
import { ADD_SCORE, RESET_SCORES } from '../../../../src/app/scoreboard/actions';


describe('ScoreRepository', () => {


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
                ScoreRepository,
                {provide: Store, useValue: mockStore}
            ]
        });
    });

    it ('should return scores',
        inject([ScoreRepository], (scoreService: ScoreRepository) => {

            // given
            const reducer = 'score';

            spyOn(mockStore, 'select').and.callThrough();

            // when
            scoreService.getScores();

            // then
            expect(mockStore.select).toHaveBeenCalledWith(reducer);
        })
    );

    it ('should add score',
        inject([ScoreRepository], (scoreService: ScoreRepository) => {

            // given
            const givenScore = new Score('', '', ''),
                expectedAction = {type: ADD_SCORE, payload: givenScore};

            spyOn(mockStore, 'dispatch').and.callThrough();

            // when
            scoreService.addScore(givenScore);

            // then
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        })
    );

    it ('should reset scores',
        inject([ScoreRepository], (scoreService: ScoreRepository) => {

            // given
            const expectedAction = {type: RESET_SCORES};

            spyOn(mockStore, 'dispatch').and.callThrough();

            // when
            scoreService.resetScores();

            // then
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        })
    );
});
