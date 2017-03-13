import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { OptionsRepository } from '../options/options.repository';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.ngx.scss'
    ]
})
export class DashboardComponent {

    // constructor(translateService: TranslateService,
    //             private optionsRepository: OptionsRepository) {
	//
    //     translateService.setDefaultLang('en');
    //     this.optionsRepository
    //         .getLanguage()
    //         .subscribe((language: string) => {
    //             translateService.use(language);
    //         });
    // }

}
