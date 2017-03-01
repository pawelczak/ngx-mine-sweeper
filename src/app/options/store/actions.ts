import { Action } from '@ngrx/store'

export const ActionTypes = {
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE'
};

export class ChangeLanguageAction implements Action {
    type = ActionTypes.CHANGE_LANGUAGE;

    constructor(public payload: string) {}
}

export type Actions = ChangeLanguageAction;
