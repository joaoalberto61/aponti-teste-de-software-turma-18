# Testes Funcionais - Sistema de Gerenciamento de Pedidos (SGP)

Este repositório contém a resolução do exercício de **Testes Funcionais** aplicado sobre o **Sistema de Gerenciamento de Pedidos (SGP)**.

---

## 🎯 Sobre o Sistema (SGP)

O **SGP** é uma aplicação web utilizada por **clientes** e **administradores** para realizar e gerenciar pedidos de produtos online.

### 🔌 Integrações do Sistema
* **Banco de Dados de Produtos:** Consulta e recuperação de dados de produtos.
* **Serviço de Autenticação:** Login e verificação de credenciais de usuários.
* **Serviço de Pedidos:** Processamento e criação de pedidos.

### ⚙️ Funcionalidades Principais
1. Cadastro e autenticação de usuários.
2. Consulta de produtos disponíveis.
3. Adição e remoção de itens no carrinho.
4. Cálculo automático do valor total do pedido.
5. Finalização do pedido com confirmação.

### 📜 Regras de Negócio
* O pedido deve conter pelo menos **um item**.
* O valor total deve considerar a **quantidade e o preço** dos produtos.
* Usuários **não autenticados** não podem finalizar pedidos.
* Após a confirmação, o pedido **não pode ser alterado**.

---

## 🧪 Níveis de Teste e Aplicação no SGP

### 1. Testes Unitários
Os testes unitários focam em validar o menor componente testável do software (funções, métodos ou classes isoladas) sem dependências externas (banco de dados, rede, APIs).

* **Exemplos no SGP:**
  * **Cálculo do valor total:** Testar a função que calcula o subtotal e total (`quantidade × preço` de cada item).
  * **Validação de carrinho mínimo:** Testar o método que verifica se a lista de itens possui comprimento ≥ 1.
  * **Validação de entradas:** Testar funções utilitárias que validam formato de e-mail ou senha no cadastro.
* **Justificativa:** Garantir a exatidão das **regras de cálculo e lógicas internas puras** de forma rápida e sem efeitos colaterais.

---

### 2. Testes de Integração
Testam a comunicação e o fluxo de dados entre dois ou mais componentes ou serviços externos.

* **Exemplos no SGP:**
  * **Serviço de Autenticação:** Testar se o SGP envia credenciais para a API de autenticação e recebe corretamente o token JWT/resposta.
  * **Banco de Dados de Produtos:** Testar se a camada de dados executa a query correta e traz a lista atualizada de produtos disponíveis.
  * **Serviço de Pedidos:** Testar se a requisição enviada ao serviço de pedidos grava a ordem com os atributos corretos.
* **Justificativa:** Garantir que as **interfaces e a troca de dados entre os serviços/módulos** funcionem sem falhas de contrato ou conexão.

---

### 3. Testes de Sistema
Avaliam o comportamento do **sistema completo e integrado (End-to-End - E2E)** a partir da perspectiva do usuário.

* **Exemplos no SGP:**
  * **Fluxo Principal de Compra:** Autenticar um usuário ➔ consultar produtos ➔ adicionar ao carrinho ➔ conferir total ➔ finalizar pedido e receber confirmação.
  * **Restrição de Acesso:** Tentar acessar o fluxo de checkout diretamente sem login e verificar o redirecionamento/bloqueio.
  * **Imutabilidade pós-confirmação:** Finalizar um pedido e tentar editar seus itens via interface ou requisição direta para garantir que o pedido permaneça bloqueado para alterações.
* **Justificativa:** Garantir que o **sistema como um todo atenda a todos os requisitos funcionais e fluxos de negócio** no ambiente simulado/integrado.

---

### 4. Testes de Aceitação
Verificam se o software atende aos **requisitos do negócio e critérios de aprovação** dos usuários e *stakeholders* reais (UAT - *User Acceptance Testing*).

* **Exemplos no SGP:**
  * **Validação de Usabilidade por Clientes e Admins:** Testes alfa/beta onde usuários reais realizam compras e administradores gerenciam pedidos para aprovar a experiência.
  * **Homologação das Regras de Negócio:** Confirmação pelo Product Owner (PO) de que as travas de alteração pós-confirmação e calculadoras atendem às normas comerciais da empresa.
* **Justificativa:** Garantir a **prontidão para produção** e a **conformidade com o valor de negócio esperado**.

---

## 📊 Matriz Resumo de Testes

| Nível de Teste | Alvo Principal | Foco Prático no SGP |
| :--- | :--- | :--- |
| **Unitário** | Funções/Métodos isolados | Cálculo de totais e validação de regras de entrada |
| **Integração** | Comunicação entre módulos e APIs | Conexão com Serviços de Autenticação, Pedidos e BD |
| **Sistema** | Fluxo End-to-End (E2E) | Jornada completa de compra e travas de imutabilidade |
| **Aceitação** | Critérios de Negócio e Usuário | Validação pelo cliente/PO para autorizar o deploy |
