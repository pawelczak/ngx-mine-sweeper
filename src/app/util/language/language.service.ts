import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { OptionsRepository } from '../../options/options.repository';

@Injectable()
export class LanguageService {

    constructor(translateService: TranslateService,
                private optionsRepository: OptionsRepository) {

        translateService.setDefaultLang('en');
        this.optionsRepository
            .getLanguage()
            .subscribe((language: string) => {
                translateService.use(language);
            });
    }

}
