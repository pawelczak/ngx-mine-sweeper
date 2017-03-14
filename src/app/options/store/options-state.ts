import { Language } from '../../util/language/language';

export class OptionsState {

    language: Language;

    difficulty: string;

    constructor(language: Language, difficulty: string) {
        this.language = language;
        this.difficulty = difficulty;
    }

}
