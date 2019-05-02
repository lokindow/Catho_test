/**
 * @license
 * Victor Fornitani.
 */

/** Configurações da aplicação. */
require('./app.config');

/** Libs externas */
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

/** Módulos de segurança */
import { AMBAuthorizationModule } from '@amb/authorization';
import { AMBMockeAuthenticationModule } from '@amb/mock-authentication';

/** Módulos do piloto AMB */
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { routing } from './app.routing';
import { SharedModule } from './commons/shared.module';
import { HeaderComponent } from './commons/header/header.component';
import { HttpInterceptors } from './components/http/http.interceptors';

/** Componentes */
import { AMBComponentsAngularModule } from '@amb/components-angular';
import { ApplicationErrorHandler } from './handlers/error/handler/application-error-handler';

import { ClientService } from './service/client.service';
import { OrderService } from './service/order.service';
import { ProductService } from './service/product.service';
import { RuleService } from './service/rule.service';


/**
 * Definição dos componentes e funcionalidades exportadas por este módulo.
 * 
 * @see {@link https://angular.io/guide/ngmodule}
 */
@NgModule({
    imports: [
        AMBComponentsAngularModule.forRoot(),
        BrowserModule,
        HttpModule,
        AMBAuthorizationModule.forRoot(),
        AMBMockeAuthenticationModule.forRoot(),
        routing,
        SharedModule,
        MainModule,
        SlimLoadingBarModule.forRoot()
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    providers: [
        {
            provide: Http,
            useFactory: (backend: XHRBackend, options: RequestOptions, loadingBar: SlimLoadingBarService) => {
                return new HttpInterceptors(backend, options, loadingBar);
            },
            deps: [XHRBackend, RequestOptions, SlimLoadingBarService]
        },
        { provide: ErrorHandler, useClass: ApplicationErrorHandler },
        ClientService,
        OrderService,
        ProductService,
        RuleService
    ],
    bootstrap: [AppComponent],
})

/**
 * @Módulo @name AppModule
 * 
 * Módulo principal do piloto AMB2.
 */
export class AppModule { }
