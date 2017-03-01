import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { OptionsState } from './store/options-state';
import * as OptionsActions from './store/actions';

@Injectable()
export class OptionsRepository {

    constructor(private store: Store<OptionsState>) {}

    getOptions(): Observable<OptionsState> {
        return this.store.select('options');
    }

    getLanguage(): Observable<string> {
        return this.store
                    .select('options')
                    .map((options: OptionsState) => {
                        return options.language;
                    });
    }

    getDifficulty(): Observable<string> {
        return this.store
                    .select('options')
                    .map((options: OptionsState) => {
                        return options.difficulty;
                    });
    }

    changeLanguage(language: string): void {
        this.store.dispatch(new OptionsActions.ChangeLanguageAction(language));
    }
}
