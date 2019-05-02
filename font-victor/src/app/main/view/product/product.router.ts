/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';

const routes: Routes = [
	{
		path: '',
		component: ProductComponent
	}
];

export const ProductRouter = RouterModule.forChild(routes);