import { Action } from '@ngrx/store';

import { GameState } from 'src/app/game/store/game-state';

export const GAME_CREATE_NEW: string = 'GAME_CREATE_NEW';
export const GAME_INIT_BOARD: string = 'GAME_INIT_BOARD';
export const GAME_FINISH: string = 'GAME_FINISH';
export const GAME_MARK_FIELD: string = 'GAME_MARK_FIELD';
export const GAME_REVEAL_FIELD: string = 'GAME_REVEAL_FIELD';
export const GAME_SHOW_MINES: string = 'GAME_SHOW_MINES';
export const GAME_SHOW_FIELDS: string = 'GAME_SHOW_FIELDS';
export const GAME_UPDATE_FIELDS: string = 'GAME_UPDATE_FIELDS';

const GAME_PREFIX = '[Game]';
export const ActionTypes = {
    INIT_STATE: `${GAME_PREFIX}INIT_STATE`,
    INIT_BOARD: `${GAME_PREFIX}INIT_BOARD`,
    FINISH: `${GAME_PREFIX}FINISH`,
    MARK_FIELD: `${GAME_PREFIX}MARK_FIELD`,
    REVEAL_FIELD: `${GAME_PREFIX}REVEAL_FIELD`,
    SHOW_MINES: `${GAME_PREFIX}SHOW_MINES`,
    REVEAL_FIELD: `${GAME_PREFIX}REVEAL_FIELD`,
    SHOW_FIELDS: `${GAME_PREFIX}SHOW_FIELDS`,
    UPDATE_FIELDS: `${GAME_PREFIX}UPDATE_FIELDS`
};

export class InitStateAction implements Action{
    type = ActionTypes.INIT_STATE;

    constructor(public payload: GameState) {}
}

export class InitBoardAction implements Action {
    type = ActionTypes.INIT_BOARD;

    constructor(public payload: any) {}
}

export class FinishAction implements Action {
    type = ActionTypes.FINISH;

    constructor() {}
}

export class MarkFieldAction implements Action {
    type = ActionTypes.MARK_FIELD;

    constructor(public payload: any) {}
}

export class RevealFieldAction implements Action {
    type = ActionTypes.REVEAL_FIELD;

    constructor(public payload: any) {}
}

export class ShowMinesAction implements Action {
    type = ActionTypes.SHOW_MINES;

    constructor(public payload: any) {}
}

export class ShowFieldsAction implements Action {
    type = ActionTypes.SHOW_FIELDS;

    constructor(public payload: any) {}
}

export class UpdateFieldsAction implements Action {
    type = ActionTypes.UPDATE_FIELDS;

    constructor(public payload: any) {}
}

export type Actions = InitStateAction | InitBoardAction | FinishAction | MarkFieldAction | RevealFieldAction
    | ShowMinesAction | ShowFieldsAction | UpdateFieldsAction;
