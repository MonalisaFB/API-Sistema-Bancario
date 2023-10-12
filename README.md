> # API-REST-Sistema-Bancario

## Descrição do projeto

Projeto realizado como Desafio do Módulo 02 do curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy em parceria com o Ifood.

Com o objetivo de construir uma API de um Banco digital com padrão REST.

## Fucionalidades do Projeto

- [ ] Criar conta bancária

- [ ] Listar contas bancárias

- [ ] Atualizar os dados do usuário da conta bancária

- [ ] Excluir uma conta bancária

- [ ] Depositar em uma conta bancária

- [ ] Sacar de uma conta bancária

- [ ] Transferir valores entre contas bancárias

- [ ] Consultar saldo da conta bancária

- [ ] Emitir extrato bancário

## Linguagens e Ferramentas

![Skills](https://skillicons.dev/icons?i=nodejs,js,express,git,github)

## :computer: Rodando o Projeto

```shell
# 1. Clone o projeto em SSH ou HTTPS

SSH:
git clone <git@github.com:MonalisaFB/API-Sistema-Bancario.git>

HTTPS:
git clone <https://github.com/MonalisaFB/API-Sistema-Bancario.git>

# 2. Instale as dependências

npm install express
npm install -D nodemon

# 4. Execute o projeto

npm run dev
```

Para realizar as requisições com os verbos GET, POST, PUT, DELETE use o framework Insomnia ou similar.

Abra o insomnia e use o caminho:
http://localhost:3000/

## Endpoints no Insomnia
 

### Criar Conta Bancária - **POST**

```javascript
http://localhost:3000/contas
```

```javascript
// No body (JSON) preencher os dados da requisição:
{
 "nome": "Exemplo 1",
 "cpf": "00011122233",
 "data_nascimento": "01/01/1994",
 "telefone": "85911114444",
 "email": "exemplo1@exemplo.com",
 "senha": "123456"
}
```

<img src="https://github.com/MonalisaFB/API-Sistema-Bancario/assets/142239212/5477dfc2-fbfc-4535-b14e-490053d65d3d">

### Listar Contas Bancárias - **GET**
```javascript
http://localhost:3000/contas?senha_banco=Cubos123Bank
```

<img src="https://github.com/MonalisaFB/API-Sistema-Bancario/assets/142239212/c8cd7301-5707-4e14-b18c-411f6409f95c" >

### Atualizar Usuário da Conta Bancária - **PUT**
```javascript
http://localhost:3000/contas/:numeroConta/usuario
```
```javascript
// No body (JSON) preencher os dados da requisição:
{
			"nome": "Exemplo 1",
			"cpf": "00011122233",
			"data_nascimento": "01/01/1994",
			"telefone": "85911114444",
			"email": "exemplo1@exemplo.com",
			"senha": "123"
}
```

<img src="https://github.com/MarcelaLinhares/API-REST-Sistema-Bancario/assets/142239212/8ac2dcb5-42ac-423d-974a-bf66ad6512c0" >

### Excluir Conta Bancária - **DELETE**

```javascript
http://localhost:3000/contas/:numeroConta
```

<img src="https://github.com/MonalisaFB/API-Sistema-Bancario/assets/142239212/8f8ff61c-091f-41e8-b031-4a3888cc7135" >

### Depositar - **POST**

```javascript
http://localhost:3000/transacoes/depositar
```

```javascript
// No body (JSON) preencher os dados da requisição:
{
 "numero_conta": "1",
 "valor": 5000
}
```

<img src="https://github.com/MonalisaFB/API-Sistema-Bancario/assets/142239212/5bc3c429-3cec-4412-b8bb-b37db76ccf31" >

### Sacar - **POST**

```javascript
http://localhost:3000/transacoes/sacar
```

```javascript
// No body (JSON) preencher os dados da requisição:
{
 "numero_conta": "1",
 "valor": 120,
 "senha": "123456"
}
```

<img src="https://github.com/MonalisaFB/API-Sistema-Bancario/assets/142239212/4f15eeaa-ca16-41f8-bcd4-73697eed1a7f" >

### Transferir - **POST**

```javascript
http://localhost:3000/transacoes/transferir
```

```javascript
// No body (JSON) preencher os dados da requisição:
{
 "numero_conta_origem": "1",
"numero_conta_destino": "2",
 "valor": 2000,
 "senha": "123456"
}
```

<img src="https://github.com/MonalisaFB/API-Sistema-Bancario/assets/142239212/a38aae53-2f8a-4acb-bcaf-4dbfbf49ed96" >

### Consultar Saldo - **GET**

```javascript
http://localhost:3000/contas/saldo?numero_conta=1&senha=123456
```

<img src="https://github.com/MonalisaFB/API-Sistema-Bancario/assets/142239212/49e54e96-6f01-430d-940e-8e86b6d78524" >

### Emitir Extrato - **GET**

```javascript
http://localhost:3000/contas/extrato?numero_conta=1&senha=123456
```

<img src="https://github.com/MonalisaFB/API-Sistema-Bancario/assets/142239212/62c84ac1-7577-4ac6-8965-a2ae64d93b28" >

## Desenvolvedores

<table>
  
  <tr>
    <td align="center"><a href="https://github.com/MonalisaFB"><img src="https://github.com/MonalisaFB/API-Sistema-Bancario/assets/142239212/3909d1f5-44b3-4d43-bf36-59230b5a9751" width="50px;" alt=""/><br /><sub><b>Monalisa Brito</b></sub></a><br /></td>
