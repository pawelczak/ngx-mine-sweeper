import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { OptionsRepository } from '../options.repository';
import { OptionsState } from '../store/options-state';


@Component({
    selector: 'options',
    templateUrl: './options.component.html',
    styleUrls: [
        './options.component.ngx.scss'
    ],
})
export class OptionsComponent implements OnDestroy {

    language: string;

    difficulty: string;

    private subscription: Subscription;

    constructor(private optionsRepository: OptionsRepository) {

        this.subscription = this.optionsRepository
                                .getOptions()
                                .subscribe((options: OptionsState) => {
                                    this.language = options.language;
                                    this.difficulty = options.difficulty;
                                });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    changeLanguage(language: string): void {
        this.optionsRepository.changeLanguage(language);
    }

    changeDifficulty(difficulty: string): void {
        this.optionsRepository.changeDifficulty(difficulty);
    }

    isDifficulty(difficulty: string): boolean {
        return difficulty === this.difficulty;
    }

    isLanguage(language: string): boolean {
        return language === this.language;
    }
}
