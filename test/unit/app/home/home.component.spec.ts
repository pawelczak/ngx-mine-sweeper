import { TestBed } from '@angular/core/testing';

import { HomeComponent } from '../../../../src/app/dashboard/home.component';


describe('HomeComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [HomeComponent]});
    });

    it ('should have default template', () => {

        // given
        const fixture = TestBed.createComponent(HomeComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.nativeElement.textContent).toContain('Home');
    });

});
