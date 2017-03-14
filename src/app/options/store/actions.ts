import { Action } from '@ngrx/store'

import { Language } from '../../util/language/language';

export const ActionTypes = {
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
    CHANGE_DIFFICULTY: 'CHANGE_DIFFICULTY'
};

export class ChangeLanguageAction implements Action {
    type = ActionTypes.CHANGE_LANGUAGE;

    constructor(public payload: Language) {}
}

export class ChangeDifficultyAction implements Action {
    type = ActionTypes.CHANGE_DIFFICULTY;

    constructor(public payload: string) {}
}

export type Actions = ChangeLanguageAction | ChangeDifficultyAction;
