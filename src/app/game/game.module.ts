import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GameComponent } from './game.component/game.component';
import { BoardComponent } from './board.component/board.component';
import { BoardFieldComponent } from './board.component/board-field.component/board-field.component';
import { GameService } from './game.service';
import { GameFactory } from './game.factory';
import { InfoComponent } from './info/info.component/info.component';
import { TimerService } from './info/timer.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        GameComponent,
        BoardComponent,
        BoardFieldComponent,
        InfoComponent
    ],
    providers: [
        GameService,
        GameFactory,
        TimerService
    ],
    entryComponents: [
        GameComponent
    ]
})
export class GameModule {}
