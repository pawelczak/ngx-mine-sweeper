import { Options } from './options';

export class OptionsFactory {

    static createDefaultReducerOptions(): Options {
        return new Options('en');
    }
}
