import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import { optionsReducer as options }  from './options/store/options.reducer';
import { scoreboardReducer as scoreboard } from './scoreboard/scoreboard.reducer';
import { gameReducer as game } from './game/game-store/game.reducer';

export const reducers = {
    options: options,
    scoreboard: scoreboard,
    game: game
};

export const reducer = compose(storeFreeze, combineReducers)(reducers);
