/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */

import { NgModule } from '@angular/core';
import { SharedModule } from '../../../commons/shared.module';
import { ProductComponent } from './product.component';
import { ProductRouter } from './product.router';

@NgModule({
	imports: [
		SharedModule,
		ProductRouter,
	],
	declarations: [
		ProductComponent
	]
})

export class ProductModule {
}
