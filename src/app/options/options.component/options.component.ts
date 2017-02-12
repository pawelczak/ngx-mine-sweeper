import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { OptionsRepository } from '../options.repository';
import { Options } from '../options';


@Component({
    selector: 'options',
    templateUrl: './options.component.html',
    styleUrls: [
        './options.component.ngx.scss'
    ],
})
export class OptionsComponent implements OnDestroy {

    options: Options = null;

    private subscription: Subscription;

    constructor(private optionsRepository: OptionsRepository) {

        this.subscription = this.optionsRepository
                                .getOptions()
                                .subscribe((options: Options) => {
                                    this.options = options;
                                });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    changeLanguage(): void {
        this.optionsRepository.changeLanguage('pl');
    }
}
