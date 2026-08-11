# 🧪 Gestão e Migração de Casos de Teste — Sistema Clin Web

[![QA - Test Management](https://img.shields.io/badge/QA-Test%20Management-blue.svg)](#)
[![Test Cycles](https://img.shields.io/badge/Cycles-Smoke%20%7C%20Sanity%20%7C%20Regression-green.svg)](#)
[![Test Cases](https://img.shields.io/badge/Total%20Test%20Cases-41-orange.svg)](#)

Documentação e estruturação da suíte de testes para o sistema de gestão clínica. Este repositório reflete a migração de casos de teste em formato textual para o padrão estruturado de ferramentas de gerenciamento de testes (como **Jira / Xray**, **TestRail** e **Azure DevOps**), acompanhado da organização em ciclos estratégicos de execução (**Smoke**, **Sanity** e **Regression**).

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