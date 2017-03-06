import { Component, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

    changeLanguage(): void {
        this.optionsRepository.changeLanguage('pl');
    }
}
