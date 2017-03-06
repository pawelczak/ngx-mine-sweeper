import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from '../../../../src/app/dashboard/dashboard.component';


describe('DashboardComponent', () => {

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    RouterTestingModule,
                    TranslateModule.forRoot()
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
        expect(element.querySelectorAll('h1')[0].innerText).toBe('DASHBOARD.TITLE');
    });
});
