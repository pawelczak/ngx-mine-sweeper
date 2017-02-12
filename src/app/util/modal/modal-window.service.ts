import {
    Injectable, ComponentFactoryResolver, ApplicationRef, Injector,
    ComponentRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/never';
import 'rxjs/add/operator/take';

import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ModalCommunicationService } from './modal-communication.service';
import { ModalConfiguration } from './modal-configuration';


@Injectable()
export class ModalWindowService {

    private modalComponentRef: ComponentRef<ModalWindowComponent>;

    constructor(private applicationRef: ApplicationRef,
                private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector,
                private modalCommunicationService: ModalCommunicationService) {
    }

    open(config: ModalConfiguration = <ModalConfiguration>{}, nestedComponent?: any): Observable<boolean> {

        if (this.modalComponentRef) {
            return Observable.never();
        }

        const modalComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalWindowComponent);

        if (nestedComponent !== undefined) {
            const nestedComponentFactory = this.componentFactoryResolver.resolveComponentFactory(nestedComponent);
            const nestedComponentRef = nestedComponentFactory.create(this.injector);

            this.modalComponentRef = modalComponentFactory.create(this.injector, [[nestedComponentRef.location.nativeElement]]);
        } else {
            this.modalComponentRef = modalComponentFactory.create(this.injector);
        }

        this.setProperties(config);

        document.querySelector('body').appendChild(this.modalComponentRef.location.nativeElement);

        this.applicationRef.attachView(this.modalComponentRef.hostView);

        this.modalCommunicationService.getAction().subscribe(() => {
            this.close();
        });

        return this.modalCommunicationService.getAction().take(1);
    }

    close(): void {
        this.modalComponentRef.destroy();
        this.modalComponentRef = null;
    }

    private setProperties(config: ModalConfiguration): void {

        if (config.title) {
            this.modalComponentRef.instance.title = config.title;
        }

        if (config.cancelBtnText) {
            this.modalComponentRef.instance.cancelBtnText = config.cancelBtnText;
        }

        if (config.cancelBtnEnabled) {
            this.modalComponentRef.instance.cancelBtnEnabled = config.cancelBtnEnabled;
        }

        if (config.confirmBtnText) {
            this.modalComponentRef.instance.confirmBtnText = config.confirmBtnText;
        }

        if (config.confirmBtnEnabled) {
            this.modalComponentRef.instance.confirmBtnEnabled = config.confirmBtnEnabled;
        }
    }

}
