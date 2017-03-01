import { OptionsState } from './options';

export class OptionsFactory {

    static createDefaultReducerOptions(): OptionsState {
        return new OptionsState('en');
    }
}
