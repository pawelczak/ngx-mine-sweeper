import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
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

        getScoreboardState(): Observable<ScoreboardStore> {
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

    describe('empty list', () => {

        const emptyScores: Array<Score> = [],
            emptyStore = new ScoreboardStore(emptyScores, 'EASY');

        class MockScoreboardEmptyRepository {
            scoreboard$ = new ReplaySubject(1);

            getScoreboardState(): Observable<ScoreboardStore> {
                this.scoreboard$.next(emptyStore);

                return this.scoreboard$.asObservable();
            }
        }

        beforeEach(() => {
            TestBed
                .overrideComponent(ScoreboardComponent, {
                    add: {
                        providers: [
                            {provide: ScoreboardRepository, useClass: MockScoreboardEmptyRepository}
                        ]
                    }
                });
        });

        it ('should print empty list', () => {

            // given
            const fixture = TestBed.createComponent(ScoreboardComponent),
                compInstance = fixture.componentInstance,
                element = fixture.nativeElement,
                givenScores = scoreboardStore.scores;

            // when
            fixture.detectChanges();

            // then
            expect(compInstance.scores.length).toEqual(0);
            expect(element.querySelectorAll('li').length).toEqual(1);
            expect(element.querySelectorAll('li')[0].innerText).toEqual(`No scores.`);
        });
    });

    describe('change difficulty', () => {

        const diffScores: Array<Score> = [
                new Score('Wow', '21.01.2017', 'EASY'),
                new Score('Great', '22.01.2017', 'NORMAL'),
                new Score('Great', '22.01.2017', 'NORMAL'),
                new Score('Awesome', '23.01.2017', 'HARD'),
                new Score('Awesome', '23.01.2017', 'HARD'),
                new Score('Awesome', '23.01.2017', 'HARD')
            ],
            diffStore = new ScoreboardStore(diffScores, 'EASY');

        class MockScoreboardDifficultyRepository {
            scoreboard$ = new ReplaySubject(1);

            getScoreboardState(): Observable<ScoreboardStore> {
                this.scoreboard$.next(diffStore);

                return this.scoreboard$.asObservable();
            }

            changeDifficulty(diff: string): void {
                diffStore.difficulty = diff;
                this.scoreboard$.next(diffStore);
            }
        }

        beforeEach(() => {
            TestBed
                .overrideComponent(ScoreboardComponent, {
                    add: {
                        providers: [
                            {provide: ScoreboardRepository, useClass: MockScoreboardDifficultyRepository}
                        ]
                    }
                });
        });


        it ('should have default difficulty set to easy', () => {

            // given
            const fixture = TestBed.createComponent(ScoreboardComponent),
                compInstance = fixture.componentInstance,
                element = fixture.nativeElement;

            // when & then
            expect(compInstance.difficulty).toBe('EASY');
        });

        it ('should be possible to change difficulty to easy', () => {

            // given
            const fixture = TestBed.createComponent(ScoreboardComponent),
                compInstance = fixture.componentInstance,
                element = fixture.nativeElement;

            compInstance.difficulty = 'NORMAL';

            // when
            fixture.detectChanges();
            fixture.nativeElement.querySelectorAll('button#scoreboard-difficulty-easy')[0].click();
            fixture.detectChanges();
            const scores = element.querySelectorAll('.scores > li');

            // when & then
            expect(compInstance.difficulty).toEqual('EASY');
            expect(scores.length).toEqual(diffScores.filter((s) => {return s.difficulty === 'EASY'}).length);
        });

        it ('should be possible to change difficulty to normal', () => {

            // given
            const fixture = TestBed.createComponent(ScoreboardComponent),
                compInstance = fixture.componentInstance,
                element = fixture.nativeElement;

            // when
            fixture.detectChanges();
            fixture.nativeElement.querySelectorAll('button#scoreboard-difficulty-normal')[0].click();
            fixture.detectChanges();
            const scores = element.querySelectorAll('.scores > li');

            // when & then
            expect(compInstance.difficulty).toEqual('NORMAL');
            expect(scores.length).toEqual(diffScores.filter((s) => {return s.difficulty === 'NORMAL'}).length);
        });

        it ('should be possible to change difficulty to hard', () => {

            // given
            const fixture = TestBed.createComponent(ScoreboardComponent),
                compInstance = fixture.componentInstance,
                element = fixture.nativeElement;

            // when
            fixture.detectChanges();
            fixture.nativeElement.querySelectorAll('button#scoreboard-difficulty-hard')[0].click();
            fixture.detectChanges();
            const scores = element.querySelectorAll('.scores > li');

            // when & then
            expect(compInstance.difficulty).toEqual('HARD');
            expect(scores.length).toEqual(diffScores.filter((s) => {return s.difficulty === 'HARD'}).length);
        });

    })

});
