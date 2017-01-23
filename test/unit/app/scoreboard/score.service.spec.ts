import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ScoreService } from '../../../../src/app/scoreboard/score.service';
import { ScoreRepository } from '../../../../src/app/scoreboard/score.repository';
import { Score } from '../../../../src/app/scoreboard/score';
import { ADD_SCORE, RESET_SCORES } from '../../../../src/app/scoreboard/actions';



describe('ScoreService', () => {


    class MockScoreRepository {

        findAll(): any {
            return new BehaviorSubject([]);
        }
    }

    class MockStore {

        select(): any {}

        dispatch(): void {}
    }

    const mockStore = new MockStore();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ScoreService,
                {provide: ScoreRepository, useClass: MockScoreRepository},
                {provide: Store, useValue: mockStore}
            ]
        });
    });

    it ('should return scores',
        inject([ScoreService], (scoreService: ScoreService) => {

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
        inject([ScoreService], (scoreService: ScoreService) => {

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
        inject([ScoreService], (scoreService: ScoreService) => {

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
