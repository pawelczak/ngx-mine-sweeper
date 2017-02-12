import { Pipe, PipeTransform } from '@angular/core';

import { Score } from '../score';

@Pipe({
    name: 'scoreByDifficulty'
})
export class ScoreByDifficultyPipe implements PipeTransform {

    transform(scores: Array<Score>, difficulty: any): any[] {
        return scores.filter((score: Score) => {
            if (score.difficulty === difficulty) {
                return true;
            }
        });
    }

}
