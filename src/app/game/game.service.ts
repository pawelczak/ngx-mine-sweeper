import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Game } from './game';

@Injectable()
export class GameService {

    constructor(private store: Store<any>) {}

    getGame(): Observable<Game> {
        return this.store.select('gameReducer');
    }
}
