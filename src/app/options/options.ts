export const options = (state: any = {language: 'en'}, action: any) => {
    switch (action.type) {

        case 'CHANGE_LANGUAGE':
            return Object.assign({}, state, {language: action.payload});

        default:
            return state;
    }
};
