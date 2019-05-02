/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */

import { NgModule } from '@angular/core';

import { SharedModule } from '../../../commons/shared.module';
import { CheckComponent } from './check.component';
import { CheckRouter } from './check.router';

@NgModule({
	imports: [
		SharedModule,
		CheckRouter
	],
	declarations: [
		CheckComponent
	]
})

export class CheckModule {
}
