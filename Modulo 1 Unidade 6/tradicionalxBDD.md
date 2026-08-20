# Atividade Avaliativa: Comparação de Abordagens de Teste (BDD vs. Tradicional)

Este repositório contém o estudo comparativo de modelagem de casos de teste utilizando duas abordagens distintas: **BDD (Behavior-Driven Development / Gherkin)** e **Caso de Teste Tradicional (Passo a Passo)**, aplicado às funcionalidades do módulo de Gestão de Psicólogos.

---

## 🎯 Objetivo

Comparar como o mesmo comportamento de um sistema pode ser representado através de linguagens e estruturas diferentes, analisando facilidade de escrita, capacidade de comunicação e manutenibilidade.

---

## 🧪 Cenários de Teste

### Funcionalidade: Adicionar Registro em Psicólogos

#### 1. Abordagem BDD (Gherkin Script)

```gherkin
Cenário: Adicionar novo registro de psicólogo com sucesso
  Dado que o usuário está autenticado no sistema e na aba "Psicólogos"
  Quando clicar no botão "+ Novo registro"
  E preencher os dados do psicólogo com informações válidas
  E salvar o registro
  Então o registro deve ser gravado no banco de dados
  E o novo psicólogo deve ser exibido na lista da aba "Psicólogos"
```

---

#### 2. Abordagem Tradicional (Passo a Passo)

* **Título:** Cadastro de Novo Psicólogo com sucesso
* **Pré-condições:** Usuário autenticado no sistema e navegação realizada até a aba "Psicólogos".
* **Passos de Execução:**
  1. Clicar no botão "+ Novo registro".
  2. Preencher os campos obrigatórios (*Nome*, *CRP*, *Especialidade*, *Telefone*) com dados válidos.
  3. Clicar no botão "Salvar".
* **Resultado Esperado:** O registro é gravado com sucesso no banco de dados e o cadastro do novo psicólogo aparece listado na tabela da aba "Psicólogos".

---

## 📊 Análise Comparativa

### 🟢 1. Qual o formato mais fácil de escrever?
> **Resposta:** **Caso de Teste Tradicional.**
> 
> A estrutura tradicional em formato de roteiro (Passos + Resultado Esperado) possui uma curva de aprendizado menor. Não exige a adequação a palavras-chave restritas (`Dado`, `Quando`, `Então`), permitindo que qualquer analista de testes ou stakeholder elabore cenários rapidamente sem treinamento prévio no padrão Gherkin.

### 💬 2. Qual comunica melhor o comportamento?
> **Resposta:** **BDD (Gherkin).**
> 
> O BDD expressa claramente o fluxo de valor do negócio ao estruturar o contexto prévio (**Dado**), o evento gatilho (**Quando**) e a consequência observável (**Então**). Esse padrão cria uma ponte de comunicação direta entre membros técnicos (Devs/QAs) e não técnicos (POs/Stakeholders), funcionando como uma documentação viva do sistema.

### 🛠️ 3. Qual seria mais fácil de manter?
> **Resposta:** **BDD (Gherkin).**
> 
> Por focar na intenção funcional do comportamento e não na interação de baixo nível com a interface do usuário, o BDD é menos suscetível a quebras por pequenas mudanças operacionais de UI. Além disso, em contextos de automação de testes, os *step definitions* (passos de teste) são altamente reutilizáveis em diversos cenários, diminuindo consideravelmente o esforço de manutenção contínua.

---

## 📌 Conclusão

Embora o formato **Tradicional** seja de rápida elaboração para testes manuais imediatos, o **BDD** demonstra maior eficiência no longo prazo por promover o alinhamento da equipe quanto às regras de negócio, facilitar o reaproveitamento de código em testes automatizados e reduzir o custo de manutenção.
