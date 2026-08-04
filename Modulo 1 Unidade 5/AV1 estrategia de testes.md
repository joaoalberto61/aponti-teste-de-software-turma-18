# 🏦 Estratégia de Testes — Sistema Bancário (Internet & Mobile Banking)

> **Documento de Estratégia de Garantia da Qualidade (QA)** elaborado para um cenário de desenvolvimento ativo, prazo fixo de entrega, equipe reduzida e foco em alta relevância transacional e segurança financeira.

---

## 📌 Contexto do Projeto

O projeto consiste no desenvolvimento de uma aplicação de **Internet e Mobile Banking** destinada a usuários finais. O cenário operacional apresenta as seguintes características e restrições:

* ⚙️ **Desenvolvimento Ativo:** O software sofre evoluções, novas features e correções frequentes.
* ⏳ **Prazo Definido:** Data de lançamento fixa exigindo otimização do ciclo de testes.
* 👥 **Time Reduzido:** Necessidade de equilíbrio entre automação e validações manuais exploratórias.
* 👤 **Usuários Reais:** Exigência de alta confiabilidade, estabilidade e usabilidade.
* 🔄 **Múltiplas Funcionalidades:** Módulos de cadastro, autenticação, consultas de saldo/extrato, transferências (Pix/TED) e pagamentos.

---

## 🎯 1. Objetivo da Estratégia

### O que é mais importante garantir?
1. **Integridade Financeira e Consistência de Dados:** Garantir que 100% das transações (créditos e débitos) sejam processadas atomicamente sem erros de saldo ou duplicidade.
2. **Segurança da Informação e Privacidade:** Assegurar a proteção de dados sensíveis (LGPD) e controle de acesso rigoroso (autenticação e autorização).
3. **Disponibilidade e Resiliência:** Manter o sistema estável durante picos de uso e tratar falhas de comunicação com serviços terceiros de forma graciosa.

### Aspectos de Maior Atenção
* **Fluxos Transacionais Críticos:** Pix, transferências, pagamentos de boletos e atualização de extrato.
* **Segurança e Autenticação:** Login, MFA (Autenticação Multi-fator), biometria e geração de tokens JWT.
* **Tratamento de Exceções:** Comportamento do app em instabilidade de rede ou timeout durante transações financeiras.

---

## 🛡️ 2. Tipos de Teste Prioritários

| Tipo de Teste | Prioridade | Escopo & Foco |
| :--- | :---: | :--- |
| **Testes Funcionais** | 🔴 Alta | Regras de negócio, limites operacionais, cálculo de tarifas e validação de chaves Pix/boletos. |
| **Testes de Integração** | 🔴 Alta | Comunicação entre microsserviços (Saldo, Extrato, Pagamentos) e APIs externas (Banco Central, Clearing). |
| **Testes de Segurança (SAST/PenTest)** | 🔴 Alta | Validação de vulnerabilidades de OWASP, *SQL Injection*, *Bypass* de autenticação e vazamento de dados. |
| **Testes de Regressão** | 🟡 Média/Alta | Garantir que correções e novas subidas não quebrem funcionalidades legadas. |
| **Testes de Desempenho / Carga** | 🟡 Média | Carga básica e testes de estresse em endpoints críticos de API. |
| **Testes de Usabilidade Avançados** | 🟢 Baixa | Refinamento de UI/UX fica diferido para fases pós-lançamento, priorizando estabilidade funcional. |

### Justificativa baseada em Risco
Em um ecossistema bancário, o risco de impacto financeiro e danos à reputação decorrentes de uma falha em transação superam significativamente pequenos desvios visuais ou de interface.

---

## 🔬 3. Abordagens de Teste (Manual vs. Automatizado)

```
                       ┌─────────────────────────┐
                       │   Testes Exploratórios  │  (Manual / QA)
                       │   e Validação de UI/UX  │
                       ├─────────────────────────┤
                       │  Testes de Regressão    │  (Automatizado / API & E2E)
                       │   de Rotas Críticas     │
                       ├─────────────────────────┤
                       │  Testes de Integração   │  (Automatizado / backend)
                       │  e Unidade (Devs)       │
                       └─────────────────────────┘
```

* **Testes Manuais (Exploratórios & Aceitação):**
  * Foco em validação de cenários de borda (*edge cases*), usabilidade mobile/web em diferentes dispositivos e validação inicial de novas *user stories*.
* **Testes Automatizados (API & E2E):**
  * **Unidade / Integração:** Mantidos pelos desenvolvedores na construção do código.
  * **API (RestAssured / Postman / Cypress):** Validação contínua de rotas de login, saldo, transferência e pagamentos.
  * **E2E / Regressão:** Automação dos fluxos *Happy Path* principais executados a cada *build*.

* **Motivação do Mix:**
  A automação da regressão de API libera o time reduzido do trabalho repetitivo de retestar o passado a cada *sprint*, permitindo focar esforços manuais no teste exploratório de novas funcionalidades.

---

## ⚠️ 4. Riscos e Plano de Mitigação

| Risco Identificado | Impacto | Estratégia de Mitigação |
| :--- | :---: | :--- |
| Inconsistência de saldo / Duplicidade no Pix | **Crítico** | Testes de concorrência, idempotência e automação rigorosa de cenários de API. |
| Falhas de Segurança / Acesso Indevido | **Crítico** | Testes de autorização (RBAC/ABAC), validação de tokens e varredura de vulnerabilidades no pipeline. |
| Regressão por alta frequência de deploys | **Alto** | Execução de suíte regressiva automatizada conectada ao pipeline de CI/CD em cada *Pull Request*. |
| Gargalo no time de QA (Time Reduzido) | **Médio** | Adoção da cultura de *Shift Left* (Devs testando unidade e integração; QA focado em critérios de aceite e automação de API). |

---

## 📅 5. Recursos e Cronograma

* **Recursos Humanos:**
  * 1 Analista de Qualidade (QA / Test Automation) atuando no planejamento, automação de API e testes exploratórios.
  * Desenvolvedores atuando na cobertura de testes unitários, testes de integração de código e correções ágeis.

* **Momento da Execução:**
  * **Fase de Refinamento:** Validação de cenários e critérios de aceite antes do desenvolvimento (*Shift Left*).
  * **Desenvolvimento:** Testes unitários/integração contínuos.
  * **Deploy em Staging:** Execução da suíte de regressão e testes exploratórios na *Release Candidate*.

* **Estratégia Contínua:**
  Os testes ocorrem de forma **contínua** integrados à esteira de CI/CD (Pipeline automatizado), garantindo rápido *feedback loop* antes de cada envio para produção.

---

## 📄 Licença e Uso

Este repositório serve como modelo conceitual e prático de plano/estratégia de testes para aplicações financeiras. Sinta-se à vontade para reutilizar ou adaptar a estrutura para o seu projeto!
