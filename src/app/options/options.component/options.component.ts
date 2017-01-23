import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { OptionsRepository } from '../options.repository';
import { Options } from '../options';


@Component({
    selector: 'options',
    templateUrl: './options.component.html'
})
export class OptionsComponent implements OnDestroy {

    options: Options = null;

    private subscription: Subscription;

    constructor(private optionsStore: OptionsRepository) {

        this.subscription = this.optionsStore
                                .getOptions()
                                .subscribe((options: Options) => {
                                    this.options = options;
                                });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    changeLanguage(): void {
        this.optionsStore.changeLanguage('pl');
    }
}
