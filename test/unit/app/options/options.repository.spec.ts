import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';

import { OptionsRepository } from '../../../../src/app/options/repositories/options.repository';
import { OptionsState } from '../../../../src/app/options/store/options-state';
import { Language } from '../../../../src/app/util/language/language';
import * as OptionsActions from '../../../../src/app/options/store/actions';


describe('OptionsRepository', () => {

    const defaultOptions = new OptionsState(Language.PL, 'EASY');

    class MockStore {

        private options$ = new BehaviorSubject(defaultOptions);

        select(): Observable<OptionsState> {
            return this.options$.asObservable();
        }

        dispatch(action?: any): void {}
    }

    const mockStore = new MockStore();

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                OptionsRepository,
                {provide: Store, useValue: mockStore}
            ]
        });
    });

    it ('should return options',
        inject([OptionsRepository], (optionsRepository: OptionsRepository) => {

            // given
            const reducer = 'options';

            spyOn(mockStore, 'select').and.callThrough();

            // when
            optionsRepository.getOptions();

            // then
            expect(mockStore.select).toHaveBeenCalledWith(reducer);
        })
    );

    it ('should change language',
        inject([OptionsRepository], (optionsRepository: OptionsRepository) => {

            // given
            const givenLanguage = Language.EN,
                expectedAction = new OptionsActions.ChangeLanguageAction(givenLanguage);

            spyOn(mockStore, 'dispatch').and.callThrough();

            // when
            optionsRepository.changeLanguage(givenLanguage);

            // then
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        })
    );

});
