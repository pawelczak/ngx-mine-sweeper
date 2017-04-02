import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { OptionsComponent } from './options.component/options.component';
import { OptionsRepository } from './repositories/options.repository';
import { DefaultOptionsRepository } from './repositories/default-options.repository';


@NgModule({
    imports: [
        BrowserModule,
        TranslateModule
    ],
    declarations: [
        OptionsComponent
    ],
    providers: [
        {provide: OptionsRepository, useClass: DefaultOptionsRepository}
    ],
    entryComponents: [
        OptionsComponent
    ]
})
export class OptionsModule {}
