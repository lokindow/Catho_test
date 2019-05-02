/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */

import { Component, AfterViewInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Definição do componente HeaderComponent.
 * 
 * @selector app-header
 * @templateUrl header.component.html
 * @styleUrls header.component.scss
 * 
 * @see {@link https://angular.io/api/core/Component}
 */
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	encapsulation: ViewEncapsulation.None
})

/**
 * @Componente @name HeaderComponent
 * 
 * Classe representando o cabeçalho da aplicação.
 *  
 * @description
 * Cria o cabeçalho da aplicação.
 * 
 * @example
 * <app-header></app-header>
 */
export class HeaderComponent {
	// export class HeaderComponent implements AfterViewInit{

	/** Objeto JQuery que representa o menu do cabeçalho. */
	private menu: JQuery;


	time = Date.now();

	/**
	 * @constructor
	 * Construtor padrão.
	 */
	constructor(private router: Router) {
	}

	/**
	 * Faz a abertura do menu mobile.
	 */
	openMenu(): void {
		if ($(".menu-action.open").is(":visible")) {
			this.menu = $(".docs");
			$(".menu-action.open").hide();
			$(".menu-action.close").show();
			$(".doc-content").hide();
			$(".docs").show();
		}
	}

	navigate() {
		this.router.navigate(['components/resumo']);
	}

	closeMenu(): void {
		if ($(".menu-action.close").is(":visible")) {
			this.menu = $(".docs");
			$(".menu-action.close").hide();
			$(".menu-action.open").show();
			$(".docs").attr("style", "");
			$(".doc-content").show();
		}
	}

	// ngAfterViewInit() {
	// 	let div = $('.datetime');
	// 	let currentTime = div.html();

	// 	let newTime = currentTime.toString()
	// 	.replace('Monday', 'Segunda-feira')
	// 	.replace('Tuesday', 'Terça-feira')
	// 	.replace('Wednesday', 'Quarta-feira')
	// 	.replace('Thursday', 'Quinta-feira')
	// 	.replace('Friday', 'Sexta-feira')
	// 	.replace('Saturday', 'Sábado')
	// 	.replace('Sunday', 'Domingo')
	// 	.replace('January', 'Janeiro')
	// 	.replace('February', 'Fevereiro')
	// 	.replace('March', 'Março')
	// 	.replace('April', 'Abril')
	// 	.replace('May', 'Maio')
	// 	.replace('June', 'Junho')
	// 	.replace('July', 'Julho')
	// 	.replace('August', 'Agosto')
	// 	.replace('September', 'Setembro')
	// 	.replace('October', 'Outubro')
	// 	.replace('November', 'Novembro')
	// 	.replace('December', 'Dezembro');

	// 	div.html(newTime);
	// }
}
