import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ModalCommunicationService {

    private action$ = new Subject();

    getAction(): Observable<boolean> {
        return this.action$.asObservable();
    }

    close() {
        this.action$.next(false);
        this.action$.complete();
    }

    confirm() {
        this.action$.next(true);
        this.action$.complete();
    }

    renew() {
        this.action$ = new Subject();
    }
}
