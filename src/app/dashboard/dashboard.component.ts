import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.ngx.scss'
    ]
})
export class DashboardComponent {

    constructor(translateService: TranslateService) {
        translateService.setDefaultLang('en');
        translateService.use('en');
    }

}
