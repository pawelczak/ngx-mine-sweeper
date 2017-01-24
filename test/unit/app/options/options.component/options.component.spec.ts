import { TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Options } from '../../../../../src/app/options/options';
import { OptionsComponent } from '../../../../../src/app/options/options.component/options.component';
import { OptionsRepository } from '../../../../../src/app/options/options.repository';


describe('OptionsComponent', () => {

    const options = new Options('polish');

    class MockOptionsRepository {

        options$ = new ReplaySubject(1);

        getOptions() {
            this.options$.next(options);

            return this.options$.asObservable();
        }

        changeLanguage(lang: string): void {
            this.options$.next(new Options(lang));
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
        expect(compInstance.options.language).toEqual(options.language);
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
        expect(compInstance.options.language).toEqual('pl');
    });

});
