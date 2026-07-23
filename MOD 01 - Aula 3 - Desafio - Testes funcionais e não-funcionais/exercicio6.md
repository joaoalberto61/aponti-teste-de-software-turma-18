# Relatório de Testes de Software - Exercício 6

Este repositório contém a documentação da execução dos testes de software referentes ao **Exercício 6 (Partes 1 e 2)**, apresentando o mapeamento de comportamentos esperados, falhas e limitações encontradas na aplicação analisada.

---

## 📋 Sumário
- [Visão Geral](#-visão-geral)
- [Exercício 6 - Parte 1: Resultados dos Testes](#-exercício-6---parte-1-resultados-dos-testes)
  - [Caso 1: Registro e Validação de Dados](#caso-1-registro-e-validação-de-dados)
  - [Caso 2: Relatório Financeiro e Gráficos](#caso-2-relatório-financeiro-e-gráficos)
  - [Caso 3: Cadastro de Pacientes, Atendimento e Pagamento](#caso-3-cadastro-de-pacientes-atendimento-e-pagamento)
  - [Caso 4: Funcionalidade Ausente](#caso-4-funcionalidade-ausente)
  - [Caso 5: Validação de Inputs de Contato e Documentos (CPF/E-mail/Telefone)](#caso-5-validação-de-inputs-de-contato-e-documentos-cpf-e-mail-telefone)
  - [Caso 6: Reagendamento de Consultas](#caso-6-reagendamento-de-consultas)
  - [Caso 7: Gestão e Alteração de Tipos de Conta](#caso-7-gestão-e-alteração-de-tipos-de-conta)
  - [Caso 8: Confirmação de Agendamento por Recepcionista](#caso-8-confirmação-de-agendamento-por-recepcionista)
- [Exercício 6 - Parte 2](#-exercício-6---parte-2)
- [🛠️ Ferramentas Utilizadas](#️-ferramentas-utilizadas)
- [📌 Considerações Finais](#-considerações-finais)

---

## 🔎 Visão Geral

O objetivo deste relatório é registrar e categorizar os resultados obtidos durante os testes funcionais do sistema, identificando:
- **Funcionalidades aprovadas** (comportamento de acordo com o esperado).
- **Falhas de validação de dados** (bugs críticos de entrada de dados).
- **Problemas de UX/UI e Impressão**.
- **Funcionalidades não implementadas ou ausentes no ambiente de teste**.

---

## 🧪 Exercício 6 - Parte 1: Resultados dos Testes

### Caso 1: Registro e Validação de Dados
* **Status:** ⚠️ Passou com ressalvas / Bug encontrado
* **Descrição:** 
  * O sistema retorna o valor esperado após o registro.
  * A validação de campos obrigatórios funciona corretamente ao deixar inputs em branco.
* **Defeito Encontrado:** 
  * A validação do campo **Data** apresenta falha: permite inserção de qualquer formato de dado (inclusive texto/letras ou numéricos inválidos como apenas 1 dígito).

---

### Caso 2: Relatório Financeiro e Gráficos
* **Status:** ⚠️ Funcionalidade parcial / Problema de UX e Impressão
* **Descrição:** 
  * O valor financeiro é adicionado ao relatório conforme o esperado.
  * Os valores de receita e despesas são exibidos corretamente na versão impressa.
* **Defeito Encontrado:** 
  * **Interface (UX):** O gráfico exibe apenas uma imagem estática. Não há suporte a *hover* (passar o mouse) ou clique para visualização dos valores detalhados de receitas e despesas do mês.
  * **Impressão:** O gráfico não é renderizado no momento da impressão do relatório.

---

### Caso 3: Cadastro de Pacientes, Atendimento e Pagamento
* **Status:** ⚠️ Incompleto
* **Descrição:** 
  * O cadastro básico do paciente é executado com sucesso.
* **Defeito Encontrado:** 
  * O sistema não possui integradas as opções de **Atendimento** e **Pagamento**.

---

### Caso 4: Funcionalidade Ausente
* **Status:** ❌ Não executado (Funcionalidade não encontrada)
* **Descrição:** 
  * A opção especificada no escopo do teste não foi encontrada na interface do sistema.

---

### Caso 5: Validação de Inputs de Contato e Documentos (CPF/E-mail/Telefone)
* **Status:** ❌ Reprovado (Falha grave de validação)
* **Descrição:** 
  * Ausência total de máscaras e sanitização na área de cadastro de pacientes.
* **Defeito Encontrado:** 
  * O sistema aceita qualquer tipo de caractere nos campos **CPF**, **Telefone** e **E-mail**, permitindo o cadastro de registros inválidos no banco de dados.

---

### Caso 6: Reagendamento de Consultas
* **Status:** ✅ Aprovado
* **Descrição:** 
  * O fluxo de reagendamento funciona corretamente. Os novos dados são atualizados e refletidos adequadamente na interface do sistema.

---

### Caso 7: Gestão e Alteração de Tipos de Conta
* **Status:** 🚫 Bloqueado / Não testável
* **Descrição:** 
  * O código-fonte/versão fornecida via GitHub não permite a escolha do tipo de conta nem a visualização do usuário logado no momento.
  * **Conclusão:** Teste inviabilizado pela limitação do ambiente fornecido.

---

### Caso 8: Confirmação de Agendamento por Recepcionista
* **Status:** ❌ Não implementado
* **Descrição:** 
  * A funcionalidade de confirmação pela recepcionista não existe no módulo de agendamento do sistema.
