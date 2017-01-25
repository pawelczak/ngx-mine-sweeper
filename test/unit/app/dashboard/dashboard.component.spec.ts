import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from '../../../../src/app/dashboard/dashboard.component';


describe('AppComponent', () => {


    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    RouterTestingModule
                ],
                declarations: [
                    DashboardComponent
                ]
            });
    });

    it ('should have title', () => {

        // given
        const fixture = TestBed.createComponent(DashboardComponent),
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();

        // then
        expect(element.querySelectorAll('h1')[0].innerText).toBe('Mine Sweeper');
    });
});
