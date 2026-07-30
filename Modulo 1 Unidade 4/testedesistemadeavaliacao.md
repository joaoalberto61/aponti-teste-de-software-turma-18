# 🧪 Testes de Sistema e de Aceitação — Sistema Bancário

Este repositório contém a resolução da atividade prática sobre **Testes de Sistema e Testes de Aceitação**, focada no fluxo de autenticação e visualização de saldo de um sistema bancário.

O objetivo do projeto é demonstrar a aplicação prática da diferenciação entre testes focados na perspectiva técnica do software (Sistema) e testes focados no valor entregue ao usuário/negócio (Aceitação).

---

## 📌 Cenário Analisado

> **Contexto:** Um sistema bancário permite que usuários realizem login, acessem sua conta e visualizem seu saldo atual.

### 🔹 Funcionalidades Envolvidas
* **Autenticação de Usuário:** Entrada e validação de credenciais de acesso.
* **Navegação & Painel (Dashboard):** Transição e carregamento pós-login.
* **Consulta de Saldo:** Exibição, atualização e privacidade visual do valor disponível.

### 🔹 Fluxo Principal (Caminho Feliz)
1. O usuário acessa a tela de login.
2. Informa credenciais válidas e submete o formulário.
3. O sistema valida os dados e redireciona para a tela inicial da conta.
4. O saldo bancário atualizado é exibido na interface.

### 🔹 Variações de Fluxo
* Tentativa de login com senha ou usuário incorretos.
* Alternância da visibilidade do saldo (ocultar/exibir valor).
* Expiração de sessão por inatividade.

---

## 📋 Casos de Teste

### 1️⃣ Testes de Sistema
> **Foco:** Funcionamento técnico, validação de navegação e integração entre componentes/telas.

| ID | Título | Tipo de Fluxo | Pré-condições | Passos | Resultado Esperado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TS-01** | Autenticação e redirecionamento para a Home | Principal | Usuário ativo cadastrado; Tela de login aberta. | 1. Informar CPF e senha válidos.<br>2. Clicar em "Entrar". | O sistema autentica o usuário, altera a URL para a dashboard e carrega os componentes da tela. |
| **TS-02** | Carregamento do saldo via API | Principal | Usuário autenticado na dashboard. | 1. Aguardar renderização da tela.<br>2. Observar o card de saldo. | O sistema faz requisição à API e renderiza o valor do saldo em formato moeda (`R$ X.XXX,XX`). |
| **TS-03** | Login com credenciais inválidas | Alternativo | Tela de login aberta. | 1. Inserir CPF válido e senha incorreta.<br>2. Clicar em "Entrar". | A tela não é alterada, a senha é limpa e a mensagem de erro *"Usuário ou senha inválidos"* é exibida. |
| **TS-04** | Ocultar/Exibir saldo na interface | Alternativo | Usuário logado na dashboard. | 1. Localizar o painel de saldo.<br>2. Clicar no ícone de visualização (olho). | O valor alterna dinamicamente entre mascarado (`R$ ***`) e visível sem recarregar a página. |

---

### 2️⃣ Testes de Aceitação
> **Foco:** Entregável de valor para o usuário final, usabilidade e expectativas de negócio.

| ID | Título | Tipo de Fluxo | Pré-condições | Passos | Resultado Esperado |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TA-01** | Acesso rápido e seguro à conta | Principal | Cliente possui conta corrente ativa. | 1. Acessar a aplicação.<br>2. Informar credenciais e confirmar. | O cliente acessa seu ambiente restrito de forma simples, garantindo sua identificação com segurança. |
| **TA-02** | Clareza no saldo bancário | Principal | Cliente logado com saldo positivo. | 1. Visualizar a tela principal da conta. | O cliente identifica claramente o valor total disponível para uso imediato em suas decisões financeiras. |
| **TA-03** | Privacidade visual do saldo | Alternativo | Cliente em ambiente público. | 1. Acionar a opção de ocultar o saldo na tela. | Os dados numéricos do saldo são ocultados imediatamente, preservando a privacidade visual do cliente. |
| **TA-04** | Proteção contra acessos não autorizados | Alternativo | Tentativa de acesso com dados incorretos. | 1. Inserir dados incorretos e enviar. | O sistema impede o acesso a dados sigilosos e informa a falha, garantindo a proteção da conta do cliente. |

---

## 🧠 Justificativas Técnicas & Classificação

### ⚙️ Por que estes são Testes de Sistema?
* **Objetivo:** Garantir a estabilidade técnica e a integração entre módulos (Front-end, Back-end e Banco de Dados).
* **Visão:** Perspectiva técnica do profissional de garantia de qualidade (QA) / Engenharia de Software.
* **Validação:** Requisições de API, fluxo de navegação entre rotas, respostas da interface a erros e carregamento de componentes.

### 💼 Por que estes são Testes de Aceitação?
* **Objetivo:** Validar se a solução resolve o problema do usuário e cumpre os Requisitos de Negócio (Critérios de Aceite).
* **Visão:** Perspectiva do cliente final e do Product Owner (PO).
* **Validação:** Segurança financeira, facilidade de uso, privacidade de dados e entrega efetiva do valor prometido pelo produto.

---

## 🔍 Checklist para Revisão por Pares (Peer Review)

Ao avaliar casos de teste criados pela equipe ou colegas, utilizam-se os seguintes critérios de aceitação do teste:

* [x] **Clareza:** Passos objetivos, reprodutíveis e sem ambiguidade.
* [x] **Estruturação:** Presença de ID, Título, Pré-condições, Passos e Resultado Esperado.
* [x] **Coerência de Tipo:** Separação clara entre comportamento do software (Sistema) e proposta de valor (Aceitação).
