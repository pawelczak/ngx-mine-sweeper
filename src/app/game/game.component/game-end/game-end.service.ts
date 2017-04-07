import { Injectable } from '@angular/core';

import { Score } from '../../../scoreboard/score';
import { TimeFormatter } from '../../../util/time/time.formatter';
import { ScoreboardRepository } from '../../../scoreboard/scoreboard.repository';
import { OptionsRepository } from '../../../options/repositories/options.repository';
import { TimerService } from '../../info/timer.service';

@Injectable()
export class GameEndService {


    constructor(private scoreboardRepository: ScoreboardRepository,
                private optionsRepository: OptionsRepository,
                private timerService: TimerService) {}

    saveScore(): void {
        this.optionsRepository
            .getDifficulty()
            .take(1)
            .subscribe((difficulty: string) => {

                const time = TimeFormatter.formatFromSeconds(this.timerService.getSimpleTime());

                this.scoreboardRepository.addScore(new Score('Lukasz', time, difficulty));
            });
    }

}
