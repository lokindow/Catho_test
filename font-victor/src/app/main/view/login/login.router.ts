/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';

const routes: Routes = [
	{
		path: '',
		component: LoginComponent
	}
];

export const LoginRouter = RouterModule.forChild(routes);