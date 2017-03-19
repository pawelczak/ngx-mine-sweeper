import { createSelector } from 'reselect';

import { ScoreboardState } from './scoreboard-state';
import { getScoreboard } from '../app.reducers';

const getScores = (state: ScoreboardState) => state.scores;

const getDifficulty = (state: ScoreboardState) => state.difficulty;

export const getScoreboardScores = createSelector(getScoreboard, getScores);

export const getScoreboardDifficulty = createSelector(getScoreboard, getDifficulty);
