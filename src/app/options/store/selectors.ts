import { createSelector } from 'reselect';

import { getOptions } from '../../app.reducers';
import { OptionsState } from './options-state';

const getLanguage = (state: OptionsState) => state.language;

const getDifficulty = (state: OptionsState) => state.difficulty;

export const getOptionsLanguage = createSelector(getOptions, getLanguage);

export const getOptionsDifficulty = createSelector(getOptions, getDifficulty);
