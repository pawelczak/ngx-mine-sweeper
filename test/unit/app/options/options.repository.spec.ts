import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Store } from '@ngrx/store';

import { OptionsRepository } from '../../../../src/app/options/options.repository';
import { Options } from '../../../../src/app/options/options';
import { CHANGE_LANGUAGE } from '../../../../src/app/options/actions';


describe('OptionsRepository', () => {

    const defaultOptions = new Options('Polish');

    class MockStore {

        private options$ = new BehaviorSubject(defaultOptions);

        select(): Observable<Options> {
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
            const givenLanguage = 'japanese',
                expectedAction = {type: CHANGE_LANGUAGE, payload: givenLanguage};

            spyOn(mockStore, 'dispatch').and.callThrough();

            // when
            optionsRepository.changeLanguage(givenLanguage);

            // then
            expect(mockStore.dispatch).toHaveBeenCalledWith(expectedAction);
        })
    );

});