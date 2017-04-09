import { OptionsState } from './options-state';
import { OptionsStateFactory } from './options-state.factory';
import * as options from './actions';

export const initialOptionsState = OptionsStateFactory.createDefault();

export function optionsReducer(state: OptionsState = initialOptionsState, action: options.Actions): OptionsState {

    switch (action.type) {

        case options.ActionTypes.INIT_STATE:
            return Object.assign(OptionsStateFactory.createDefault(), action.payload);

        case options.ActionTypes.CHANGE_LANGUAGE:
            return Object.assign(OptionsStateFactory.createDefault(), state, {language: action.payload});

        case options.ActionTypes.CHANGE_DIFFICULTY:
            return Object.assign(OptionsStateFactory.createDefault(), state, {difficulty: action.payload});

        default:
            return state;
    }
}
