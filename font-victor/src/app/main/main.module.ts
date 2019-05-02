/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */

/** Libs externas */
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './main.component';

/**
 * Definição das rotas da aplicação.
 * 
 * @see {@link app.routing.ts}
 * @see {@link https://angular.io/guide/router}
 */
const routes: Routes = [
	{ path: 'login', loadChildren: './view/login/login.module#LoginModule' },
	{ path: 'product', loadChildren: './view/product/product.module#ProductModule' },
	{ path: 'check', loadChildren: './view/check/check.module#CheckModule' }
];


/**
 * Definição dos componentes e funcionalidades exportadas por este módulo.
 * 
 * @see {@link https://angular.io/guide/ngmodule}
 */
@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		FormsModule
	],
	declarations: [
		MainComponent
	]
})

/**
 * @Módulo @name MainModule
 * 
 */
export class MainModule { }