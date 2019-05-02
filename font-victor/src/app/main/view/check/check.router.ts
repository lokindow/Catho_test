/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckComponent } from './check.component';

const routes: Routes = [
	{
		path: '',
		component: CheckComponent
	}
];

export const CheckRouter = RouterModule.forChild(routes);