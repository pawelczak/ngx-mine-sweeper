import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionsComponent } from './options/options.component';


const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'options', component: OptionsComponent }
];

export const routing = RouterModule.forRoot(routes);
