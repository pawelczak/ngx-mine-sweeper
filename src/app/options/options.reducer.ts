import { CHANGE_LANGUAGE } from './actions';

export const optionsReducer = (state: any = {language: 'en'}, action: any) => {
    switch (action.type) {

        case CHANGE_LANGUAGE:
            return Object.assign({}, state, {language: action.payload});

        default:
            return state;
    }
};
