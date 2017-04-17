import { combineReducers, ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import { optionsReducer as options }  from './options/store/options.reducer';
import { scoreboardReducer as scoreboard } from './scoreboard/store/scoreboard.reducer';
import { gameReducer as game } from './game/store/game.reducer';

import { OptionsState } from './options/store/options-state';
import { ScoreboardState } from './scoreboard/store/scoreboard-state';
import { Game } from './game/game';

declare var process: any;

export interface AppState {
    options: OptionsState,
    scoreboard: ScoreboardState,
    game: Game
}

export const reducers = {
    options: options,
    scoreboard: scoreboard,
    game: game
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
    if (process.env.ENV === 'production') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getOptions = (state: AppState) => state.options;

export const getScoreboard = (state: AppState) => state.scoreboard;
