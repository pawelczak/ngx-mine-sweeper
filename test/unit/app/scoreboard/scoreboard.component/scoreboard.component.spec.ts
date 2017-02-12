import { TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ScoreboardComponent } from '../../../../../src/app/scoreboard/scoreboard.component/scoreboard.component';
import { ScoreboardRepository } from '../../../../../src/app/scoreboard/scoreboard.repository';
import { Score } from '../../../../../src/app/scoreboard/score';
import { ScoreboardStore } from '../../../../../src/app/scoreboard/scoreboard-store';
import { ScoreByDifficultyPipe } from '../../../../../src/app/scoreboard/scoreboard.component/score-by-difficulty.pipe';


describe('ScoreboardComponent', () => {

    const scores: Array<Score> = [
            new Score('Wow', '21.01.2017', 'EASY'),
            new Score('Great', '22.01.2017', 'EASY'),
            new Score('Awesome', '23.01.2017', 'EASY')
        ],
        scoreboardStore: ScoreboardStore = new ScoreboardStore(scores, 'EASY');

    class MockScoreboardRepository {

        scoreboard$ = new ReplaySubject(1);

        getScoreboardState() {
            this.scoreboard$.next(scoreboardStore);

            return this.scoreboard$.asObservable();
        }

        resetScores(): void {
            scoreboardStore.scores = [];
            this.scoreboard$.next(scoreboardStore);
        }
    }

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    ScoreboardComponent,
                    ScoreByDifficultyPipe
                ]
            })
            .overrideComponent(ScoreboardComponent, {
                add: {
                    providers: [
                        {provide: ScoreboardRepository, useClass: MockScoreboardRepository}
                    ]
                }
            });
    });

    it ('should print list of scores', () => {

        // given
        const fixture = TestBed.createComponent(ScoreboardComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement,
            givenScores = scoreboardStore.scores;

        // when
        fixture.detectChanges();

        // then
        expect(compInstance.scores.length).toEqual(3);
        expect(element.querySelectorAll('li').length).toEqual(3);
        expect(element.querySelectorAll('li')[0].innerText).toEqual(`${givenScores[0].name} ${givenScores[0].time}`);
        expect(element.querySelectorAll('li')[1].innerText).toEqual(`${givenScores[1].name} ${givenScores[1].time}`);
        expect(element.querySelectorAll('li')[2].innerText).toEqual(`${givenScores[2].name} ${givenScores[2].time}`);
    });

    it ('should have reset score feature', () => {

        // given
        const fixture = TestBed.createComponent(ScoreboardComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();
        fixture.nativeElement.querySelectorAll('button#scoreboard-reset')[0].click();
        fixture.detectChanges();

        // then
        expect(compInstance.scores.length).toEqual(0);
        expect(element.querySelectorAll('li').length).toEqual(1);
        expect(element.querySelectorAll('li')[0].innerText).toEqual('No scores.');
    });

});
