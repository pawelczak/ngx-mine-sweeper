import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable()
export class GameService {

    constructor(private store: Store<any>) {
        this.store.select('game');
    }

}
