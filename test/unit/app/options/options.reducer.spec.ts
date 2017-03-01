import { optionsReducer, initialOptionsState } from '../../../../src/app/options/store/options.reducer';
import { OptionsState } from '../../../../src/app/options/store/options-state';
import * as OptionsActions from '../../../../src/app/options/store/actions';

describe('optionsReducer - reducer', () => {


    it ('should return default state', () => {

        // given
        const action = {} as any;
        const expectedState = initialOptionsState;

        // when
        const actualState = optionsReducer(initialOptionsState, action);

        // then
        expect(actualState).toBe(expectedState);
        expect(actualState instanceof OptionsState).toBe(true);
    });

    it ('should be possible to change language', () => {

        // given
        const givenLanguage = 'pl',
            givenDifficulty = 'EASY',
            givenChangeLanguageAction = new OptionsActions.ChangeLanguageAction(givenLanguage),
            expectedState = new OptionsState(givenLanguage, givenDifficulty);

        // when
        const actualState = optionsReducer(initialOptionsState, givenChangeLanguageAction);

        // then
        expect(actualState).toEqual(expectedState);
        expect(actualState).not.toBe(expectedState);
        expect(actualState instanceof OptionsState).toBe(true);
    })

});
