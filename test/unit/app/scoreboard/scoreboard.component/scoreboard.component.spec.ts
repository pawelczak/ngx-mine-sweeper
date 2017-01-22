import { TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { ScoreboardComponent } from '../../../../../src/app/scoreboard/scoreboard.component/scoreboard.component';
import { ScoreService } from '../../../../../src/app/scoreboard/score.service';
import { Score } from '../../../../../src/app/scoreboard/score';



describe('ScoreboardComponent', () => {

    const scores = [
        new Score('Wow', '21.01.2017', 'easy'),
        new Score('Great', '22.01.2017', 'easy'),
        new Score('Awesome', '23.01.2017', 'easy')
    ];

    class MockScoreService {

        scores$ = new ReplaySubject(1);

        getScores() {
            this.scores$.next(scores);

            return this.scores$.asObservable();
        }

        resetScores(): void {
            this.scores$.next([]);
        }
    }

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    ScoreboardComponent
                ]
            })
            .overrideComponent(ScoreboardComponent, {
                add: {
                    providers: [
                        {provide: ScoreService, useClass: MockScoreService}
                    ]
                }
            });
    });

    it ('should print list of scores', () => {

        // given
        const fixture = TestBed.createComponent(ScoreboardComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();

        // then
        expect(compInstance.scores.length).toEqual(3);
        expect(element.querySelectorAll('li').length).toEqual(3);
        expect(element.querySelectorAll('li')[0].innerText).toEqual(`${scores[0].name} ${scores[0].difficulty} ${scores[0].time}`);
        expect(element.querySelectorAll('li')[1].innerText).toEqual(`${scores[1].name} ${scores[1].difficulty} ${scores[1].time}`);
        expect(element.querySelectorAll('li')[2].innerText).toEqual(`${scores[2].name} ${scores[2].difficulty} ${scores[2].time}`);
    });

    it ('should have reset score feature', () => {

        // given
        const fixture = TestBed.createComponent(ScoreboardComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();
        fixture.nativeElement.querySelectorAll('button')[0].click();
        fixture.detectChanges();

        // then
        expect(compInstance.scores.length).toEqual(0);
        expect(element.querySelectorAll('li').length).toEqual(1);
        expect(element.querySelectorAll('li')[0].innerText).toEqual('No scores.');
    });

});
