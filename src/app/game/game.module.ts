import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameComponent } from './game.component/game.component';
import { BoardComponent } from './board/board.component/board.component';
import { BoardFieldComponent } from './board/board.component/board-field.component/board-field.component';
import { GameRepository } from './game.repository';
import { GameFactory } from './game.factory';
import { InfoComponent } from './info/info.component/info.component';
import { TimerService } from './info/timer.service';
import { GameService } from './game.service';
import { GameEndWindowComponent } from './game-end/game-end-window/game-end-window.component';
import { GameEndService } from './game-end/game-end.service';
import { routing } from '../app.routing';


@NgModule({
    imports: [
        BrowserModule,
        routing
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
        GameEndService,
        GameFactory,
        TimerService
    ],
    entryComponents: [
        GameComponent
    ]
})
export class GameModule {}
