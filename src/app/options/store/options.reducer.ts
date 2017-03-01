import { OptionsState } from './options-state';
import * as options from './actions';

const initialOptionsState = new OptionsState('en', 'EASY');

export const optionsReducer = (state: OptionsState = initialOptionsState, action: options.Actions): OptionsState => {

    switch (action.type) {

        case options.ActionTypes.CHANGE_LANGUAGE:
            return Object.assign(new OptionsState('en', 'EASY'), state, {language: action.payload});

        default:
            return state;
    }
};
