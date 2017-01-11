import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component/options.component';
import { GameComponent } from './game/game.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component/scoreboard.component';


const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'game', component: GameComponent },
    { path: 'scoreboard', component: ScoreboardComponent },
    { path: 'options', component: OptionsComponent }
];

export const routing = RouterModule.forRoot(routes);
