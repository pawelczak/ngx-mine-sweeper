import { Action } from '@ngrx/store'

import { Language } from '../../util/language/language';
import { OptionsState } from './options-state';

const OPTIONS_PREFIX = '[Options]';
export const ActionTypes = {
    INIT_STATE: `${OPTIONS_PREFIX}INIT_STATE`,
    CHANGE_LANGUAGE: `${OPTIONS_PREFIX}CHANGE_LANGUAGE`,
    CHANGE_DIFFICULTY: `${OPTIONS_PREFIX}CHANGE_DIFFICULTY`
};

export class InitStateAction implements Action {
    type = ActionTypes.INIT_STATE;

    constructor(public payload: OptionsState) {}
}

export class ChangeLanguageAction implements Action {
    type = ActionTypes.CHANGE_LANGUAGE;

    constructor(public payload: Language) {}
}

export class ChangeDifficultyAction implements Action {
    type = ActionTypes.CHANGE_DIFFICULTY;

    constructor(public payload: string) {}
}

export type Actions = InitStateAction | ChangeLanguageAction | ChangeDifficultyAction;
