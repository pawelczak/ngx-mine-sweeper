// 3d party imports
import { Component } from '@angular/core';
import { RouterModule, Routes, provideRoutes } from '@angular/router';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

// app imports
import { AppComponent } from '../../../src/app/app.component';


describe('AppComponent', () => {

    @Component({
        selector: 'empty',
        template: ``
    })
    class EmptyComponent {}

    const mockRoutes: Routes = [
        { path: '', component: EmptyComponent },
        { path: 'repos', component: EmptyComponent },
        { path: 'contact', component: EmptyComponent}
    ];

    const mockRouting = RouterModule.forRoot(mockRoutes);


    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    RouterTestingModule
                ],
                declarations: [
                    AppComponent,
                    EmptyComponent
                ],
                providers: [
                    provideRoutes([]) // TODO need to change this
                ]
            });
    });

    it ('should have navigation & footer', () => {

        // given
        const fixture = TestBed.createComponent(AppComponent),
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();

        // then
        expect(element.querySelectorAll('nav').length).toBe(1);
        expect(element.querySelectorAll('footer').length).toBe(1);
    });
});
