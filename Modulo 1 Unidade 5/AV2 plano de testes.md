# 📋 Plano de Testes — Sistema Banco Digital (DevBank)

Este repositório contém o **Plano de Testes Resumido** desenvolvido para o sistema fictício **DevBank**. O documento foi estruturado para atender a projetos com prazo reduzido e equipe enxuta, focando na validação das funcionalidades mais críticas de uma aplicação bancária.

---

## 🎯 Atividade Avaliativa — Diretrizes do Projeto

* **Funcionalidades principais definidas:** Foco em autenticação e transações financeiras do dia a dia.
* **Prazo de entrega estabelecido:** Ciclo de testes curto (1 semana / 5 dias).
* **Time reduzido:** Priorização estrita de fluxos críticos de negócio.
* **Ambiente de testes disponível:** Homologação com dados mockados/fictícios.

---

## 🔍 1. Escopo de Testes

### 🟢 Dentro do Escopo (Fluxos Críticos)
- **Autenticação:** Login e logout seguro com CPF e senha.
- **Consulta de Saldo e Extrato:** Exibição do saldo atualizado em tempo real e histórico de movimentações.
- **Transferências via PIX:** Envio de valores via chave PIX e validação de limite/saldo.
- **Pagamento de Boletos:** Leitura ou digitação de código de barras e confirmação do débito.

### 🔴 Fora do Escopo
- Solicitação de empréstimos, abertura de conta e redefinição de senha via SMS/E-mail.
- Testes de carga/estresse de alta complexidade.

---

## 🧪 2. Tipos de Teste Aplicados

* **Testes Funcionais (Manuais):** Validação das regras de negócio (ex: tentativa de transferência acima do saldo disponível, chaves PIX inválidas).
* **Testes de Usabilidade Básica:** Avaliação da clareza das mensagens de erro/sucesso e navegação fluida.
* **Testes de Regressão Críticos:** Checklist rápido dos fluxos primários a cada nova build liberada.
* **Testes de API:** Validação dos *endpoints* de transação via Postman (respostas HTTP status `200 OK`, `400 Bad Request`, `401 Unauthorized`).

---

## 🚦 3. Critérios de Entrada e Saída

### 📥 Critérios de Entrada
1. Ambiente de homologação funcional e populado com massa de dados fictícia.
2. Build com as funcionalidades do escopo liberada pela equipe de desenvolvimento.
3. Cenários de teste e casos de uso definidos e aprovados.

### 📤 Critérios de Saída
1. 100% dos fluxos do "caminho feliz" e erros críticos executados.
2. Zero defeitos de severidade **Crítica** ou **Alta** em aberto.
3. Relatório de execução aprovado pelo responsável do projeto.

---

## 🖥️ 4. Ambiente de Testes

* **Web Browsers:** Google Chrome e Mozilla Firefox (versões mais recentes).
* **Mobile:** Dispositivos móveis para testes responsivos / aplicativo.
* **Banco de Dados de Homologação:** Instância SQL isolada com massa de dados simulada (contas com saldos positivos, zerados e bloqueados).

---

## 👥 5. Recursos e Responsabilidades

| Papel | Responsabilidades |
| :--- | :--- |
| **Analista de QA** | Elaboração dos casos de teste, execução manual, reporte de bugs e retestes. |
| **Desenvolvedor** | Correção imediata de defeitos impeditivos e suporte na preparação da massa de dados. |
| **Product Owner (PO)** | Validação das regras de negócio, alinhamento de prioridades e aceite final. |

---

## 📅 6. Cronograma Básico (Ciclo de 5 Dias)

| Dia | Atividades |
| :---: | :--- |
| **Dia 1** | Alinhamento do escopo, validação do ambiente de testes e geração da massa de dados. |
| **Dia 2** | Execução dos testes funcionais em Login e Consulta de Saldo/Extrato. |
| **Dia 3** | Execução dos testes nos fluxos de PIX e Pagamento de Boletos. |
| **Dia 4** | Reteste de bugs corrigidos e execução da regressão dos fluxos críticos. |
| **Dia 5** | Validação final, consolidação do relatório de execução e Go/No-Go. |

---

## ⚠️ 7. Riscos e Contingências

| Risco Mapeado | Impacto | Plano de Contingência |
| :--- | :---: | :--- |
| Instabilidade ou queda do ambiente de testes. | **Alto** | Utilizar massa de dados pré-configurada em ambiente local (mock local/API). |
| Gargalo de tempo por ter time enxuto. | **Alto** | Priorizar exclusivamente o "caminho feliz" e cenários financeiros de alta severidade; desconsiderar ajustes cosméticos pontuais. |
| Atraso na entrega das builds do backend/frontend. | **Médio** | Executar testes de integração diretamente nas APIs via Postman antes da interface estar totalmente pronta. |
