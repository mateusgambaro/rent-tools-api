# Documentação da API REST para AlluTools

Abaixo está a documentação simplificada para uma API REST desenvolvida em Node.js para o aplicativo AlluTools. As rotas são organizadas com base nas tabelas Products, User e Orders.

## Instale as dependências

    npm install

## Rode a api

    npm run dev
## Tabelas:

### Products

- **id** (INTEGER) - ID do produto.
- **title** (STRING) - Nome do produto.
- **content** (STRING) - Descrição do produto.
- **image** (STRING) - URL da imagem do produto.
- **price** (INTEGER) - Preço do produto.
- **volts** (STRING) - Voltagem.
- **watts** (STRING) - Potência em Watts.
- **usability** (STRING) - Utilidade.
- **condition** (STRING) - Condição do produto.
- **brand** (STRING) - Marca.

### User

- **id** (INTEGER) - ID do usuário.
- **name** (STRING) - Nome do usuário.
- **email** (STRING) - Email do usuário.
- **password** (STRING) - Senha do usuário.
- **document** (STRING) - Documento do usuário.

### Orders

- **userId** (INTEGER) - ID do usuário relacionado ao pedido.
- **productId** (INTEGER) - ID do produto relacionado ao pedido.

## Endpoints:

### Autenticação

#### **POST** `/login`

Autentica um usuário.

- **Body**: 

  ```json
  {
    "email": "usuario@email.com",
    "password": "senha"
  }

#### Respostas
- **200 OK** - Retorna o token de autenticação..
- **401 Unauthorized** - Credenciais inválidas.

### Produtos

#### **GET** `/products`

Buscar todos os produtos disponíveis.

#### Query Params:
- **search** (opcional): Para filtrar produtos por nome ou descrição.
- **orderBy** (opcional): Para ordenar os resultados.

#### Respostas
- **200 OK** - Retorna uma lista de produtos.
- **500 Internal Server Error** - Erro no servidor.

#### **POST** `/products`

Adicionar um novo produto.

- **Body**: 

  ```json
  {
  "title": "Nome do Produto",
  "content": "Descrição do Produto"
  }

#### Respostas
- **201 Created** - Produto criado com sucesso.
- **500 Internal Server Erro** -  Erro no servidor.
  
  
