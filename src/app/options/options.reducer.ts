import { CHANGE_LANGUAGE } from './actions';
import { Options } from './options';
import { OptionsFactory } from './options.factory';

const defaultOptions = OptionsFactory.createDefaultReducerOptions();

export const optionsReducer = (state: Options = defaultOptions, action: any = {type: undefined}) => {
    switch (action.type) {

        case CHANGE_LANGUAGE:
            return Object.assign(new Options(''), state, {language: action.payload});

        default:
            return state;
    }
};
