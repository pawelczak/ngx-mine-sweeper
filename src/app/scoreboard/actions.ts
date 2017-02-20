import { Action } from '@ngrx/store';

import { Score } from './score';

export const ActionTypes = {
    ADD_SCORE: 'SCOREBOARD_ADD_SCORE',
    RESET_SCORES: 'SCOREBOARD_RESET_SCORES',
    CHANGE_DIFFICULTY: 'SCOREBOARD_CHANGE_DIFFICULTY'
};

export class AddScoreAction implements Action {
    type = ActionTypes.ADD_SCORE;

    constructor(public payload: Score) {}
}

export class ResetScoresAction implements Action {
    type = ActionTypes.RESET_SCORES;

    constructor(public payload?: any) {}
}

export class ChangeDifficultyAction implements Action {
    type = ActionTypes.CHANGE_DIFFICULTY;

    constructor(public payload: string) {}
}


export type Actions = AddScoreAction | ResetScoresAction | ChangeDifficultyAction;
