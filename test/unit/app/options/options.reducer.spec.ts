import { optionsReducer } from '../../../../src/app/options/store/options.reducer';
import { OptionsState } from '../../../../src/app/options/options';
import { CHANGE_LANGUAGE } from '../../../../src/app/options/store/actions';

describe('optionsReducer - reducer', () => {


    it ('should return default state', () => {

        // given
        const expectedState = new OptionsState('en');

        // when
        const actualState = optionsReducer(undefined);

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState);
        expect(actualState instanceof OptionsState).toBe(true);
    });

    it ('should be possible to change language', () => {

        // given
        const language = 'pl',
            expectedState = new OptionsState(language);

        // when
        const actualState = optionsReducer(undefined, {type: CHANGE_LANGUAGE, payload: language});

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState);
        expect(actualState instanceof OptionsState).toBe(true);
    })

});
