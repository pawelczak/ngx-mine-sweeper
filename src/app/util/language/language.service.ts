import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { OptionsRepository } from '../../options/options.repository';
import { defaultLanguage, Language } from './language';

@Injectable()
export class LanguageService {

    constructor(private translateService: TranslateService,
                private optionsRepository: OptionsRepository) {

        this.setDefaultLang();
        this.optionsRepository
            .getLanguage()
            .subscribe((language: Language) => {
                this.translateService.use(Language[language]);
            });
    }

    private setDefaultLang(): void {
        this.translateService.setDefaultLang(Language[defaultLanguage]);
    }

}
