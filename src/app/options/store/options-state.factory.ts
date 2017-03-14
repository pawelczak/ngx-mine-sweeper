import { OptionsState } from './options-state';
import { defaultLanguage } from '../../util/language/language';

export class OptionsStateFactory {

    static createDefault(): OptionsState {
        return new OptionsState(defaultLanguage, 'EASY');
    }

}
