import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';

import { routing } from '../app.routing';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule,
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
