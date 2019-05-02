/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */

import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { NavigationCancel, Event, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { HeaderComponent } from './commons/header/header.component';
import './app.module.scss';

/**
 * Definição dos componentes e funcionalidades exportadas por este módulo.
 * 
 * @see {@link https://angular.io/guide/ngmodule}
 */
@Component({
	selector: 'main-app',
	templateUrl: './app.component.html',
})

/**
 * @Componente @name AppComponent
 * 
 */
export class AppComponent {
	
	constructor(private _loadingBar: SlimLoadingBarService, private _router: Router) {
		// Subscribe do evento.
		this._router.events.subscribe((event: Event) => {
			this.navigationInterceptor(event);
		});
	}

	/**
   * Método para adicionar ou ocultar o loading bar.
   * @param {Event} event
   */
	private navigationInterceptor(event: Event): void {
		if (event instanceof NavigationStart) {
			this._loadingBar.start();
		}
		if (event instanceof NavigationEnd) {
			this._loadingBar.complete();
			HeaderComponent.prototype.closeMenu();
			window.scrollTo(0, 0);
		}

		// Define o estado de carregamento como falso em ambos os eventos abaixo para
		// ocultar o carregador no caso de uma solicitação falhar.
		if (event instanceof NavigationCancel) {
			this._loadingBar.stop();
		}
		if (event instanceof NavigationError) {
			this._loadingBar.stop();
		}
	}



}
