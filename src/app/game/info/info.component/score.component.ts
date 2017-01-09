import { Component } from '@angular/core';
import { GameService } from '../../game.service';

@Component({
    selector: 'score',
    templateUrl: './score.component.html'
})
export class ScoreComponent {

    private score: Score;

    constructor(private gameService: GameService) {
        // this.gameService
    }
}
