import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { OptionsComponent } from '../../../../../src/app/options/options.component/options.component';
import { OptionsRepository } from '../../../../../src/app/options/repositories/options.repository';
import { OptionsState } from '../../../../../src/app/options/store/options-state';
import { Language } from '../../../../../src/app/util/language/language';


describe('OptionsComponent', () => {

    const defaultLanguage = Language.PL,
        defaultDifficulty = 'EASY';

    const options = new OptionsState(defaultLanguage, defaultDifficulty);

    class MockOptionsRepository {

        options$ = new ReplaySubject(1);

        getOptions() {
            this.options$.next(options);

            return this.options$.asObservable();
        }

        changeLanguage(lang: Language): void {
            this.options$.next(new OptionsState(lang, defaultDifficulty));
        }
    }

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    OptionsComponent
                ]
            })
            .overrideComponent(OptionsComponent, {
                add: {
                    providers: [
                        {provide: OptionsRepository, useClass: MockOptionsRepository}
                    ]
                }
            });
    });

    it ('should print list of scores', () => {

        // given
        const fixture = TestBed.createComponent(OptionsComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();

        // then
        expect(compInstance.language).toEqual(options.language);
        expect(element.querySelectorAll('li.language').length).toEqual(1);
        expect(element.querySelectorAll('li.language')[0].innerText).toEqual(`Language: ${options.language}`);
    });

    it ('should have reset score feature', () => {

        // given
        const fixture = TestBed.createComponent(OptionsComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();
        fixture.nativeElement.querySelectorAll('button')[0].click();
        fixture.detectChanges();

        // then
        expect(compInstance.language).toEqual('pl');
    });

});
