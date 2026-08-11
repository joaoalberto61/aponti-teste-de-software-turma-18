# 🧪 Gestão e Migração de Casos de Teste — Sistema Clin Web

[![QA - Test Management](https://img.shields.io/badge/QA-Test%20Management-blue.svg)](#)
[![Test Cycles](https://img.shields.io/badge/Cycles-Smoke%20%7C%20Sanity%20%7C%20Regression-green.svg)](#)
[![Test Cases](https://img.shields.io/badge/Total%20Test%20Cases-41-orange.svg)](#)

Documentação e estruturação da suite de testes para o sistema de gestão clínica. Este repositório reflete a migração de casos de teste em formato textual para o padrão estruturado de ferramentas de gerenciamento de testes (como **Jira / Xray**, **TestRail** e **Azure DevOps**), acompanhado da organização em ciclos estratégicos de execução (**Smoke**, **Sanity** e **Regression**).

---

## 📌 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Estrutura do Padrão dos Casos de Teste](#-estrutura-do-padrão-dos-casos-de-teste)
- [Estratégia dos Ciclos de Testes](#-estratégia-dos-ciclos-de-testes)
  - [🔥 Smoke Testing (Teste de Fumaça)](#-smoke-testing-teste-de-fumaça)
  - [🔎 Sanity Testing (Teste de Sanidade)](#-sanity-testing-teste-de-sanidade)
  - [🔄 Regression Testing (Teste de Regressão)](#-regression-testing-teste-de-regressão)
- [Matriz de Cobertura de Testes (CT001 - CT041)](#-matriz-de-cobertura-de-testes-ct001---ct041)
- [Ferramentas e Tecnologias](#-ferramentas-e-tecnologias)

---

## 📖 Sobre o Projeto

O objetivo principal desta atividade é aplicar as melhores práticas de **Quality Assurance (QA)** na padronização, rastreabilidade e acompanhamento da execução de testes operacionais de um sistema de gestão médica/psicológica.

A suíte cobre desde a rotina de autenticação e gestão de permissões até o controle completo de prontuários, agendamentos, recepção (check-in) e fluxo financeiro.

---

## 📝 Estrutura do Padrão dos Casos de Teste

Para garantir a interoperabilidade com ferramentas de gestão utilizadas no mercado, cada caso de teste segue rigorosamente o formato estipulado:

- **ID do Teste:** Identificador único e rastreável (ex: `CT001`).
- **Título / Nome:** Descrição sucinta da funcionalidade sob teste.
- **Pré-condições:** Estado inicial necessário para o início da execução.
- **Passos de Execução:** Instruções passo a passo ordenadas e objetivas.
- **Resultado Esperado:** Comportamento esperado do software após a execução dos passos.

---

## 🎯 Estratégia dos Ciclos de Testes

Os casos de teste foram agrupados em três níveis estratégicos de execução:

```
                  ┌────────────────────────┐
                  │   REGRESSION TESTING   │  ➜ Suíte Completa (CT001 a CT041)
                  └───────────┬────────────┘
                              │
                  ┌───────────┴────────────┐
                  │     SANITY TESTING     │  ➜ Funcionalidades Específicas / CRUDs
                  └───────────┬────────────┘
                              │
                  ┌───────────┴────────────┐
                  │     SMOKE TESTING      │  ➜ Caminho Crítico / Build Verification
                  └────────────────────────┘
```

### 🔥 Smoke Testing (Teste de Fumaça)
* **Foco:** Validação do caminho crítico do sistema (*Build Verification Test*).
* **Escopo:** Garantir que o sistema está estável para receber testes mais aprofundados. Se um destes falhar, a build é rejeitada.
* **Casos Incluídos:** `CT001`, `CT002`, `CT005`, `CT026`, `CT035`, `CT041`.

### 🔎 Sanity Testing (Teste de Sanidade)
* **Foco:** Verificar rapidamente se alterações recentes ou correções de *bugs* não afetaram os fluxos essenciais de módulos específicos.
* **Escopo:** Validação focada no ciclo básico de operações CRUD em módulos chave.
* **Casos Incluídos:** 
  - **Pacientes:** `CT002`, `CT003`, `CT004`
  - **Psicólogos:** `CT005`, `CT006`, `CT007`
  - **Agenda & Agendamentos:** `CT023` ao `CT028`
  - **Check-in / Presença:** `CT032`, `CT033`, `CT034`
  - **Prontuários & Evoluções:** `CT035` ao `CT040`

### 🔄 Regression Testing (Teste de Regressão)
* **Foco:** Execução completa da suíte de testes antes de *deploys* em ambiente de produção ou *releases* maiores.
* **Escopo:** Abrange **100% dos Casos de Teste (`CT001` ao `CT041`)**, garantindo que nenhuma regressão foi introduzida no sistema.

---

## 📊 Matriz de Cobertura de Testes (CT001 - CT041)

| ID | Título | Pré-condição | Passos | Resultado Esperado | Ciclos |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **CT001** | Fazer Login de Administrador | Usuário na tela de login com campos em branco. | 1. Digitar usuário e senha.<br>2. Clicar em "Entrar". | Acessar a Home se correto. Caso incorreto, exibir "Usuário ou senha inválidos". | `Smoke` `Regression` |
| **CT002** | Adicionar registro em Pacientes | Autenticado na aba Pacientes. | 1. Clicar em "+ Novo registro".<br>2. Preencher dados e salvar. | Registro inserido no BD e visível na aba Pacientes. | `Smoke` `Sanity` `Regression` |
| **CT003** | Editar registro em Pacientes | Autenticado na aba Pacientes com dados. | 1. Clicar no ícone de lápis.<br>2. Modificar dados e salvar. | Dados do paciente atualizados com sucesso. | `Sanity` `Regression` |
| **CT004** | Excluir registro em Pacientes | Autenticado na aba Pacientes com dados. | 1. Clicar no "X" ao lado do paciente.<br>2. Confirmar em "OK". | Registro removido da aba Pacientes. | `Sanity` `Regression` |
| **CT005** | Adicionar registro em Psicólogos | Autenticado na aba Psicólogos. | 1. Clicar em "+ Novo registro".<br>2. Preencher dados e salvar. | Registro gravado no BD e visível na aba Psicólogos. | `Smoke` `Sanity` `Regression` |
| **CT006** | Editar registro em Psicólogos | Autenticado na aba Psicólogos com dados. | 1. Clicar no lápis.<br>2. Alterar dados e salvar. | Dados do psicólogo modificados com sucesso. | `Sanity` `Regression` |
| **CT007** | Excluir registro em Psicólogos | Autenticado na aba Psicólogos com dados. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Registro excluído da aba Psicólogos. | `Sanity` `Regression` |
| **CT008** | Adicionar registro em Funcionários | Autenticado na aba Funcionários. | 1. Clicar em "+ Novo registro".<br>2. Preencher dados e salvar. | Registro visível na aba Funcionários. | `Regression` |
| **CT009** | Editar registro em Funcionários | Autenticado na aba Funcionários com dados. | 1. Clicar no lápis.<br>2. Alterar dados e salvar. | Registro de funcionário atualizado. | `Regression` |
| **CT010** | Excluir registro em Funcionários | Autenticado na aba Funcionários com dados. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Registro removido de Funcionários. | `Regression` |
| **CT011** | Adicionar registro em Perfis e permissões | Autenticado na aba Perfis e permissões. | 1. Clicar em "+ Novo registro".<br>2. Preencher dados e salvar. | Novo perfil visível na listagem. | `Regression` |
| **CT012** | Editar registro em Perfis e permissões | Autenticado na aba Perfis e permissões. | 1. Clicar no lápis.<br>2. Modificar e salvar. | Dados de permissão alterados. | `Regression` |
| **CT013** | Excluir registro em Perfis e permissões | Autenticado na aba Perfis e permissões. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Registro de perfil excluído. | `Regression` |
| **CT014** | Adicionar registro em Especialidades | Autenticado na aba Especialidades. | 1. Clicar em "+ Novo registro".<br>2. Digitar dados e salvar. | Especialidade adicionada com sucesso. | `Regression` |
| **CT015** | Editar registro em Especialidades | Autenticado na aba Especialidades. | 1. Clicar no lápis.<br>2. Alterar e salvar. | Especialidade atualizada. | `Regression` |
| **CT016** | Excluir registro em Especialidades | Autenticado na aba Especialidades. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Especialidade excluída da aba. | `Regression` |
| **CT017** | Adicionar registro em Convênios | Autenticado na aba Convênios. | 1. Clicar em "+ Novo registro".<br>2. Preencher e salvar. | Convênio visível na aba Convênios. | `Regression` |
| **CT018** | Editar registro em Convênios | Autenticado na aba Convênios. | 1. Clicar no lápis.<br>2. Alterar e salvar. | Dados do convênio modificados. | `Regression` |
| **CT019** | Excluir registro em Convênios | Autenticado na aba Convênios. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Registro removido de Convênios. | `Regression` |
| **CT020** | Adicionar registro em Salas | Autenticado na aba Salas. | 1. Clicar em "+ Novo registro".<br>2. Preencher e salvar. | Sala salva e visível na aba Salas. | `Regression` |
| **CT021** | Editar registro em Salas | Autenticado na aba Salas. | 1. Clicar no lápis.<br>2. Alterar e salvar. | Dados da sala atualizados. | `Regression` |
| **CT022** | Excluir registro em Salas | Autenticado na aba Salas. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Sala excluída da listagem. | `Regression` |
| **CT023** | Adicionar em Agenda profissional | Autenticado na aba Agenda profissional. | 1. Clicar em "+ Novo registro".<br>2. Preencher e salvar. | Agenda profissional inserida. | `Sanity` `Regression` |
| **CT024** | Editar em Agenda profissional | Autenticado na aba Agenda profissional. | 1. Clicar no lápis.<br>2. Modificar e salvar. | Dados da agenda atualizados. | `Sanity` `Regression` |
| **CT025** | Excluir em Agenda profissional | Autenticado na aba Agenda profissional. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Registro de agenda excluído. | `Sanity` `Regression` |
| **CT026** | Adicionar registro em Agendamentos | Autenticado na aba Agendamentos. | 1. Clicar em "+ Novo registro".<br>2. Preencher e salvar. | Agendamento inserido com sucesso. | `Smoke` `Sanity` `Regression` |
| **CT027** | Editar registro em Agendamentos | Autenticado na aba Agendamentos. | 1. Clicar no lápis.<br>2. Modificar e salvar. | Agendamento alterado com sucesso. | `Sanity` `Regression` |
| **CT028** | Excluir registro em Agendamentos | Autenticado na aba Agendamentos. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Agendamento removido da lista. | `Sanity` `Regression` |
| **CT029** | Adicionar registro em Reagendamentos | Autenticado na aba Reagendamentos. | 1. Clicar em "+ Novo registro".<br>2. Preencher e salvar. | Reagendamento salvo com sucesso. | `Regression` |
| **CT030** | Editar registro em Reagendamentos | Autenticado na aba Reagendamentos. | 1. Clicar no lápis.<br>2. Alterar e salvar. | Dados de reagendamento alterados. | `Regression` |
| **CT031** | Excluir registro em Reagendamentos | Autenticado na aba Reagendamentos. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Reagendamento removido da lista. | `Regression` |
| **CT032** | Adicionar em Check-in e presença | Autenticado em Check-in e presença. | 1. Clicar em "+ Novo registro".<br>2. Preencher e salvar. | Registro de presença visível. | `Sanity` `Regression` |
| **CT033** | Editar em Check-in e presença | Autenticado em Check-in e presença. | 1. Clicar no lápis.<br>2. Alterar e salvar. | Registro de presença modificado. | `Sanity` `Regression` |
| **CT034** | Excluir em Check-in e presença | Autenticado em Check-in e presença. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Registro de presença excluído. | `Sanity` `Regression` |
| **CT035** | Adicionar registro em Prontuários | Autenticado na aba Prontuários. | 1. Clicar em "+ Novo registro".<br>2. Preencher e salvar. | Prontuário cadastrado com sucesso. | `Smoke` `Sanity` `Regression` |
| **CT036** | Editar registro em Prontuários | Autenticado na aba Prontuários. | 1. Clicar no lápis.<br>2. Alterar e salvar. | Dados do prontuário modificados. | `Sanity` `Regression` |
| **CT037** | Excluir registro em Prontuários | Autenticado na aba Prontuários. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Prontuário removido da lista. | `Sanity` `Regression` |
| **CT038** | Adicionar em Evoluções de sessão | Autenticado em Evoluções de sessão. | 1. Clicar em "+ Novo registro".<br>2. Preencher e salvar. | Evolução da sessão cadastrada. | `Sanity` `Regression` |
| **CT039** | Editar em Evoluções de sessão | Autenticado em Evoluções de sessão. | 1. Clicar no lápis.<br>2. Alterar e salvar. | Dados da evolução modificados. | `Sanity` `Regression` |
| **CT040** | Excluir em Evoluções de sessão | Autenticado em Evoluções de sessão. | 1. Clicar no "X".<br>2. Confirmar em "OK". | Evolução removida do sistema. | `Sanity` `Regression` |
| **CT041** | Informações do Relatório financeiro | Autenticado no módulo Financeiro. | 1. Inserir receitas.<br>2. Inserir despesas.<br>3. Checar saldo. | Relatório exibe o saldo consolidado (positivo/negativo). | `Smoke` `Regression` |
