/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightModule } from 'ngx-highlightjs';

import { AMBComponentsAngularModule } from '@amb/components-angular';

/** Módulos de segurança */
import { AMBAuthorizationModule } from '@amb/authorization';

/**
 * Definição dos componentes e funcionalidades exportadas por este módulo.
 * 
 * @see {@link https://angular.io/guide/ngmodule}
 */
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AMBComponentsAngularModule.forRoot(),
		AMBAuthorizationModule,
		HighlightModule.forRoot({
			theme: 'github',
			path: './assets/lib/hljs'
		}),
	],
	exports: [
		CommonModule,
		FormsModule,
		AMBComponentsAngularModule,
		HighlightModule,
		AMBAuthorizationModule
	],
	declarations: [
	]
})

/**
 * @Módulo @name SharedModule
 * 
 */
export class SharedModule { }

