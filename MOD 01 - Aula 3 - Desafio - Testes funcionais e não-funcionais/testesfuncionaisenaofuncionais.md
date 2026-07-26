# Desafio - Testes funcionais e não-funcionais : Clínica Psi 

# 📋 Divisão das Atividades

## Parte 1 — Exercícios

| Atividade        | Responsável                      |
| ---------------- | -------------------------------- |
| Exercícios 1 e 2 | Jefferson Santino Ribeiro        |
| Exercício 3      | Paulo Henrique de Barros Brandão |
| Exercício 4      | Claudio Albuquerque Souza Junior |
| Exercício 5      | Rodrigo Gomes Santiago           |
| Exercício 6      | João Alberto                     |

## Parte 2 — Checklist e Relatório

| Atividade                           | Responsável                       |
| ----------------------------------- | --------------------------------- |
| Checklist 1 e 2                     | Alyson Veríssimo dos Prazeres     |
| Checklist 3 e 4                     | José Mário Farias Da Silva Junior |
| Relatórios de Defeitos e Evidências | Jefferson Santino Ribeiro         |

---

## 📑 Índice

## 🧪 Parte 1 — Testes Funcionais

1. [Exercício 1 — Cinco Funcionalidades do Sistema](#exercício-1---cinco-funcionalidades-do-sistema)   
2. [Exercício 2 — Testes Unitários](#exercício-2---testes-unitários) 
3. [Exercício 3 — Testes de Integração](#exercício-3---testes-de-integração) 
4. [Exercício 4 — Testes de Sistema](#exercício-4---testes-de-sistema) 
5. [Exercício 5 — Testes de Aceitação](#exercício-5---testes-de-aceitação) 
6. [Exercício 6 — Classificação dos Testes](#exercício-6---classificação-dos-testes) 

---

## 🔎 Parte 2 — Checklist de Testes Não Funcionais

1. [⚡ Checklist — Performance](#1--checklist--performance)  
2. [🔒 Checklist — Segurança](#2--checklist--segurança) 
3. [👤 Checklist — Usabilidade](#3--checklist--usabilidade) 
4. [💻 Checklist — Compatibilidade](#4--checklist--compatibilidade)

### 🐞 Relatório de Defeitos Encontrados

- [DF-01 — Campo Data aceita valores inválidos](#df-01--campo-data-aceita-valores-inválidos)
- [DF-02 — CPF não possui validação adequada](#df-02--cpf-não-possui-validação-adequada)
- [DF-03 — Telefone aceita caracteres inválidos](#df-03--telefone-aceita-caracteres-inválidos)
- [DF-04 — E-mail aceita formato inválido](#df-04--e-mail-aceita-formato-inválido)
- [DF-05 — Sistema não possui autenticação de usuário](#df-05--sistema-não-possui-autenticação-de-usuário)
- [DF-06 — Prontuários sem controle de acesso](#df-06--prontuários-sem-controle-de-acesso)
- [DF-07 — Gráfico financeiro sem interatividade](#df-07--gráfico-financeiro-sem-interatividade)
- [DF-08 — Gráfico não aparece corretamente na impressão](#df-08--gráfico-não-aparece-corretamente-na-impressão)
- [DF-09 — Atendimento e pagamento não estão integrados](#df-09--atendimento-e-pagamento-não-estão-integrados)
- [DF-10 — Confirmação de agendamento pela recepcionista não implementada](#df-10--confirmação-de-agendamento-pela-recepcionista-não-implementada)
  
### 📊 Resumos

- [Resumo dos Defeitos](#-resumo-dos-defeitos)
- [Resumo do Checklist](#-resumo-do-checklist)
- [Conclusão](#-conclusão)

---


# Parte 1 — Testes funcionais

# Exercício 1 - Cinco Funcionalidades do Sistema

| Nº | Funcionalidade            | Usuário                       | Entrada Principal                            | Resultado Esperado                                        | Possíveis Erros                                                                              |
| -- | ------------------------- | ----------------------------- | -------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1  | **Cadastrar Psicólogo**   | Administrador                 | Nome completo, CRP, especialidade e telefone | Cadastro salvo e exibido na lista de psicólogos           | Campos vazios, CRP inválido, CRP duplicado, telefone inválido ou especialidade não informada |
| 2  | **Relatório Financeiro**  | Administrador / Financeiro    | Receitas e despesas                          | Mostrar receitas, despesas e saldo calculado corretamente | Valor inválido ou cálculo incorreto                                                          |
| 3  | **Cadastro de Pacientes** | Recepcionista / Administrador | Nome, CPF, telefone e e-mail                 | Paciente cadastrado e exibido na tabela de pacientes      | CPF inválido, e-mail inválido ou campos vazios                                               |
| 4  | **Cadastro de Sala**      | Administrador / Recepcionista | Nome, número, capacidade e status            | Sala registrada e exibida na lista de salas               | Campos vazios, número duplicado, capacidade inválida ou status incorreto                     |
| 5  | **Controle de Estoque**   | Administrador / Funcionário   | Produto, quantidade, movimentação e data     | Movimentação registrada e exibida corretamente            | Quantidade inválida ou estoque insuficiente                                                  |

---

# Exercício 2 - Testes Unitários

**Objetivo:** identificar cinco funções ou regras do sistema que deveriam ser verificadas através de testes unitários.

| Nº | Função/Regra                              | Entrada                                      | Resultado Esperado                            | Por que é unitário?                                          |
| -- | ----------------------------------------- | -------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| 1  | **Adicionar um novo paciente**            | Lista existente + `"Ana Clara Souza"`        | Novo registro adicionado à lista de pacientes | Testa apenas a lógica de inclusão de um registro de paciente |
| 2  | **Editar registro de paciente existente** | Telefone antigo + novo telefone              | Registro atualizado com o novo telefone       | Testa apenas a lógica de atualização dos dados do paciente   |
| 3  | **Excluir paciente**                      | Lista com 3 pacientes + excluir paciente `1` | Paciente correspondente removido da lista     | Testa apenas a lógica de exclusão de um paciente             |
| 4  | **Pesquisar paciente pelo nome**          | Pesquisa: `"Mariana"`                        | Retornar `"Mariana Costa"`                    | Testa apenas a lógica responsável pela pesquisa de pacientes |
| 5  | **Calcular total de receitas**            | `R$ 450,00 + R$ 1.250,00`                    | `R$ 1.700,00`                                 | Testa somente a lógica responsável pela soma das receitas    |


---

 # Exercício 3 - Testes de Integração

## 1 - Cadastro de paciente integrado ao banco de dados

**Componentes integrados:**
Cadastro de paciente + Banco de dados

**Ação:**
Cadastro de um novo paciente.

**Resultado esperado:**
Dados do paciente armazenados corretamente no banco de dados.

**Risco:**
Falha na gravação dos dados, impedindo o cadastro ou gerando informações inconsistentes.

---

## 2 - Compra de produto integrada ao estoque

**Componentes integrados:**
Compra de Produto + Estoque (Banco de dados)

**Ação:**
Compra do produto e atualização da quantidade disponível no estoque.

**Resultado esperado:**
Compra realizada com sucesso e estoque atualizado corretamente.

**Risco:**
Falha na comunicação com o estoque, causando divergência na quantidade de produtos disponíveis.

---

## 3 - Receita e despesa integradas ao relatório financeiro

**Componentes integrados:**
Receitas e Despesas + Relatório Financeiro

**Ação:**
O usuário cadastra uma receita e uma despesa.

**Resultado esperado:**
As informações de gastos e receitas são enviadas ao relatório financeiro e exibidas corretamente.

**Risco:**
O sistema pode não cadastrar ou não apresentar todas as informações inseridas pelo usuário, causando divergências no relatório financeiro.

---

## 4 - Reagendamento integrado à liberação do horário anterior

**Componentes integrados:**
Agendamento + Agenda

**Ação:**
O usuário seleciona um novo horário disponível para o reagendamento da consulta.

**Resultado esperado:**
O novo horário é reservado e o horário anterior é liberado corretamente.

**Risco:**
Falha no processo de reagendamento, mantendo o horário antigo bloqueado ou causando conflito de horários.

---

## 5 - Agendamento integrado à agenda do psicólogo

**Componentes integrados:**
Agendamento + Agenda do psicólogo

**Ação:**
O paciente escolhe um horário disponível para realizar a consulta com o psicólogo.

**Resultado esperado:**
Agendamento concluído com sucesso e horário registrado como ocupado na agenda do psicólogo.

**Risco:**
Falha na comunicação entre o agendamento e a agenda do psicólogo, permitindo conflitos de horários ou perda de informações da consulta.

---

# Tabela Resumida dos Testes de Integração

| Nº | Teste de Integração      | Componentes Integrados                     | Ação                                    | Resultado Esperado                               | Risco                                                       |
| -- | ------------------------ | ------------------------------------------ | --------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------- |
| 1  | Cadastro de paciente     | Cadastro de paciente + Banco de dados      | Cadastrar um novo paciente              | Dados armazenados corretamente no banco de dados | Falha na gravação ou dados inconsistentes                   |
| 2  | Compra de produto        | Compra de Produto + Estoque                | Realizar a compra e atualizar o estoque | Compra concluída e estoque atualizado            | Divergência na quantidade disponível                        |
| 3  | Receita e despesa        | Receitas e Despesas + Relatório Financeiro | Cadastrar receita e despesa             | Valores exibidos corretamente no relatório       | Informações ausentes ou divergentes                         |
| 4  | Reagendamento            | Agendamento + Agenda                       | Selecionar um novo horário              | Novo horário reservado e antigo liberado         | Horário antigo permanecer bloqueado ou conflito de horários |
| 5  | Agendamento do psicólogo | Agendamento + Agenda do psicólogo          | Escolher um horário disponível          | Horário registrado como ocupado                  | Conflito de horários ou perda de informações                |

---

# Exercício 4 - Testes de Sistema

## Objetivo

Realizar testes de sistema por meio da interface da aplicação **Clínica Psi**, simulando fluxos executados pelo usuário final.


---

# Cenário A — Atendimento Completo

## Pré-condições

* Sistema disponível.
* Usuário autenticado.
* Não existir paciente com o mesmo CPF.

## Dados utilizados

| Campo     | Valor          |
| --------- | -------------- |
| Nome      | Maria da Silva |
| CPF       | 123.456.789-00 |
| Psicólogo | João Pereira   |
| Data      | 25/07/2026     |
| Horário   | 09:00          |

## Passos

1. Cadastrar um paciente.
2. Localizar o paciente pela pesquisa.
3. Realizar um agendamento.
4. Fazer o check-in.
5. Registrar a evolução da sessão.
6. Lançar a receita.
7. Conferir o relatório financeiro.

## Resultado esperado

* Paciente cadastrado com sucesso.
* Pesquisa retorna o paciente.
* Agendamento criado.
* Check-in realizado.
* Evolução registrada.
* Receita salva.
* Atendimento aparece no relatório financeiro.

## Resultado obtido

Todos os passos foram executados corretamente pelo sistema.

## Situação

✅ **Aprovado**

## Evidência

Capturas de tela do cadastro, agendamento, check-in, evolução, receita e relatório financeiro.

## Justificativa

O sistema executou todo o fluxo de atendimento sem apresentar erros.

---

# Cenário B — Reagendamento

## Pré-condições

* Paciente cadastrado.
* Consulta previamente agendada.

## Dados utilizados

| Campo            | Valor              |
| ---------------- | ------------------ |
| Paciente         | Maria da Silva     |
| Horário anterior | 25/07/2026 - 09:00 |
| Novo horário     | 25/07/2026 - 10:00 |

## Passos

1. Criar um agendamento.
2. Reagendar a consulta.
3. Verificar a liberação do horário anterior.
4. Verificar a ocupação do novo horário.
5. Conferir os dados apresentados na agenda.

## Resultado esperado

* Consulta reagendada.
* Horário antigo disponível novamente.
* Novo horário ocupado.
* Agenda atualizada corretamente.

## Resultado obtido

O reagendamento foi realizado conforme esperado.

## Situação

✅ **Aprovado**

## Evidência

Capturas de tela da agenda antes e depois do reagendamento.

## Justificativa

A agenda foi atualizada corretamente e os horários refletiram a alteração.

---

# Cenário C — Controle de Estoque

## Pré-condições

* Usuário com permissão para gerenciar estoque.

## Dados utilizados

| Campo          | Valor              |
| -------------- | ------------------ |
| Produto        | Luvas descartáveis |
| Entrada        | 100 unidades       |
| Saída          | 20 unidades        |
| Estoque mínimo | 30 unidades        |

## Passos

1. Cadastrar um produto.
2. Registrar uma entrada.
3. Registrar uma saída.
4. Verificar a quantidade final.
5. Verificar o alerta de estoque mínimo.

## Resultado esperado

* Produto cadastrado.
* Entrada registrada.
* Saída registrada.
* Estoque final igual a **80 unidades**.
* Alerta exibido apenas quando atingir o estoque mínimo.

## Resultado obtido

O sistema atualizou corretamente a quantidade disponível.

## Situação

✅ **Aprovado**

## Evidência

Capturas de tela do cadastro do produto e da movimentação de estoque.

## Justificativa

O sistema realizou corretamente os cálculos e atualizou o estoque.

---

# Cenário D — Controle de Acesso

## Pré-condições

Existirem dois usuários cadastrados:

* Recepcionista.
* Psicólogo.

## Dados utilizados

| Perfil        | Permissão                     |
| ------------- | ----------------------------- |
| Recepcionista | Agenda e cadastro             |
| Psicólogo     | Agenda, prontuário e evolução |

## Passos

1. Criar perfis com diferentes permissões.
2. Entrar como recepcionista.
3. Tentar acessar prontuários.
4. Entrar como psicólogo.
5. Verificar se o acesso autorizado funciona.

## Resultado esperado

* Recepcionista não acessa prontuários.
* Psicólogo acessa normalmente.
* Sistema respeita as permissões dos perfis.

## Resultado obtido

As permissões foram aplicadas conforme esperado.

## Situação

✅ **Aprovado**

## Evidência

Capturas de tela dos acessos com cada perfil.

## Justificativa

O controle de acesso protegeu corretamente as funcionalidades restritas.

---

# Resumo dos Testes de Sistema

| Cenário                      | Funcionalidade Testada                                           | Resultado Esperado                             | Situação   |
| ---------------------------- | ---------------------------------------------------------------- | ---------------------------------------------- | ---------- |
| **A — Atendimento Completo** | Cadastro, pesquisa, agendamento, check-in, evolução e financeiro | Fluxo completo executado corretamente          | ✅ Aprovado |
| **B — Reagendamento**        | Alteração de data/horário da consulta                            | Horário antigo liberado e novo horário ocupado | ✅ Aprovado |
| **C — Controle de Estoque**  | Entrada e saída de produtos                                      | Estoque atualizado corretamente                | ✅ Aprovado |
| **D — Controle de Acesso**   | Permissões de recepcionista e psicólogo                          | Cada perfil acessa apenas funções permitidas   | ✅ Aprovado |

---

# Conclusão

Os testes de sistema permitiram validar os principais fluxos da aplicação **Clínica Psi** por meio da interface do usuário.

Em todos os cenários executados, o sistema apresentou o comportamento esperado, atendendo aos requisitos funcionais avaliados.

Os resultados obtidos demonstram que as funcionalidades testadas estão operando corretamente e oferecem suporte adequado às atividades da clínica.


---

#  Exercício 5 - Testes de Aceitação

## 🎯 Objetivo

Elaborar critérios de aceitação para verificar se o sistema **Clínica Psi** atende às necessidades da clínica e de seus usuários.

Os critérios foram escritos utilizando o formato:

* **Dado que...**
* **Quando...**
* **Então...**

---

## ✅ Critério de Aceitação 1 — Cadastro de Paciente

**Dado que** a recepcionista esteja utilizando o módulo de pacientes,

**Quando** preencher todos os campos obrigatórios e clicar em **Salvar registro**,

**Então** o sistema deverá cadastrar o paciente e exibi-lo na lista de pacientes.

### Justificativa

Esse teste verifica se a clínica consegue realizar uma das atividades básicas do sistema, que é cadastrar novos pacientes.

---

## ✅ Critério de Aceitação 2 — Pesquisa de Paciente

**Dado que** existam pacientes cadastrados no sistema,

**Quando** o usuário pesquisar pelo nome ou CPF de um paciente,

**Então** o sistema deverá apresentar o paciente correspondente à pesquisa.

### Justificativa

Esse teste verifica se o usuário consegue localizar rapidamente um paciente cadastrado para consultar ou atualizar seus dados.

---

## ✅ Critério de Aceitação 3 — Realizar Agendamento

**Dado que** o paciente e o psicólogo estejam cadastrados no sistema,

**Quando** a recepcionista informar o paciente, psicólogo, data, horário e status da consulta,

**Então** o sistema deverá registrar o agendamento e apresentá-lo na lista de agendamentos.

### Justificativa

Esse teste verifica se a clínica consegue organizar corretamente os atendimentos dos pacientes.

---

## ✅ Critério de Aceitação 4 — Impedir Conflito de Horário

**Dado que** um psicólogo já possua uma consulta marcada para determinada data e horário,

**Quando** a recepcionista tentar cadastrar outro atendimento para o mesmo psicólogo no mesmo horário,

**Então** o sistema deverá impedir o novo agendamento e informar que o horário está ocupado.

### Justificativa

Esse teste verifica uma importante regra de negócio da clínica, evitando que o mesmo psicólogo tenha duas consultas marcadas no mesmo horário.

> ⚠️ **Observação:** Essa regra é importante para o funcionamento da clínica e pode ser considerada uma melhoria caso ainda não esteja implementada no sistema.

---

## ✅ Critério de Aceitação 5 — Atualização do Relatório Financeiro

**Dado que** a clínica tenha receitas ou despesas para registrar,

**Quando** um novo lançamento financeiro for salvo,

**Então** o sistema deverá atualizar os valores de receitas, despesas e saldo.

### Justificativa

Esse teste verifica se a clínica consegue acompanhar corretamente sua situação financeira após realizar novos lançamentos.

---

## ✅ Critério de Aceitação 6 — Registro de Prontuário

**Dado que** o paciente esteja cadastrado no sistema,

**Quando** o profissional preencher as informações do prontuário e salvar o registro,

**Então** o sistema deverá armazenar e apresentar o prontuário na área correspondente.

### Justificativa

Esse teste verifica se as informações importantes relacionadas ao acompanhamento do paciente podem ser registradas corretamente.

---

## ✅ Critério de Aceitação 7 — Alerta de Estoque Baixo

**Dado que** exista um produto cadastrado com uma quantidade mínima de estoque definida,

**Quando** a quantidade disponível atingir ou ficar abaixo do estoque mínimo,

**Então** o sistema deverá alertar que o produto necessita de reposição.

### Justificativa

Esse teste verifica se a clínica consegue identificar materiais que estão acabando antes que eles fiquem indisponíveis.

> ⚠️ **Observação:** Caso essa validação ainda não esteja implementada automaticamente, ela pode ser registrada como uma melhoria do sistema.

---

## ✅ Critério de Aceitação 8 — Preservação dos Dados

**Dado que** o usuário tenha cadastrado informações no sistema,

**Quando** fechar a página e acessar novamente utilizando o mesmo navegador,

**Então** os registros deverão continuar disponíveis.

### Justificativa

Esse teste verifica se os dados cadastrados permanecem armazenados mesmo após o usuário sair do sistema.

---

# 📋 Resumo dos Critérios de Aceitação

| Nº | Critério               | Dado que...                                       | Quando...                                   | Então...                                       |
| -- | ---------------------- | ------------------------------------------------- | ------------------------------------------- | ---------------------------------------------- |
| 1  | Cadastro de paciente   | O usuário esteja no módulo de pacientes           | Preencher os dados e salvar                 | O paciente deverá aparecer na lista            |
| 2  | Pesquisa de paciente   | Existam pacientes cadastrados                     | Pesquisar por nome ou CPF                   | O paciente correspondente deverá ser exibido   |
| 3  | Agendamento            | Paciente e psicólogo estejam cadastrados          | Informar data, horário e demais informações | A consulta deverá ser registrada               |
| 4  | Conflito de horário    | O psicólogo já tenha uma consulta naquele horário | Tentar marcar outra consulta                | O sistema deverá impedir o novo agendamento    |
| 5  | Relatório financeiro   | Existam receitas ou despesas                      | Realizar um novo lançamento                 | Os valores financeiros deverão ser atualizados |
| 6  | Prontuário             | O paciente esteja cadastrado                      | Registrar informações no prontuário         | O prontuário deverá ser salvo                  |
| 7  | Estoque mínimo         | Um produto possua estoque mínimo                  | A quantidade atingir o limite               | O sistema deverá alertar sobre a reposição     |
| 8  | Persistência dos dados | Existam registros salvos                          | Fechar e abrir o sistema novamente          | Os registros deverão continuar disponíveis     |

---

# 📝 Justificativa Geral

Os **testes de aceitação** verificam se o sistema atende às necessidades reais da clínica e de seus usuários.

Diferentemente dos testes unitários, que verificam pequenas partes do código de forma isolada, os testes de aceitação analisam as funcionalidades do ponto de vista do **cliente, da empresa ou do usuário final**.

No sistema **Clínica Psi**, é importante verificar se os usuários conseguem realizar atividades como:

* cadastrar pacientes;
* pesquisar pacientes;
* realizar agendamentos;
* evitar conflitos de horários;
* registrar prontuários;
* controlar receitas e despesas;
* acompanhar o estoque;
* preservar os dados cadastrados.

Portanto, o teste de aceitação ajuda a verificar se o sistema realmente atende às necessidades do negócio e se pode ser considerado **aprovado pelo cliente ou pelo usuário responsável**.


----

# Exercício 6 - Classificação dos Testes

#  Relatório de Execução dos Casos de Teste

## Caso 1 — Registro e Validação de Dados

**Status:** ⚠️ Passou com ressalvas / Bug encontrado

### Descrição

* O sistema retorna o valor esperado após o registro.
* A validação de campos obrigatórios funciona corretamente ao deixar os inputs em branco.

### 🐞 Defeito Encontrado

A validação do campo **Data** apresenta falha.

O sistema permite a inserção de qualquer formato de dado, incluindo:

* texto;
* letras;
* números inválidos;
* apenas um dígito.

Isso pode permitir o cadastro de datas incorretas no sistema.

---

## Caso 2 — Relatório Financeiro e Gráficos

**Status:** ⚠️ Funcionalidade parcial / Problema de UX e Impressão

### Descrição

* O valor financeiro é adicionado ao relatório conforme o esperado.
* Os valores de receitas e despesas são exibidos corretamente na versão impressa.

### 🐞 Defeitos Encontrados

#### Interface — UX

O gráfico exibido no relatório funciona apenas como uma imagem estática.

Não existe suporte para:

* passar o mouse sobre o gráfico;
* clicar nos elementos;
* visualizar os valores detalhados;
* consultar receitas e despesas de cada mês diretamente pelo gráfico.

#### Impressão

O gráfico não é renderizado no momento da impressão do relatório.

---

## Caso 3 — Cadastro de Pacientes, Atendimento e Pagamento

**Status:** ⚠️ Incompleto

### Descrição

O cadastro básico do paciente é executado com sucesso.

### 🐞 Defeito Encontrado

O sistema não possui integradas as opções de:

* Atendimento;
* Pagamento.

Dessa forma, não é possível concluir todo o fluxo esperado a partir do cadastro do paciente.

---

## Caso 4 — Funcionalidade Ausente

**Status:** ❌ Não executado — Funcionalidade não encontrada

### Descrição

A opção especificada no escopo do teste não foi encontrada na interface do sistema.

Por esse motivo, não foi possível realizar a execução do caso de teste.

---

## Caso 5 — Validação de Inputs de Contato e Documentos

**Campos avaliados:**

* CPF;
* E-mail;
* Telefone.

**Status:** ❌ Reprovado — Falha grave de validação

### Descrição

Foi identificada ausência de máscaras e validações adequadas na área de cadastro de pacientes.

### 🐞 Defeito Encontrado

O sistema aceita qualquer tipo de caractere nos campos:

* CPF;
* Telefone;
* E-mail.

Isso permite o cadastro de informações inválidas no sistema.

### Exemplos de problemas

* CPF contendo letras;
* telefone contendo caracteres inválidos;
* e-mail sem formato válido;
* quantidade incorreta de dígitos no CPF;
* quantidade incorreta de números no telefone.

---

## Caso 6 — Reagendamento de Consultas

**Status:** ✅ Aprovado

### Descrição

O fluxo de reagendamento funciona corretamente.

Os novos dados são atualizados e refletidos adequadamente na interface do sistema.

O comportamento observado corresponde ao resultado esperado.

---

## Caso 7 — Gestão e Alteração de Tipos de Conta

**Status:** 🚫 Bloqueado / Não testável

### Descrição

O código-fonte e a versão disponibilizada por meio do GitHub não permitem:

* escolher o tipo de conta;
* visualizar o usuário atualmente logado;
* alterar o perfil de acesso do usuário.

### Conclusão

O teste foi **inviabilizado pelas limitações do ambiente fornecido**.

Não foi possível validar o comportamento esperado dessa funcionalidade.

---

## Caso 8 — Confirmação de Agendamento por Recepcionista

**Status:** ❌ Não implementado

### Descrição

A funcionalidade de confirmação de consulta pela recepcionista não existe atualmente no módulo de agendamento do sistema.

Dessa forma, não foi possível executar completamente o fluxo previsto para esse caso de teste.

---

# 📊 Resumo dos Resultados

| Caso   | Funcionalidade                       | Status                    |
| ------ | ------------------------------------ | ------------------------- |
| Caso 1 | Registro e validação de dados        | ⚠️ Passou com ressalvas   |
| Caso 2 | Relatório financeiro e gráficos      | ⚠️ Funcionalidade parcial |
| Caso 3 | Cadastro, atendimento e pagamento    | ⚠️ Incompleto             |
| Caso 4 | Funcionalidade especificada no teste | ❌ Não executado           |
| Caso 5 | Validação de CPF, e-mail e telefone  | ❌ Reprovado               |
| Caso 6 | Reagendamento de consultas           | ✅ Aprovado                |
| Caso 7 | Tipos de conta e usuário logado      | 🚫 Bloqueado              |
| Caso 8 | Confirmação por recepcionista        | ❌ Não implementado        |

---

# 📝 Conclusão Geral

Durante a execução dos testes foram encontradas funcionalidades que operam corretamente, como o **reagendamento de consultas**, porém também foram identificados problemas importantes relacionados à validação de dados, usabilidade, impressão e ausência de funcionalidades.

Os principais pontos de atenção encontrados foram:

* falta de validação adequada do campo de data;
* ausência de máscaras e validações para CPF, telefone e e-mail;
* gráfico financeiro sem interatividade;
* gráfico não exibido na impressão;
* ausência de integração entre atendimento e pagamento;
* ausência de gerenciamento de tipos de conta;
* ausência da confirmação de agendamento pela recepcionista.

Esses problemas devem ser registrados como **bugs, limitações ou melhorias**, para que possam ser avaliados e corrigidos em versões futuras do sistema.

---

# 🧪 Parte 2 — Checklist de Testes Não Funcionais


# 1. ⚡ Checklist — Performance

| Categoria   | O que verificar                      | Como verificar                                                                 | Critério esperado                                                                   | Risco associado                                               | Prioridade |
| ----------- | ------------------------------------ | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------- |
| Performance | Tempo de carregamento inicial        | Abrir o sistema e verificar o tempo de carregamento pelo DevTools do navegador | A página principal deve carregar em até 3 segundos em uma conexão estável           | Lentidão pode prejudicar o atendimento na recepção            | 🔴 Alta    |
| Performance | Velocidade da pesquisa de pacientes  | Cadastrar vários pacientes e realizar pesquisas pelo campo de busca            | O resultado deve ser apresentado em até 1 segundo                                   | Lentidão para localizar pacientes durante o atendimento       | 🔴 Alta    |
| Performance | Cadastro de novos registros          | Preencher e salvar pacientes, psicólogos ou agendamentos                       | O registro deve ser salvo e exibido sem travamentos perceptíveis                    | Atraso no atendimento e possibilidade de cadastros duplicados | 🔴 Alta    |
| Performance | Desempenho com muitos registros      | Criar grande quantidade de pacientes e agendamentos e navegar pelas telas      | O sistema deve continuar responsivo e sem travamentos                               | Queda de desempenho com o crescimento da base de dados        | 🟡 Média   |
| Performance | Carregamento do relatório financeiro | Cadastrar várias receitas e despesas e abrir o relatório financeiro            | Totais e gráfico devem ser apresentados rapidamente e sem congelamento da interface | Dificuldade para consultar dados financeiros                  | 🟡 Média   |

---

# 2. 🔒 Checklist — Segurança

| Categoria | O que verificar                             | Como verificar                                                                    | Critério esperado                                                           | Risco associado                                            | Prioridade |
| --------- | ------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------- |
| Segurança | Acesso ao sistema sem autenticação          | Abrir diretamente a URL da aplicação                                              | O sistema deveria solicitar autenticação antes de permitir acesso aos dados | Pessoas não autorizadas podem acessar dados da clínica     | 🔴 Alta    |
| Segurança | Restrição de acesso aos prontuários         | Tentar acessar o módulo de prontuários sem possuir perfil de psicólogo autorizado | Apenas usuários autorizados deveriam acessar informações clínicas           | Exposição de informações confidenciais dos pacientes       | 🔴 Alta    |
| Segurança | Validação de CPF, telefone e e-mail         | Digitar letras, símbolos e formatos inválidos nesses campos                       | O sistema deve impedir dados inválidos e informar o erro                    | Dados inconsistentes podem ser armazenados                 | 🔴 Alta    |
| Segurança | Proteção contra código malicioso nos campos | Inserir texto contendo tags HTML ou scripts em campos de cadastro                 | O conteúdo deve ser tratado como texto e não executado pelo navegador       | Possibilidade de ataque XSS e execução de código malicioso | 🔴 Alta    |
| Segurança | Proteção dos dados armazenados              | Verificar o LocalStorage pelo DevTools do navegador                               | Informações sensíveis não deveriam permanecer expostas em texto simples     | Acesso indevido a dados pessoais e clínicos                | 🔴 Alta    |

---

# 3. 👤 Checklist — Usabilidade

| Categoria   | O que verificar                    | Como verificar                                                  | Critério esperado                                                                         | Risco associado                                                         | Prioridade |
| ----------- | ---------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------- |
| Usabilidade | Facilidade de navegação pelo menu  | Acessar pacientes, psicólogos, agenda, prontuários e financeiro | O usuário deve identificar facilmente onde encontrar cada funcionalidade                  | Usuário pode se perder durante o uso do sistema                         | 🟡 Média   |
| Usabilidade | Mensagem para campos obrigatórios  | Tentar salvar um formulário deixando campos obrigatórios vazios | O sistema deve impedir o cadastro e indicar os campos necessários                         | Usuário pode não entender por que o registro não foi salvo              | 🔴 Alta    |
| Usabilidade | Preenchimento do campo Data        | Digitar letras, data incompleta ou formato incorreto            | O sistema deve aceitar somente uma data válida e apresentar formato adequado              | Cadastro de datas incorretas em consultas e registros                   | 🔴 Alta    |
| Usabilidade | Utilização em dispositivos móveis  | Abrir o sistema em resolução de smartphone e tablet             | Menu, tabelas, formulários e botões devem permanecer legíveis e utilizáveis               | Usuários de dispositivos móveis podem não conseguir operar o sistema    | 🟡 Média   |
| Usabilidade | Visualização do gráfico financeiro | Passar o mouse e clicar nas informações do gráfico              | O gráfico deveria apresentar valores ou detalhes de cada período de maneira compreensível | Usuário pode ter dificuldade para interpretar os resultados financeiros | 🟡 Média   |

---

# 4. 💻 Checklist — Compatibilidade

| Categoria       | O que verificar                   | Como verificar                                                                | Critério esperado                                                                   | Risco associado                                                 | Prioridade |
| --------------- | --------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------- |
| Compatibilidade | Funcionamento no Google Chrome    | Executar cadastro, pesquisa, agendamento e relatório utilizando Chrome        | Todas as funcionalidades devem funcionar corretamente                               | Parte dos usuários pode não conseguir utilizar o sistema        | 🔴 Alta    |
| Compatibilidade | Funcionamento no Microsoft Edge   | Repetir os principais fluxos utilizando Edge                                  | O comportamento deve ser equivalente ao Chrome                                      | Diferenças entre navegadores podem causar erros                 | 🟡 Média   |
| Compatibilidade | Funcionamento no Mozilla Firefox  | Repetir cadastro, edição, pesquisa e relatório no Firefox                     | As funções e o layout devem funcionar corretamente                                  | Recursos JavaScript ou CSS podem apresentar diferenças          | 🟡 Média   |
| Compatibilidade | Funcionamento em smartphones      | Testar a aplicação utilizando navegador mobile ou modo responsivo do DevTools | O conteúdo deve se adaptar sem sobreposição ou perda de funcionalidades             | Usuários mobile podem não conseguir utilizar determinadas telas | 🔴 Alta    |
| Compatibilidade | Impressão do relatório financeiro | Utilizar a opção de imprimir relatório em diferentes navegadores              | Valores, títulos e gráfico devem aparecer corretamente na visualização de impressão | Relatórios podem ser impressos incompletos                      | 🔴 Alta    |

---

# 🐞 Relatório de Defeitos Encontrados

## DF-01 — Campo Data aceita valores inválidos

**Categoria:** Usabilidade / Validação
**Severidade:** Alta
**Prioridade:** 🔴 Alta
**Status:** ❌ Reprovado

### Descrição

O campo destinado ao preenchimento de datas permite a inserção de informações fora de um formato válido.

### Passos para reproduzir

1. Acessar uma funcionalidade que possua campo Data.
2. Preencher os demais campos obrigatórios.
3. No campo Data, inserir letras ou apenas um número.
4. Salvar o registro.

### Resultado obtido

O sistema permite que o registro seja realizado com a informação inválida.

### Resultado esperado

O campo deve aceitar somente datas válidas.

### Risco

Podem ser cadastradas consultas, receitas, despesas ou outros registros com datas incorretas.

### Evidência

![Validação de data](./evidencias/EVD-01-data-invalida.png)

---

## DF-02 — CPF não possui validação adequada

**Categoria:** Segurança / Usabilidade
**Severidade:** Alta
**Prioridade:** 🔴 Alta
**Status:** ❌ Reprovado

### Descrição

O campo CPF permite a inserção de letras, caracteres e valores fora do padrão esperado.

### Resultado esperado

O sistema deve permitir somente CPF em formato válido.

### Risco

Cadastro de pacientes com informações incorretas ou inconsistentes.

### Evidência

![Cpf invalido](./evidencias/EVD-02-cpf-invalido.png)

---

## DF-03 — Telefone aceita caracteres inválidos

**Categoria:** Segurança / Usabilidade
**Severidade:** Média
**Prioridade:** 🔴 Alta
**Status:** ❌ Reprovado

### Descrição

O campo telefone não apresenta máscara ou validação suficiente.

### Resultado esperado

O campo deve aceitar somente números válidos e apresentar uma máscara adequada.

Exemplo:

```text
(81) 99999-9999
```

### Risco

A clínica pode armazenar contatos inválidos e não conseguir entrar em contato com o paciente.

### Evidência

![Telefone invalido](./evidencias/EVD-03-telefone-invalido.png)

---

## DF-04 — E-mail aceita formato inválido

**Categoria:** Segurança / Usabilidade
**Severidade:** Média
**Prioridade:** 🔴 Alta
**Status:** ❌ Reprovado

### Descrição

O sistema permite o cadastro de informações que não correspondem ao formato de um e-mail válido.

### Exemplo

```text
jefferson@
```

ou

```text
emailinvalido
```

### Resultado esperado

O sistema deve rejeitar e-mails inválidos.

### Risco

A clínica pode armazenar dados de contato incorretos.

### Evidência

![Email invalido](./evidencias/EVD-04-email-invalido.png)

---

## DF-05 — Sistema não possui autenticação de usuário

**Categoria:** Segurança
**Severidade:** Crítica
**Prioridade:** 🔴 Alta
**Status:** ❌ Não implementado

### Descrição

O sistema pode ser acessado diretamente sem que o usuário informe login e senha.

### Resultado esperado

O usuário deveria autenticar-se antes de acessar informações da clínica.

### Risco

Pessoas não autorizadas podem visualizar ou modificar dados da aplicação.

### Evidência

![Acesso sem login](evidencias/EVD-05-acesso-sem-login.gif)

---

## DF-06 — Prontuários sem controle de acesso

**Categoria:** Segurança
**Severidade:** Crítica
**Prioridade:** 🔴 Alta
**Status:** ❌ Não implementado

### Descrição

Não existe gerenciamento de usuários ou permissões capaz de limitar o acesso aos prontuários.

### Resultado esperado

Somente profissionais autorizados deveriam consultar informações clínicas dos pacientes.

### Risco

Exposição de informações confidenciais.

### Evidência

![Prontuario sem restricao](evidencias/EVD-06-prontuario-sem-restricao.png)

---

## DF-07 — Gráfico financeiro sem interatividade

**Categoria:** Usabilidade
**Severidade:** Baixa
**Prioridade:** 🟡 Média
**Status:** ⚠️ Limitação

### Descrição

O gráfico financeiro é estático e não apresenta valores ao passar o mouse ou clicar nas barras.

### Resultado esperado

O usuário deveria conseguir visualizar informações relacionadas ao período representado no gráfico.

### Risco

Dificuldade para interpretar rapidamente as informações financeiras.

### Evidência

![Grafico sem interacao](evidencias/EVD-07-grafico-sem-interacao.gif) 

---

## DF-08 — Gráfico não aparece corretamente na impressão

**Categoria:** Compatibilidade / Usabilidade
**Severidade:** Média
**Prioridade:** 🔴 Alta
**Status:** ❌ Reprovado

### Descrição

Ao utilizar a opção de impressão do relatório financeiro, o gráfico não é apresentado corretamente.

### Resultado esperado

A versão impressa deveria apresentar:

* receitas;
* despesas;
* saldo;
* gráfico financeiro.

### Risco

Geração de relatórios incompletos para a administração da clínica.

### Evidência

![Impressao sem grafico](evidencias/EVD-08-impressao-sem-grafico.gif)

---

## DF-09 — Atendimento e pagamento não estão integrados

**Categoria:** Usabilidade / Funcionalidade
**Severidade:** Alta
**Prioridade:** 🔴 Alta
**Status:** ⚠️ Funcionalidade incompleta

### Descrição

O cadastro do paciente pode ser realizado, porém não existe um fluxo completo integrado envolvendo atendimento e pagamento.

### Resultado esperado

O sistema deveria permitir que o fluxo do paciente pudesse continuar do atendimento até o registro financeiro correspondente.

### Risco

Necessidade de controles paralelos ou manuais pela clínica.

### Evidência

![Atendimento e pagamento nao integrados](evidencias/EVD-09-atendimento-e-pagamento-nao-estao-integrados.gif)

---

## DF-10 — Confirmação de agendamento pela recepcionista não implementada

**Categoria:** Usabilidade / Funcionalidade
**Severidade:** Média
**Prioridade:** 🟡 Média
**Status:** ❌ Não implementado

### Descrição

Não existe um fluxo específico para a recepcionista confirmar um agendamento.

### Resultado esperado

A recepcionista deveria conseguir confirmar ou alterar o status da consulta de maneira clara.

### Risco

Dificuldade no controle das consultas confirmadas, pendentes ou canceladas.

### Evidência

![Sem fluxo para recepcao confirmar agendamento](evidencias/EVD-10-nao-existe-um-fluxo-especifico-para-a-recepcionista-confirmar-um-agendamento.png)

---

# 📊 Resumo dos Defeitos

| ID    | Defeito                                | Categoria               | Severidade | Prioridade |
| ----- | -------------------------------------- | ----------------------- | ---------- | ---------- |
| DF-01 | Data aceita valores inválidos          | Usabilidade             | Alta       | 🔴 Alta    |
| DF-02 | CPF sem validação                      | Segurança / Usabilidade | Alta       | 🔴 Alta    |
| DF-03 | Telefone sem validação                 | Segurança / Usabilidade | Média      | 🔴 Alta    |
| DF-04 | E-mail sem validação                   | Segurança / Usabilidade | Média      | 🔴 Alta    |
| DF-05 | Ausência de autenticação               | Segurança               | Crítica    | 🔴 Alta    |
| DF-06 | Prontuários sem controle de acesso     | Segurança               | Crítica    | 🔴 Alta    |
| DF-07 | Gráfico financeiro sem interatividade  | Usabilidade             | Baixa      | 🟡 Média   |
| DF-08 | Gráfico ausente na impressão           | Compatibilidade         | Média      | 🔴 Alta    |
| DF-09 | Atendimento e pagamento não integrados | Usabilidade             | Alta       | 🔴 Alta    |
| DF-10 | Confirmação por recepcionista ausente  | Usabilidade             | Média      | 🟡 Média   |

---

# 📈 Resumo do Checklist

| Categoria          |         Quantidade de testes |
| ------------------ | ---------------------------: |
| ⚡ Performance      |                            5 |
| 🔒 Segurança       |                            5 |
| 👤 Usabilidade     |                            5 |
| 💻 Compatibilidade |                            5 |
| **Total**          | **20 testes não funcionais** |

---

# 📝 Conclusão

Os testes não funcionais têm como objetivo verificar características do sistema que vão além do simples funcionamento das funcionalidades.

No sistema **Clínica Psi**, foram avaliados aspectos relacionados à **performance, segurança, usabilidade e compatibilidade**.

Os testes demonstram que o sistema possui funcionalidades importantes para o gerenciamento da clínica, porém existem pontos que precisam de melhorias, principalmente relacionados à segurança e à validação das informações inseridas pelos usuários.

Entre os principais riscos identificados estão a ausência de autenticação e controle de acesso, falta de validação adequada de CPF, telefone, e-mail e data, além de limitações relacionadas à impressão e apresentação dos dados financeiros.

As evidências dos testes devem ser registradas por meio de capturas de tela, permitindo demonstrar tanto os comportamentos corretos quanto os defeitos encontrados durante a execução.

A utilização do checklist permite organizar os testes e indicar claramente **o que foi testado, como o teste foi realizado, qual era o comportamento esperado, o risco envolvido e a prioridade de cada verificação**.

