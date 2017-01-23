import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { routing } from '../app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        DashboardComponent
    ],
    entryComponents: [
        DashboardComponent
    ]
})
export class DashboardModule {}
