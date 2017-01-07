// 3d party imports
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
    selector: 'options',
    templateUrl: './options.component.html'
})
export class OptionsComponent implements OnDestroy {

    options: any = null;
    private subscription: any;

    constructor(private store: Store<any>) {

        // TODO unsubscribe using merge
        this.subscription = this.store
            .select('options')
            .subscribe((options: any) => {
                this.options = options;
            })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    changeLanguage(): void {
        this.store.dispatch({type: 'CHANGE_LANGUAGE', payload: 'de'});
    }
}
