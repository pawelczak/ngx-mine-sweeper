import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OptionsComponent } from './options.component/options.component';
import { OptionsRepository } from './options.repository';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        OptionsComponent
    ],
    providers: [
        OptionsRepository
    ],
    entryComponents: [
        OptionsComponent
    ]
})
export class OptionsModule {}
