import { OptionsFactory } from '../../../../src/app/options/options.factory';
import { Options } from '../../../../src/app/options/options';

describe('OptionsFactory', () => {

    it ('should create default options for reducer', () => {

        // when
        const expectedOptions = OptionsFactory.createDefaultReducerOptions();

        // then
        expect(expectedOptions).toBeDefined();
        expect(expectedOptions instanceof Options).toBe(true);
    });
});
