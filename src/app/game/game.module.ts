import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameComponent } from './game.component/game.component';
import { BoardComponent } from './board.component/board.component';
import { BoardFieldComponent } from './board.component/board-field.component/board-field.component';
import { GameRepository } from './game.repository';
import { GameFactory } from './game.factory';
import { InfoComponent } from './info/info.component/info.component';
import { TimerService } from './info/timer.service';
import { GameService } from './game.service';
import { GameEndWindowComponent } from './game.component/game-end-window.component/game-end-window.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        GameComponent,
        GameEndWindowComponent,
        BoardComponent,
        BoardFieldComponent,
        InfoComponent
    ],
    providers: [
        GameRepository,
        GameService,
        GameFactory,
        TimerService
    ],
    entryComponents: [
        GameComponent
    ]
})
export class GameModule {}
