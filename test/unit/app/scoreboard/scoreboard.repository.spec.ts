import { TestBed, inject } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { ScoreboardRepository } from '../../../../src/app/scoreboard/scoreboard.repository';
import { Score } from '../../../../src/app/scoreboard/score';
import * as ScoreboardActions from '../../../../src/app/scoreboard/actions';


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

    it ('should return scoreboard',
        inject([ScoreboardRepository], (scoreboardRepository: ScoreboardRepository) => {

            // given
            const reducer = 'scoreboard';

            spyOn(mockStore, 'select').and.callThrough();

            // when
            scoreboardRepository.getScoreboardState();

            // then
            expect(mockStore.select).toHaveBeenCalledWith(reducer);
        })
    );

    it ('should add score',
        inject([ScoreboardRepository], (scoreboardRepository: ScoreboardRepository) => {

            // given
            const givenScore = new Score('', '', ''),
                expectedAction = new ScoreboardActions.AddScoreAction(givenScore);

            spyOn(mockStore, 'dispatch').and.callThrough();

            // when
            scoreboardRepository.addScore(givenScore);

            // then
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        })
    );

    it ('should reset scores',
        inject([ScoreboardRepository], (scoreboardRepository: ScoreboardRepository) => {

            // given
            const expectedAction = new ScoreboardActions.ResetScoresAction();

            spyOn(mockStore, 'dispatch').and.callThrough();

            // when
            scoreboardRepository.resetScores();

            // then
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        })
    );

    it ('should change difficulty',
        inject([ScoreboardRepository], (scoreboardRepository: ScoreboardRepository) => {

            // given
            const difficulty = 'NORMAL',
                expectedAction = new ScoreboardActions.ChangeDifficultyAction(difficulty);

            spyOn(mockStore, 'dispatch').and.callThrough();

            // when
            scoreboardRepository.changeDifficulty(difficulty);

            // then
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        })
    );
});
