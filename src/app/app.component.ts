import { Component, ViewEncapsulation } from '@angular/core';

import { LanguageService } from './util/language/language.service';


@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.ngx.scss'
    ],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    constructor(languageService: LanguageService) {}

}
