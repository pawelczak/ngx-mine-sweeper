import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Score } from '../score';
import { ScoreboardRepository } from '../scoreboard.repository';
import { ScoreboardState } from '../store/scoreboard-state';
import { ModalWindowService } from '../../util/modal/modal-window.service';
import { ResetScoresWindowComponent } from './reset-scores-window.component/reset-scores-window.component';
import { ModalConfiguration } from '../../util/modal/modal-configuration';
import { TimeFormatter } from '../../util/time/time.formatter';

declare var _: any;

@Component({
    selector: 'scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: [
        './scoreboard.component.ngx.scss'
    ]
})
export class ScoreboardComponent implements OnDestroy {

    set scores(scores: Array<Score>) {
        this.unSortedScores = _.cloneDeep(scores);
        this.unSortedScores.sort(this.sortScoresByTime);
    }

    get scores(): Array<Score> {
        return this.unSortedScores;
    }

    difficulty: string;

    private subscription: Subscription;

    private resetModalConfiguration: ModalConfiguration;

    private unSortedScores: Array<Score> = [];

    constructor(private changeDetectorRef: ChangeDetectorRef,
                private scoreboardRepository: ScoreboardRepository,
                private modalWindowService: ModalWindowService) {

        this.subscription = this.scoreboardRepository
                                .getScoreboardState()
                                .subscribe((state: ScoreboardState) => {
                                    this.scores = state.scores;
                                    this.difficulty = state.difficulty;
                                    this.changeDetectorRef.markForCheck();
                                });

        this.resetModalConfiguration = this.createResetScoreboardWindowConfig();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    isDifficulty(difficulty: string): boolean {
        return this.difficulty === difficulty;
    }

    resetScores(): void {

        this.modalWindowService
            .open(this.resetModalConfiguration, ResetScoresWindowComponent)
            .subscribe((response: boolean) => {
                if (response) {
                    this.scoreboardRepository.resetScores();
                }
            });
    }

    setDifficulty(difficulty: string): void {
        this.scoreboardRepository.changeDifficulty(difficulty);
    }

    private createResetScoreboardWindowConfig(): ModalConfiguration {
        let modalConfiguration = <ModalConfiguration>Object.create(null);

        modalConfiguration.title = 'Reset scoreboard';

        return modalConfiguration;
    }

    private sortScoresByTime(scoreOne: Score, scoreTwo: Score): number {

        return TimeFormatter.formatToSeconds(scoreOne.time) - TimeFormatter.formatToSeconds(scoreTwo.time);
    }

}
