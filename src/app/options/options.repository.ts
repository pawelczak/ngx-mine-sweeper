import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { createSelector } from 'reselect';
import 'rxjs/add/operator/map';

import { AppState, getOptions } from '../app.reducers';
import { Language } from '../util/language/language';
import { OptionsState } from './store/options-state';
import { getOptionsLanguage, getOptionsDifficulty } from './store/selectors';
import * as OptionsActions from './store/actions';


@Injectable()
export class OptionsRepository {

    constructor(private store: Store<AppState>) {}

    getOptions(): Observable<OptionsState> {
        return this.store.select(getOptions);
    }

    getLanguage(): Observable<Language> {
        return this.store.select(getOptionsLanguage);
    }

    getDifficulty(): Observable<string> {
        return this.store.select(getOptionsDifficulty);
    }

    changeLanguage(language: Language): void {
        this.store.dispatch(new OptionsActions.ChangeLanguageAction(language));
    }

    changeDifficulty(difficulty: string): void {
        this.store.dispatch(new OptionsActions.ChangeDifficultyAction(difficulty));
    }

}
