/**
 * @license
 * Copyright João Victor Fornitani S/A. All Rights Reserved.
 */
import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { AMBGlobalErrorHandler } from '@amb/components-angular';

/**
 * Classe handler dos erros da aplicação.
 *  
 * @description
 * Implementação de um manipulador de exceções. Todas as exceções da aplicação Piloto
 * são tratadas por este handler. O handler implementa uma interface do AMB @see AMBGlobalErrorHandler.
 * 
 * @see {@link https://angular.io/api/core/ErrorHandler}
 */
@Injectable()
export class ApplicationErrorHandler extends AMBGlobalErrorHandler {

    /**
     * @constructor
     * Construtor padrão.
     */
    constructor(injector: Injector) {
        super(injector);
    }

    /**
     * @override
     * A implementação padrão do `AMBGlobalErrorHandler` imprime mensagens de erro no `console`. Para
     * manipulação de erro de interceptação, deve-se escrever um manipulador de exceção personalizado que substitui esse padrão como
     * apropriado para o aplicativo.
     * 
     * @param error Objeto de erro.
     */
    handleError(error: any): void {
        $( "body" ).append(error);
        super.handleError(error);
    }

}