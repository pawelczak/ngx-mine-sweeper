import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ModalWindowService } from './modal-window.service';
import { ModalCommunicationService } from './modal-communication.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ModalWindowComponent
    ],
    providers: [
        ModalWindowService,
        ModalCommunicationService
    ],
    entryComponents: [
        ModalWindowComponent
    ]
})
export class ModalModule {}
