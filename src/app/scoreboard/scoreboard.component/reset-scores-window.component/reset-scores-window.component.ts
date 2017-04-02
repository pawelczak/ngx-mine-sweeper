import { Component } from '@angular/core';

import { LanguageService } from '../../../util/language/language.service';

@Component({
    selector: 'reset-scores-window',
    template: `
        <p>Do you want to reset your scoreboard?</p>
        <p>{{ 'SCOREBOARD.RESET_SCOREBOARD_MESSAGE' | translate }}</p>
    `
})
export class ResetScoresWindowComponent {

    constructor(languageService: LanguageService) {}
}
