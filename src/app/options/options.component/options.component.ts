import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { OptionsStore } from '../options.store';
import { Options } from '../options';


@Component({
    selector: 'options',
    templateUrl: './options.component.html'
})
export class OptionsComponent implements OnDestroy {

    options: Options = null;

    private subscription: Subscription;

    constructor(private optionsStore: OptionsStore) {

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
