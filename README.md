# API - PROJETOVMD

<br />

Um CRUD para a empresa VMD crédito

---

<br />

# Enpoints

A API tem 2 endpoints diferentes, para criação, atualização, deleção e obtenção de usuários, sendo eles o clientes e o financeiro.

---

<br />

## **Clientes**

---

<br />

## Post/Register

<br />

`POST/user`

```json
{
  "nome": "jones",
  "cpf": "71355702723",
  "cep": "25631478",
  "logradouro": "rua joao ninguem",
  "cidade": "florips",
  "uf": "sc",
  "ddd": 47,
  "numero": 996185796,
  "saldo_conta": 30
}
```

Requisição **bem sucedida** retorna a seguinte resposta:

`STATUS 201 - CREATED`

```json
{
  "saldo_conta": 30,
  "numero": 996185796,
  "ddd": 47,
  "uf": "sc",
  "cidade": "florips",
  "logradouro": "rua joao ninguem",
  "cep": "25631478",
  "cpf": "71355702723",
  "nome": "jones"
}
```

---

<br />

## Get

<br />

`GET/clientes`

```json
NO BODY
```

Requisição **bem sucedida**, retorna a seguinte resposta.

`STATUS 200 - OK`

```json
{
  "clientes": [
    {
      "clienteId": "aa3ae577-cf06-40cd-a0db-22007f3a9bd5",
      "nome": "jones",
      "cpf": "41355702723",
      "cep": "25631478",
      "logradouro": "rua joao ninguem",
      "cidade": "florips",
      "uf": "sc",
      "ddd": 47,
      "numero": 996185796,
      "saldo_conta": 30
    }
  ]
}
```

---

<br />

## Update

<br />

`PATCH/clientes/<cpf>`

```json
{
  "nome": "jones da silva",
  "cep": "25631478",
  "logradouro": "rua jones nobody",
  "cidade": "florips",
  "uf": "sc",
  "ddd": 47,
  "numero": 996145796,
  "saldo_conta": 20
}
```

Requisição **bem sucedida** , sem retorno.

`STATUS 204 - OK`

```json
{
  "saldo_conta": 20,
  "numero": 996145796,
  "ddd": 47,
  "uf": "sc",
  "cidade": "florips",
  "logradouro": "rua jones nobody",
  "cep": "25631478",
  "cpf": "71355702723",
  "nome": "jones da silva"
}
```

---

<br />

## Delete

<br />

`DELETE/user/<cpf>`

```json
NO BODY
```

Requisição **bem sucedida** , sem retorno.

`STATUS 202 - Accepted`

```json
{
  "message": "Cliente deletado com sucesso"
}
```

<br />

## **Financeiro**

---

<br />

## Post

<br />

`POST/financeiro`

```json
{
  "cpf": "71355702723",
  "tipo": "entrada",
  "valor": 50,
  "data": "30-06-2020"
}
```

Requisição **bem sucedida** retorna a seguinte resposta:

`STATUS 201 - CREATED`

```json
{
  "data": "30-06-2020",
  "valor": 50,
  "tipo": "entrada",
  "cpf": "71355702723",
  "financeiroId": "75c8f9d7-15d8-4d3d-8df8-874546ee8871"
}
```

---

<br />

## Get

<br />

`GET/financeiro`

```json
No body
```

Requisição **bem sucedida** retorna a seguinte resposta:

`STATUS 200 - OK`

```json
{
  "financeiro": [
    {
      "owner": {
        "cpf": "41355702723",
        "nome": "jones"
      },
      "data": "30-06-2020",
      "valor": 50,
      "tipo": "entrada",
      "cpf": "41355702723",
      "financeiroId": "9807006c-7f5b-4fbb-8cce-0c505339bf14"
    }
  ]
}
```

---

<br />

## Patch

<br />

`PATCH/recipe/<financeiroId>`

```json
{
  "cpf": "38355785754",
  "tipo": "saida",
  "valor": 140,
  "data": "30-06-2020"
}
```

Requisição **bem sucedida** retorna a seguinte resposta:

`STATUS 200 - OK`

```json
{
  "data": "30-06-2020",
  "valor": 140,
  "tipo": "saida",
  "cpf": "38355785754",
  "financeiroId": "75c8f9d7-15d8-4d3d-8df8-874546ee8871"
}
```

---

<br />

## Delete

<br />

**Rota necessita de autenticação**

`DELETE/recipe/<financeiroId>`

```json
NO BODY
```

Requisição **bem sucedida** , sem retorno.

`STATUS 202 - Accepted`

```json
{
  "message": "Financeiro deletado com sucesso"
}
```

---
