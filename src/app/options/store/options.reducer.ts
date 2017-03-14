import { OptionsState } from './options-state';
import { Language } from '../../util/language/language';
import * as options from './actions';


export const initialOptionsState = new OptionsState(Language.EN, 'EASY');

export const optionsReducer = (state: OptionsState = initialOptionsState, action: options.Actions): OptionsState => {

    switch (action.type) {

        case options.ActionTypes.CHANGE_LANGUAGE:
            return Object.assign(new OptionsState(Language.EN, 'EASY'), state, {language: action.payload});

        case options.ActionTypes.CHANGE_DIFFICULTY:
            return Object.assign(new OptionsState(Language.EN, 'EASY'), state, {difficulty: action.payload});

        default:
            return state;
    }
};
