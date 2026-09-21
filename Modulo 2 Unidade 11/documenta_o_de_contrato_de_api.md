# 🧪 Mapeamento de Contrato de API - Restful-booker

Documentação técnica desenvolvida como parte da atividade prática de **Testes de Software / Mapeamento de Contrato de API**. O objetivo deste documento é mapear os contratos de integração (HTTP GET e POST) antes da etapa de automação de testes.

---

## 📌 API Escolhida
* **Nome:** Restful-booker
* **Documentação Oficial:** [https://restful-booker.herokuapp.com](https://restful-booker.herokuapp.com)
* **Descrição:** API pública ideal para simulação de um sistema de gestão de reservas de hotel, permitindo praticar cenários com payloads JSON estruturados e aninhados.

---

## 🔍 Mapeamento dos Endpoints

### 1. Endpoint de Leitura (GET) — Consultar Reserva Específica

#### 1. Identificação e Finalidade
* **Endpoint/Rota:** `/booking/:id` (ex: `/booking/1`)
* **Objetivo de Negócio:** Permitir a consulta dos detalhes de uma reserva específica previamente cadastrada no sistema, retornando dados do hóspede, datas de estadia e status do pagamento.

#### 2. Estrutura do Request (O que o cliente envia)
* **Método HTTP:** `GET`
* **URL Completa:** `https://restful-booker.herokuapp.com/booking/1`
* **Headers (Cabeçalhos):**
  * `Accept`: `application/json`
* **Body (Corpo):** N/A (Não se aplica)

#### 3. Estrutura do Response (O que o servidor devolve)
* **Status Code Esperado:** `200 OK`
* **Payload de Retorno:**
```json
{
  "firstname": "Sally",
  "lastname": "Brown",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2013-02-23",
    "checkout": "2014-10-23"
  },
  "additionalneeds": "Breakfast"
}
```

---

### 2. Endpoint de Criação (POST) — Criar Nova Reserva

#### 1. Identificação e Finalidade
* **Endpoint/Rota:** `/booking`
* **Objetivo de Negócio:** Registrar uma nova reserva de hotel no sistema com as informações do cliente, datas da estadia, valores e solicitações adicionais.

#### 2. Estrutura do Request (O que o cliente envia)
* **Método HTTP:** `POST`
* **URL Completa:** `https://restful-booker.herokuapp.com/booking`
* **Headers (Cabeçalhos):**
  * `Content-Type`: `application/json`
  * `Accept`: `application/json`
* **Body (Corpo):**
```json
{
  "firstname": "Maria",
  "lastname": "Silva",
  "totalprice": 250,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2024-11-10",
    "checkout": "2024-11-15"
  },
  "additionalneeds": "Café da manhã e quarto andar alto"
}
```

#### 3. Estrutura do Response (O que o servidor devolve)
* **Status Code Esperado:** `200 OK` *(Nota: Esta API especifica retorna 200 OK ao criar novos registros)*
* **Payload de Retorno:**
```json
{
  "bookingid": 3412,
  "booking": {
    "firstname": "Maria",
    "lastname": "Silva",
    "totalprice": 250,
    "depositpaid": true,
    "bookingdates": {
      "checkin": "2024-11-10",
      "checkout": "2024-11-15"
    },
    "additionalneeds": "Café da manhã e quarto andar alto"
  }
}
```

---

## 🛠️ Ferramentas Utilizadas
* **Postman / cURL:** Para execução e validação real das requisições HTTP.
* **Markdown:** Para estruturação da documentação técnica.