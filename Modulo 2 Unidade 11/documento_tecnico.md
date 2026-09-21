# 🧪 Guia de Testes de Software & Arquitetura REST API

Este repositório contém um documento técnico detalhado abordando conceitos essenciais de APIs REST, métodos HTTP, códigos de status, boas práticas de estruturação de JSON e cenários para testes de integração.

---

## 📌 Conteúdo

1. [Diferença entre PUT, PATCH e DELETE](#1-diferença-entre-put-patch-e-delete)
2. [Principais Status Codes HTTP](#2-principais-status-codes-http-e-seus-significados)
3. [Exemplo de Payload JSON Bem Estruturado](#3-exemplo-de-payload-json-bem-estruturado)
4. [Criação de Testes de Integração](#4-criação-de-testes-de-integração)

---

## 1. Diferença entre PUT, PATCH e DELETE

Na arquitetura REST, cada método HTTP possui um propósito específico e regras de comportamento quanto à alteração ou remoção de recursos.

| Método | Finalidade | Atualização Parcial ou Total? | Idempotente? |
| :--- | :--- | :--- | :--- |
| **`PUT`** | Substituir integralmente um recurso existente ou criá-lo caso não exista. | **Total** | **Sim** |
| **`PATCH`** | Aplicar modificações parciais a um recurso existente. | **Parcial** | **Não** (Geralmente) |
| **`DELETE`** | Remover um recurso específico da base de dados/sistema. | N/A | **Sim** |

### Explicação Detalhada:

* **`PUT` (Substituição Completa):**
  * Caso deseje atualizar um recurso com `PUT`, você deve enviar a representação **completa** do objeto no payload. Campos omitidos no envio geralmente são sobrescritos como `null` ou apagados no servidor.
  * *Exemplo:* Atualizar o perfil do usuário alterando apenas o e-mail exige o envio de `nome`, `e-mail`, `telefone`, etc.

* **`PATCH` (Atualização Parcial):**
  * Utilizado para modificar apenas propriedades específicas de um recurso sem afetar os outros campos.
  * *Exemplo:* Enviar apenas `{"email": "novo@email.com"}` para alterar unicamente o e-mail do usuário.

* **`DELETE` (Remoção):**
  * Solicita ao servidor a exclusão do recurso identificado pela URI.
  * Caso executado com sucesso e o recurso deixe de existir, chamadas subsequentes costumam retornar `404 Not Found` ou `204 No Content`.

> **Nota sobre Idempotência:** Um método é idempotente quando múltiplas requisições idênticas produzem o mesmo efeito final no servidor que uma única requisição.

---

## 2. Principais Status Codes HTTP e Seus Significados

Os códigos de status informam o resultado da requisição feita pelo cliente. Estão divididos em famílias:

### 🟩 2xx — Sucesso (Success)
* **`200 OK`**: A requisição foi bem-sucedida. Padrão para respostas `GET`, `PUT` ou `PATCH` que retornam dados.
* **`201 Created`**: A requisição foi bem-sucedida e um novo recurso foi criado no servidor (comum em `POST`).
* **`204 No Content`**: A requisição foi processada com sucesso, mas não há conteúdo no corpo da resposta (comum em `DELETE` ou `PUT`).

### 🟦 3xx — Redirecionamento (Redirection)
* **`301 Moved Permanently`**: A URI do recurso foi alterada permanentemente.
* **`304 Not Modified`**: O recurso não sofreu alterações desde a última requisição (usado para *caching*).

### 🟧 4xx — Erros do Cliente (Client Errors)
* **`400 Bad Request`**: A requisição contém sintaxe inválida, campos obrigatórios ausentes ou payload mal formatado.
* **`401 Unauthorized`**: O cliente não está autenticado. É necessário fornecer credenciais válidas.
* **`403 Forbidden`**: O cliente está autenticado, mas não possui autorização (permissão) para acessar o recurso.
* **`404 Not Found`**: O recurso solicitado não foi encontrado no servidor.
* **`409 Conflict`**: A requisição não pôde ser concluída devido a um conflito no estado atual do recurso (ex: tentar cadastrar um e-mail já existente).
* **`422 Unprocessable Entity`**: A requisição está bem formatada (sintaxe OK), mas contém erros lógicos ou de validação nos dados.

### 🟥 5xx — Erros do Servidor (Server Errors)
* **`500 Internal Server Error`**: Ocorreu uma falha inesperada no servidor ao processar a requisição.
* **`502 Bad Gateway`**: O servidor, atuando como gateway/proxy, recebeu uma resposta inválida do servidor upstream.
* **`503 Service Unavailable`**: O serviço está temporariamente indisponível (manutenção ou sobrecarga).

---

## 3. Exemplo de Payload JSON Bem Estruturado

Um JSON bem estruturado deve utilizar **camelCase** para as chaves, tipos de dados adequados (strings, números, booleanos, arrays, objetos), padrão UTC para datas e sub-objetos legíveis para agrupar dados correlacionados.

### Cadastro/Consulta de Cliente (`POST /api/v1/customers` ou `GET /api/v1/customers/12345`)

```json
{
  "id": "usr_9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  "fullName": "Maria Silva",
  "email": "maria.silva@example.com",
  "phone": "+5511999998888",
  "isActive": true,
  "createdAt": "2026-03-30T14:22:10Z",
  "address": {
    "street": "Avenida Paulista",
    "number": "1000",
    "complement": "Apto 42",
    "neighborhood": "Bela Vista",
    "city": "São Paulo",
    "state": "SP",
    "zipCode": "01310-100"
  },
  "roles": [
    "CUSTOMER",
    "PREMIUM"
  ],
  "preferences": {
    "newsletter": true,
    "darkMode": false,
    "preferredLanguage": "pt-BR"
  }
}
```

---

## 4. Criação de Testes de Integração

Os testes de integração validam a comunicação entre os componentes da API, banco de dados, regras de negócio e validações HTTP.

Abaixo estão definidos cenários utilizando a sintaxe **BDD (Gherkin)** e a especificação técnica dos testes para o endpoint `/users`.

---

### 📝 Cenário 1: Atualização Parcial de Usuário com Sucesso (`PATCH`)

**Descrição em Gherkin:**
```gherkin
Funcionalidade: Atualização parcial de dados do usuário

  Cenário: Atualizar o e-mail de um usuário existente com sucesso
    Dado que existe um usuário cadastrado com o ID "usr_100"
    E o e-mail atual do usuário é "antigo@email.com"
    Quando eu enviar uma requisição PATCH para "/api/v1/users/usr_100" com o payload:
      """
      {
        "email": "novo.email@example.com"
      }
      """
    Então o código de status da resposta deve ser 200
    E o corpo da resposta deve conter o e-mail "novo.email@example.com"
    E os demais dados do usuário não devem ter sido alterados
```

---

### 📝 Cenário 2: Tentativa de Atualização com E-mail Já Cadastrado (`PATCH` com Erro de Conflito)

**Descrição em Gherkin:**
```gherkin
Funcionalidade: Validação de duplicidade na atualização do usuário

  Cenário: Tentar atualizar o e-mail para um endereço que pertence a outro usuário
    Dado que existe um usuário "A" com o ID "usr_100"
    E existe um usuário "B" com o e-mail "existente@example.com"
    Quando o usuário "A" enviar uma requisição PATCH para "/api/v1/users/usr_100" com o payload:
      """
      {
        "email": "existente@example.com"
      }
      """
    Então o código de status da resposta deve ser 409
    E a mensagem de erro deve ser "E-mail já cadastrado no sistema"
```

---

### 📝 Cenário 3: Exclusão de Usuário Existente (`DELETE`)

**Descrição em Gherkin:**
```gherkin
Funcionalidade: Deleção de usuário

  Cenário: Deletar um usuário existente com sucesso
    Dado que existe um usuário cadastrado com o ID "usr_200"
    Quando eu enviar uma requisição DELETE para "/api/v1/users/usr_200"
    Então o código de status da resposta deve ser 204
    E ao enviar uma requisição GET para "/api/v1/users/usr_200"
    Então o código de status da resposta deve ser 404
```

---

### 🧪 Matriz de Validação do Caso de Teste (Resumo do Teste de Integração)

| ID do Teste | Endpoint | Método | Cenário | Status Esperado | Validação do Body / BD |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **INT-01** | `/api/v1/users/{id}` | `PUT` | Substituir todos os dados de um usuário | `200 OK` | Todos os campos do banco devem refletir exatamente o payload enviado. |
| **INT-02** | `/api/v1/users/{id}` | `PUT` | Enviar payload faltando campos obrigatórios | `400 Bad Request` | Resposta contendo lista com os campos obrigatórios ausentes. |
| **INT-03** | `/api/v1/users/{id}` | `PATCH` | Alterar apenas o telefone do usuário | `200 OK` | Apenas o campo `phone` é alterado no banco de dados. |
| **INT-04** | `/api/v1/users/{id}` | `DELETE` | Deletar usuário com token expirado | `401 Unauthorized` | O recurso não é deletado do banco de dados. |
| **INT-05** | `/api/v1/users/{id}` | `DELETE` | Deletar ID inexistente | `404 Not Found` | Mensagem "Usuário não encontrado". |

---

## 🛠️ Ferramentas Recomendadas para Testar APIs
* **Execução/Manual:** Postman, Insomnia, Bruno.
* **Automated Integration Tests:** REST Assured (Java), Supertest (Node.js/Jest), Playwright / Cypress, PyTest (Python).