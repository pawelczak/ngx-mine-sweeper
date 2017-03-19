import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import 'rxjs/add/operator/map';

import { Language } from '../util/language/language';
import { OptionsState } from './store/options-state';
import * as OptionsActions from './store/actions';



@Injectable()
export class OptionsRepository {

    constructor(private store: Store<any>) {}

    getOptions(): Observable<OptionsState> {
        return this.store.select((state) => state.options);
    }

    getLanguage(): Observable<Language> {
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

    changeLanguage(language: Language): void {
        this.store.dispatch(new OptionsActions.ChangeLanguageAction(language));
    }

    changeDifficulty(difficulty: string): void {
        this.store.dispatch(new OptionsActions.ChangeDifficultyAction(difficulty));
    }

}
