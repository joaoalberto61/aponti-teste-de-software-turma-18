# Atividade Avaliativa — Teste de Software 🧪

Este repositório contém a documentação e elaboração dos casos de teste estruturados para a aplicação de **Gestão da Clínica (Aba Pacientes)**, cobrindo técnicas de teste caixa-preta como **Particionamento de Equivalência**, **Análise do Valor Limite** e **Transição de Estados**.

---

## 📋 Escopo da Aplicação

A aplicação analisada é um sistema web de **Gestão da Clínica**, especificamente a tela de gerenciamento de **Pacientes**, cujas funcionalidades principais incluem:
- Visualização e pesquisa de pacientes cadastrados.
- Inclusão de novo registro de paciente (`+ Novo registro`).
- Edição de dados do paciente (ícone de lápis ✏️).
- Exclusão de registro de paciente (ícone de lixeira/exclusão 🗑️).

---

## 🛠️ Técnicas de Teste Aplicadas

### 1. Particionamento de Equivalência (PE)
Divisão do domínio de entrada em classes de dados válidos e inválidos para garantir a cobertura adequada das entradas com o menor número possível de casos de teste.

| ID | Técnica Utilizada | Pré-condições | Entradas (Input) | Resultado Esperado |
| :--- | :--- | :--- | :--- | :--- |
| **CT-PE01** | Particionamento de Equivalência (Válido) | Autenticado na aba Pacientes | **Nome:** "Carlos Silva"<br>**CPF:** "111.222.333-44"<br>**Telefone:** "(11) 97777-6666"<br>**E-mail:** "carlos@email.com" | Registro salvo no BD e exibido com sucesso na tabela de Pacientes. |
| **CT-PE02** | Particionamento de Equivalência (Inválido) | Autenticado na aba Pacientes | **CPF:** "12345" *(incompleto / formato incorreto)* | O sistema bloqueia a submissão e exibe mensagem de erro de validação do CPF. |
| **CT-PE03** | Particionamento de Equivalência (Inválido) | Autenticado na aba Pacientes | **E-mail:** "email_invalido.com" *(sem o caractere `@`)* | O sistema exibe mensagem de erro informando formato de e-mail inválido. |

---

### 2. Análise do Valor Limite (AVL)
Identificação e teste dos limites extremos das fronteiras das classes de equivalência (mínimo, máximo e fora dos limites).

| ID | Técnica Utilizada | Pré-condições | Entradas (Input) | Resultado Esperado |
| :--- | :--- | :--- | :--- | :--- |
| **CT-VL01** | Análise do Valor Limite (Abaixo do Mínimo) | Formulário de edição/cadastro aberto | **Nome completo:** "A" *(1 caractere - assumindo limite mín. de 2)* | O sistema recusa o cadastro e exibe mensagem informando tamanho mínimo necessário. |
| **CT-VL02** | Análise do Valor Limite (Limite Máximo) | Formulário de edição/cadastro aberto | **Nome completo:** *(100 caracteres exatamente)* | O sistema aceita a entrada e salva o registro no BD com sucesso. |
| **CT-VL03** | Análise do Valor Limite (Acima do Máximo) | Formulário de edição/cadastro aberto | **Nome completo:** *(101 caracteres)* | O sistema impede a digitação do 101º caractere ou exibe erro de limite excedido. |

---

### 3. Estados e Transições de Estados

Mapeamento dos possíveis estados da interface/sistema e as ações (transições) que alteram seu estado.

#### **Estados Identificados:**
1. **E1: Lista de Pacientes (Visualização)** — Tela principal com a tabela de registros.
2. **E2: Formulário de Registro (Cadastro/Edição)** — Tela com os campos (*Nome*, *CPF*, *Telefone*, *E-mail*).
3. **E3: Modal de Confirmação de Exclusão** — Popup de alerta para confirmação.

#### **Tabela de Transição de Estados:**

| Estado Origem | Ação / Evento (Transição) | Estado Destino | Resultado Esperado |
| :--- | :--- | :--- | :--- |
| **E1 (Lista de Pacientes)** | Clicar em "+ Novo registro" | **E2 (Formulário)** | Formulário em branco é exibido para preenchimento. |
| **E1 (Lista de Pacientes)** | Clicar no ícone de lápis ✏️ | **E2 (Formulário)** | Formulário é aberto preenchido com os dados do paciente selecionado. |
| **E1 (Lista de Pacientes)** | Clicar no ícone de exclusão 🗑️ | **E3 (Modal Exclusão)** | Exibe caixa de diálogo confirmando "Excluir este registro?". |
| **E2 (Formulário)** | Clicar em "Salvar registro" (dados válidos) | **E1 (Lista de Pacientes)** | Dados atualizados/salvos no BD e lista recarregada. |
| **E2 (Formulário)** | Clicar em "Cancelar" ou "Voltar" | **E1 (Lista de Pacientes)** | Transita para a lista sem alterar nem salvar os dados. |
| **E3 (Modal Exclusão)** | Clicar em "OK" | **E1 (Lista de Pacientes)** | Registro é removido do BD e deixa de ser exibido na lista. |
| **E3 (Modal Exclusão)** | Clicar em "Cancelar" | **E1 (Lista de Pacientes)** | Modal fecha e o registro permanece inalterado na lista. |

---

## 📐 Estrutura Padrão do Caso de Teste

Todos os casos de teste seguem a estrutura solicitada na atividade:
- **ID & Descrição:** Identificador único da suíte.
- **Entradas (Inputs):** Dados fornecidos ao sistema.
- **Técnicas Utilizadas:** Particionamento de Equivalência, Análise do Valor Limite e Mapeamento de Estados.
- **Resultado Esperado:** O comportamento correto do software após o evento.
