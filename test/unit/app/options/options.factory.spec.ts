import { OptionsFactory } from '../../../../src/app/options/options.factory';
import { OptionsState } from '../../../../src/app/options/options';

describe('OptionsFactory', () => {

    it ('should create default options for reducer', () => {

        // when
        const expectedOptions = OptionsFactory.createDefaultReducerOptions();

        // then
        expect(expectedOptions).toBeDefined();
        expect(expectedOptions instanceof OptionsState).toBe(true);
    });
});
