import { OptionsState } from './options-state';
import * as options from './actions';

export const initialOptionsState = new OptionsState('en', 'EASY');

export const optionsReducer = (state: OptionsState = initialOptionsState, action: options.Actions): OptionsState => {

    switch (action.type) {

        case options.ActionTypes.CHANGE_LANGUAGE:
            return Object.assign(new OptionsState('en', 'EASY'), state, {language: action.payload});

        case options.ActionTypes.CHANGE_DIFFICULTY:
            return Object.assign(new OptionsState('en', 'EASY'), state, {difficulty: action.payload});

        default:
            return state;
    }
};
