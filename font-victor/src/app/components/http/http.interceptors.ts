/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */

import { Injectable } from '@angular/core';
import {
	Http,
	ConnectionBackend,
	RequestOptions,
	RequestOptionsArgs,
	Request,
	Response,
	Headers
} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

/**
 * @Serviço @name HttpInterceptors
 * 
 * Classe responsável por tratar as requisições http.
 *  
 * @description
 * Toda a requisição é controlada, assim é adicionado uma barra de progresso
 * controlando o estado da requisição.
 * 
 */
@Injectable()
export class HttpInterceptors extends Http {
	private loadingBar: SlimLoadingBarService;

	constructor(backend: ConnectionBackend,
		defaultOptions: RequestOptions,
		loadingBar: SlimLoadingBarService) {
		super(backend, defaultOptions);
		this.loadingBar = loadingBar;
	}

	request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
		this.loadingBar.start();
		return super.request(url, options)
			.finally(() => {
				this.loadingBar.complete();
			});
	}
}
