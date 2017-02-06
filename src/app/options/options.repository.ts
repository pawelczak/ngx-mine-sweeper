import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Options } from './options';
import { CHANGE_LANGUAGE } from './actions';

@Injectable()
export class OptionsRepository {

    constructor(private store: Store<Options>) {}

    getOptions(): Observable<Options> {
        return this.store.select('options');
    }

    changeLanguage(language: string): void {
        this.store.dispatch({type: CHANGE_LANGUAGE, payload: language});
    }
}
