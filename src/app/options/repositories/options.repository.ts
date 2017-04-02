import { Observable } from 'rxjs/Observable';

import { Language } from '../../util/language/language';
import { OptionsState } from '../store/options-state';


export abstract class OptionsRepository {

    abstract getOptions(): Observable<OptionsState>;

    abstract getLanguage(): Observable<Language>;

    abstract getDifficulty(): Observable<string>;

    abstract changeLanguage(language: Language): void;

    abstract changeDifficulty(difficulty: string): void;

}
