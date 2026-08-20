# Atividade Avaliativa - Teste de Software (BDD com Gherkin)

Este repositório contém a entrega da atividade avaliativa da disciplina de **Teste de Software**, apresentando a especificação detalhada de cenários de teste na sintaxe **Gherkin / BDD** direcionados ao módulo de **Gestão da Clínica — Psicólogos**.

---

## 📌 Escopo do Projeto & Funcionalidade Escolhida

A funcionalidade abordada contempla o fluxo completo de **Gerenciamento de Registros de Psicólogos**, cobrindo os cenários de inclusão de novos profissionais e edição de dados cadastrais existentes.

---

## 📋 Checklist Mental ao Escrever Gherkin

Na construção e revisão dos cenários de teste apresentados neste repositório, adotou-se o seguinte checklist de boas práticas para garantir a qualidade das especificações BDD:

- [x] **Está na terceira pessoa?** (Evita o uso de primeira pessoa no corpo do cenário)
- [x] **Um comportamento por cenário?** (Mantém o foco em uma única ação/resultado por teste)
- [x] **Ordem lógica respeitada?** (`Dado` / `Quando` / `Então` encadeados adequadamente)
- [x] **Linguagem de negócio?** (Foco nas regras de negócio e no comportamento do usuário, sem termos de implementação técnica)
- [x] **Leitura clara e natural?** (Escrita legível e acessível para toda a equipe)

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

* **BDD (Behavior-Driven Development):** Especificação e validação de requisitos focados no comportamento do sistema.
* **Sintaxe Gherkin:** Estruturação padronizada utilizando as palavras-chave `Given` (Dado), `When` (Quando), `Then` (Então), `And` (E) e `But` (Mas).
* **Gestão de Testes:** Estrutura pronta para mapeamento em ferramentas como Zephyr / Jira.
