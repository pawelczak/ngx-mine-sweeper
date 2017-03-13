import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { OptionsComponent } from './options.component/options.component';
import { OptionsRepository } from './options.repository';


@NgModule({
    imports: [
        BrowserModule,
        TranslateModule
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
