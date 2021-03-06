import { NgModule, Sanitizer } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AlertService } from 'ng-jhipster';
import {
    AcmeSharedLibsModule,
    JhiAlertComponent,
    JhiAlertErrorComponent
} from './';

export function alertServiceProvider(sanitizer: Sanitizer) {
    // set below to true to make alerts look like toast
    const isToast = false;
    return new AlertService(sanitizer, isToast);
}

@NgModule({
    imports: [
        AcmeSharedLibsModule
    ],
    declarations: [
        JhiAlertComponent,
        JhiAlertErrorComponent
    ],
    providers: [
        {
            provide: AlertService,
            useFactory: alertServiceProvider,
            deps: [Sanitizer]
        },
        Title
    ],
    exports: [
        AcmeSharedLibsModule,
        JhiAlertComponent,
        JhiAlertErrorComponent
    ]
})
export class AcmeSharedCommonModule {}
