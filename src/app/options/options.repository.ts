import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppState, getOptions } from '../app.reducers';
import { Language } from '../util/language/language';
import { OptionsState } from './store/options-state';
import { getOptionsLanguage, getOptionsDifficulty } from './store/selectors';
import { LocalStorage } from '../util/persist/local-storage';
import * as OptionsActions from './store/actions';



@Injectable()
export class OptionsRepository {

    private OPTIONS_KEY = 'ngx-mine-sweaper-options';

    constructor(private store: Store<AppState>,
                private localStorage: LocalStorage) {
        this.loadFromLocalStorage();
    }

    getOptions(): Observable<OptionsState> {
        return this.store
                    .select(getOptions)
                    .do((options: OptionsState) => {
                        this.localStorage.setObject(this.OPTIONS_KEY, options);
                    });
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

    private loadFromLocalStorage(): void {
        this.store.dispatch(new OptionsActions.InitStateAction(this.getOptionsStateFromLocalStorage()));
    }

    private getOptionsStateFromLocalStorage(): OptionsState {
        return this.localStorage.getObject(this.OPTIONS_KEY) as OptionsState;
    }
}
