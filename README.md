<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Desafio Bemol - Cadastro de Usuários</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![Laravel](https://img.shields.io/badge/Laravel-8.x-brightgreen.svg?style=flat-square)](http://laravel.com)
[![Node.js](https://img.shields.io/badge/Node.js-14.15.1-brightgreen.svg?style=flat-square)](https://nodejs.org/en/)
[![Composer](https://img.shields.io/badge/Composer-2.0.8-brightgreen.svg?style=flat-square)](https://getcomposer.org)
[![Quasar](https://img.shields.io/badge/Quasar-1.14.7-blue)](https://quasar.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Projeto desenvolvido para o desafio Bemol. A feature consiste no cadastro de usuários para um projeto de Segmentação de Clientes/Canais de Atendimento. Após executar a aplicação pelo Quasar, deve-se acessar a rota localhost:8080/users .
    <br> 
</p>

## 📝 Índice

- [Sobre](#about)
- [Getting Started](#getting_started)
- [Diagramas](#diagram)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 Sobre <a name = "about"></a>

Desenvolver e implementar a feature de Cadastro de Usuários, software Web, com acesso a consulta de CEP de uma API externa. O sistema contará com as seguintes camada: Interface (front-end), Regras de negócio (back-end) e Banco de Dados.

## 🏁 Getting Started <a name = "getting_started"></a>

Instruções para ter uma cópia do repositório.

### Pré-requisitos

-   **PHP - Supported Versions:** >= 7.3
-   **Webserver:** Apache
-   **Database:** MySQL
-   **Run-time environment:**: Node.js, npm & Quasar Framework

### Instalação

- Clone

```bash
$ git clone https://github.com/romariolb/desafio-bemol.git
$ cd desafio-bemol
```

-   **Back-end**

Estas ações devem ser realizadas dentro da pasta /back-segmentacao-user-canal.

- Configuração

Faça uma cópia do arquivo .env-example e renomei ela para .env. A seguir:

```bash
$ composer install
$ php artisan key:generate
```

Altere o seguinte atributo:

```bash
APP_NAME=Segmentação_Canal
```

- Database

No arquivo .env, edite as informações de Database:

```bash
DB_CONNECTION=mysql
DB_HOST=XXXXXX
DB_PORT=3306
DB_DATABASE=XXXXX
DB_USERNAME=XXXX
DB_PASSWORD=XXXXX
```

Lembre-se de criar a base de dados antes de executar qualquer comando "artisan"!

- Mail

Não está presente nessa feature.

- Populando a base de dados

Atualize seu Composer e gere as classes dos modelos:

```bash
$ composer update
```

Em seguida, execute as migrations:

```bash
$ php artisan migrate
```
Caso já existam dados na base:

```bash
$ php artisan migrate:fresh
```

- Executando o server

Utilize o server do próprio PHP:

```bash
$ php artisan serve
```

- Dicas úteis

Utilize os seguiuntes comandos para melhorar suas consultas e requisições:

```bash
$ php artisan route:clear
$ php artisan route:cache
$ php artisan config:clear
$ php artisan cache:clear
```

-   **Front-end**

Estas ações devem ser realizadas dentro da pasta /front-user-canal.

- Configuração

Instale todas as depedências:

```bash
$ npm install
```

- Framework

Instale o framework Quasar:

```bash
# Node.js >=10 is required.
$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli
```

- Instale as seguintes dependências:

```bash
$ npm install axios
$ npm install moment --save
$ npm install vee-validate --save
$ npm i --save lodash
```

- Iniciar app em modo de desenvolvimento

```bash
$ quasar dev
```

- Permissão CORS

Para ter acesso a API (https://viacep.com.br/) é necessário habilitar o CORS em
(https://cors-anywhere.herokuapp.com/corsdemo).

- Gerar Build para o ambiente de produção (caso necessário)

```bash
$ quasar build
```

## 🚀 Diagramas <a name = "diagram"></a>

Os códigos-fonte dos diagramas estão em /Diagram

- Visão arquitetural da infraestrutura

/Diagram/@startuml C4_Elements.wsd

- Organização do Software

/Diagram/@startuml C4_Elements_Designer.wsd

As imagens exportadas dos diagramas estão em /out/Diagram com os mesmos nomes descritos acima.


## ✍️ Authors <a name = "authors"></a>

- [@romariolb](https://github.com/romariolb) - Developer - romario.eds@gmail.com

