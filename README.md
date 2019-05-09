# Teste Feito Para Catho
Tecnologias Usadas: Nodejs + MySql + Angular

#### Documento do Teste:
* Está dentro da pasta 'doc-catho'


#### Requisitos para Montar o Ambiente:
* Nodejs pode ser adquirido pelo site oficial do Nodejs: https://nodejs.org/en/download/
<br/>
* Angular CLi pode ser adquirido pelo comando npm: "npm install -g @angular/cli" para mais informações o site oficial: https://cli.angular.io/
<br/>
* Banco de Dados Mysql(Obs: Existem diferentes formas de configurar vou falar uma delas usando XAMPP) para instalar o XAMPP site: https://www.apachefriends.org/pt_br/index.html baixar na sua plataforma.
	* Após o download dar start no PHP e no MYSQL( Obs: Dar start no PHP para usar a ferramenta phpmyadmin) ir no navegador e colocar a URL : http://localhost/phpmyadmin/ , na barra horizontal selecionar SQL e colar o arquivo 'catho' que está na pasta 'db-mysql-victor' pronto MySQL configurado e rodando. 


#### BackEnd:
* Entrar na pasta 'backend-victor' 
* Abrir o Terminal ou CMD e digitar: ``` node ./index.js ```
* Pronto Backend está sendo executado na porta 8080
* (Obs: Caso queria editar configurações do banco de dados está na pasta 'enum' onde tem por default -> Host: '127.0.0.1' User: 'root' Password: '' Database: "catho")

#### FrontEnd:
* Entrar na pasta 'font-victor'
* Abrir o Terminal ou CMD e digitar:  ``` npm start ```
* Pronto Frontend está sendo executado na porta 4200
* Abra o Navegador : http://localhost:4200/
* (Obs: Caso queria alterar a porta do Frontend pode ser alterado no arquivo 'package.json' onde está 4200 para a porta desejada)


#### Bibliotecas Ultilizadas:
* Node com restify pra cirar as rotas
* Mysql no Nodejs
* Angular com componentes SASS e SCSS
* Jquery

#### Sistema:
* Irá abrir a tela de login e usuario já cadastrado no Banco de Dados: User'root' e password'1234'
* Aparecerá um modal para escolha de cliente já parceiro ou podendo colocar o nome da sua empresa.
* Será redirecionado para tela de produtos e lá pode adicionar os produtos a sacola, mostrando o subtotal.
* Ao clicar em subimit será aberto um Modal de fechamento de pedido aplicando as regras de descontos de acordo com cada tipo de cliente
* Podendo clicar em confirmar a compra será redirecionado para o login

#### OBS:
* Node Ultilizado: v10.15.3
* Caso de o erro: 'Cannot GET /' no navegador é a versão do Nodejs que está ultilizando.

#### Dúvidas:
* João Victor Fornitani
* jfornitani@hotmail.com
