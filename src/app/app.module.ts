import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component';


@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        OptionsComponent
    ],
    providers: [],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
