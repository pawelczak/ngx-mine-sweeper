import { combineReducers, ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import { optionsReducer as options }  from './options/store/options.reducer';
import { scoreboardReducer as scoreboard } from './scoreboard/scoreboard.reducer';
import { gameReducer as game } from './game/game-store/game.reducer';

import { OptionsState } from './options/store/options-state';
import { ScoreboardState } from './scoreboard/scoreboard-state';
import { Game } from './game/game';

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

export const reducer: ActionReducer<AppState> = compose(combineReducers)(reducers);

export const getOptions = (state: AppState) => state.options;

export const getScoreboard = (state: AppState) => state.scoreboard;
