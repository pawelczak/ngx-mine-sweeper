import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { OptionsComponent } from './options.component/options.component';
import { OptionsRepository } from './options.repository';


export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
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
