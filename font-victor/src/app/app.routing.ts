/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */

import { RouterModule, Routes } from '@angular/router';

import { AMBApplicationConfig } from '@amb/config';

/**
 * Rotas genéricas.
 */
const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
];

/**
 * Exporta o módulo de rotas do Angular.
 * 
 * @see {@link https://angular.io/guide/router}
 */
export const routing = RouterModule.forRoot(routes, {useHash: true});
