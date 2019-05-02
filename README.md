# Catho
Empresa Catho com as tecnologias Nodejs + Mysql + Angular 

#### Documentos
* O documento com a descrição do teste está na pasta "doc-catho"

#### Requisitos
* Node devidamente configurado e rodando
* Angular Cli configurado e rodando
* Banco Mysql devidamente configurado e rodando

#### Banco de Dados
* Criar um banco com nome: 'catho'   
  * Entrar na pasta "db" e rodar no banco mysql o arquivo vic-db.sql    
  * Será criado algumas tabelas do db 'catho'

#### WebService
* Com o banco de dados criado e populado
  * Entrar na pasta "backend/enum", abrir o arquivo config.js e modificar os dados de acesso ao banco   
  * Password pode ser alterada 
  * Padrão: Host: '127.0.0.1'   User: 'root'    Password: ''   Database: "catho"
  * Pode ser alterado no arquivo"
  * Depois de configurado, rode script "backend/index.js" pelo terminal
```sh
$ node ./backend/index.js
```
  * PS: Por padrão, rodará na porta 8080, se desejar mudar, abra o arquivo "backend/index.js" e modifique na linha 15. Em seguida abra o arquivo "frontend/src/app/enum/config.enum.ts" e mude no endereço também.

 #### Rodando o front em angular
* Agora com o Mysql rodando e populado e o WebService rodando
  * Entrar na pasta "front-victor" e rodar o seguinte comando:
```sh
$ npm start
```    
* Abrir no navegador (http://localhost:4200)
* Pode ser alterado no pack.json
* Abrirá o sistema no login 
   
* Produtos
  * Fazer a adição dos produtos que mais agrada
  * Faz um subtotal sem os devidos abatimentos por regra

* Confimação
  *Apresenta os descontos obtidos pelo desconto do plano
  *Apresenta os produtos adquiridos 
  * Valor total com as alterações



* Cliente não cadastrado, entra nos preços padrões de todos os produtos
 
