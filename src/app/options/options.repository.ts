import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Options } from './options';
import { CHANGE_LANGUAGE } from './actions';

@Injectable()
export class OptionsRepository {

    // TODO Store should not be type of any
    constructor(private store: Store<any>) {}

    getOptions(): Observable<Options> {
        return this.store.select('options');
    }

    changeLanguage(language: string): void {
        this.store.dispatch({type: CHANGE_LANGUAGE, payload: language});
    }
}
