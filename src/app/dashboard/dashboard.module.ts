import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TranslateModule } from '@ngx-translate/core';

import { DashboardComponent } from './dashboard.component';
import { routing } from '../app.routing';

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
