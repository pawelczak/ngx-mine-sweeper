import { CHANGE_LANGUAGE } from './actions';
import { Options } from './options';

const defaultOptions = new Options('en');

export const optionsReducer = (state: Options = defaultOptions, action: any = {type: undefined}) => {
    switch (action.type) {

        case CHANGE_LANGUAGE:
            return Object.assign(new Options(''), state, {language: action.payload});

        default:
            return state;
    }
};
