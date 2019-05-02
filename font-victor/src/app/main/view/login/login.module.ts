/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */

import { NgModule } from '@angular/core';

import { SharedModule } from '../../../commons/shared.module';
import { LoginComponent } from './login.component';
import { LoginRouter } from './login.router';

@NgModule({
	imports: [
		SharedModule,
		LoginRouter,
	],
	declarations: [
		LoginComponent
	]
})

export class LoginModule {
}
