import { Action } from '@ngrx/store';

import { Score } from '../score';
import { ScoreboardState } from './scoreboard-state';

const SCOREBOARD_PREFIX = '[Scoreboard]';
export const ActionTypes = {
    INIT_STATE: `${SCOREBOARD_PREFIX}INIT_STATE`,
    ADD_SCORE: `${SCOREBOARD_PREFIX}ADD_SCORE`,
    RESET_SCORES: `${SCOREBOARD_PREFIX}RESET_SCORES`,
    CHANGE_DIFFICULTY: `${SCOREBOARD_PREFIX}CHANGE_DIFFICULTY`
};

export class InitStateAction implements Action {
    type = ActionTypes.INIT_STATE;

    constructor(public payload: ScoreboardState) {}
}

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

export type Actions = InitStateAction | AddScoreAction | ResetScoresAction | ChangeDifficultyAction;
