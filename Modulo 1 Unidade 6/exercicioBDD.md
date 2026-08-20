# Atividade Avaliativa - Teste de Software (BDD com Gherkin)

Este repositório contém a entrega da atividade avaliativa de Teste de Software, englobando a especificação de cenários de teste na sintaxe **Gherkin / BDD** para o módulo de **Gestão da Clínica — Psicólogos**.

---

## 📌 Escopo do Projeto & Funcionalidade Escolhida

A funcionalidade testada abrange o fluxo de **Gerenciamento de Registros de Psicólogos**, contemplando tanto a inclusão de novas entradas quanto a edição dos dados cadastrais.

---

## 🚀 Funcionalidade 1: Adicionar Registro em Psicólogos

### Descrição do Caso de Teste
* **Objetivo:** Validar se o sistema permite adicionar e gravar um novo registro de psicólogo no banco de dados e exibi-lo na aba Psicólogos.
* **Pré-condição:** Estar autenticado na plataforma e navegado até a aba "Psicólogos".

```gherkin
# language: pt

Funcionalidade: Cadastro de Psicólogos
  Como um administrador da clínica
  Eu quero cadastrar novos psicólogos
  Para que eles possam gerenciar seus atendimentos na plataforma

  Cenário: Cadastro de psicólogo com sucesso (Caminho Feliz)
    Given que o usuário está autenticado e na aba "Psicólogos"
    When clicar no botão "+ Novo registro"
    And preencher os campos "Nome completo", "CRP", "Especialidade" e "Telefone" com dados válidos
    And clicar no botão "Salvar registro"
    Then o registro deve ser gravado no banco de dados
    And o novo psicólogo deve ser exibido na lista da aba "Psicólogos"

  Cenário: Tentativa de cadastro com campos obrigatórios vazios (Caminho Alternativo)
    Given que o usuário está autenticado e na aba "Psicólogos"
    When clicar no botão "+ Novo registro"
    And clicar no botão "Salvar registro" sem preencher os campos
    Then o sistema deve exibir mensagens de alerta nos campos obrigatórios
    But o registro não deve ser gravado no banco de dados
```

---

## ✏️ Funcionalidade 2: Editar Registro em Psicólogos

### Descrição do Caso de Teste
* **Objetivo:** Validar a alteração e atualização dos dados de um psicólogo cadastrado com sucesso.
* **Pré-condição:** Estar autenticado no sistema e ter navegado até a aba "Psicólogos" contendo registros já cadastrados.

```gherkin
# language: pt

Funcionalidade: Edição de Registro de Psicólogos
  Como um administrador da clínica
  Eu quero alterar os dados de um psicólogo cadastrado
  Para manter as informações atualizadas no sistema

  Cenário: Editar dados com sucesso (Caminho Feliz)
    Given que o usuário está autenticado no sistema como "Administrador"
    And navega até a aba "Psicólogos" com registros cadastrados
    When seleciona a opção de editar um registro existente
    And altera os campos com informações válidas
    And clica no botão "Salvar registro"
    Then o sistema deve salvar as alterações efetuadas
    And exibir a mensagem "Registro atualizado com sucesso"

  Cenário: Cancelar a edição sem salvar as alterações (Caminho Alternativo)
    Given que o usuário está autenticado no sistema como "Administrador"
    And navega até a aba "Psicólogos" com registros cadastrados
    When seleciona a opção de editar um registro existente
    And altera os campos do formulário
    And clica no botão "Cancelar"
    Then o sistema deve retornar para a aba "Psicólogos"
    But nenhuma alteração realizada deve ser salva no banco de dados
```

---

## 🛠️ Tecnologias & Conceitos Aplicados
* **BDD (Behavior-Driven Development):** Especificação por meio de cenários de comportamento.
* **Gherkin Syntax:** Linguagem estruturada utilizando as palavras-chave `Given`, `When`, `Then`, `And` e `But`.
* **Zephyr / Jira:** Mapeamento e gestão dos casos de teste.
