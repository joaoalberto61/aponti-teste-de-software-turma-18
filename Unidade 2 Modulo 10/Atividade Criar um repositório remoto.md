# Exercício: Estrutura Básica Node.js / TypeScript (Variáveis e Funções)

Este repositório contém a solução do exercício proposto para a criação de uma estrutura inicial de projeto Node.js/TypeScript, demonstrando a declaração e o uso prático de **variáveis**, **tipos customizados (type aliases)** e **funções**.

---

## 📋 Proposta do Exercício

1. Criar um repositório remoto contendo a estrutura básica de um projeto Node.js/TypeScript.
2. Apresentar exemplos práticos de:
   - **Variáveis** (declaração com tipagem explícita e inferência de tipos).
   - **Funções** (passagem de parâmetros, verificação de condições e formatação de saída).
3. Incluir um arquivo `README.md` detalhando a implementação realizada.

---

## 🚀 O que foi feito

No arquivo principal (`nivel1.ts`), foram implementados conceitos fundamentais da linguagem TypeScript:

### 1. Declaração e Tipagem de Variáveis
Foram exploradas diferentes formas de declarar variáveis no TypeScript:
* **Tipagem declarada separadamente:** `let idade: number;`
* **Inferência de tipos:** `const nome = "Seu Zezo";` (o TypeScript infere o tipo `string` automaticamente).
* **Tipagem explícita em inicializadores:** `const sobrenome: string = "da Silva";`.

---

### 2. Criação de Tipos Customizados (`type`)
Para estruturar e garantir a integridade dos dados manipulados pelas funções, foram definidos os seguintes tipos customizados:

* **`usuario`**: Define um objeto representando um jogador com as propriedades `nick` (`string`) e `age` (`number`).
* **`Tecnico`**: Define um objeto representando um técnico de futebol/esporte com `nome` (`string`), `idade` (`number`) e `anosExperiencia` (`number`).

---

### 3. Implementação de Funções e Lógica de Negócio

#### A) Verificação de Maioridade de Jogadores (`verificarIdade`)
* **Objetivo:** Recebe um objeto do tipo `usuario` e valida se sua idade é maior ou igual a 21 anos.
* **Comportamento:** Exibe no console uma mensagem informando se o acesso foi liberado ou negado.
* **Testes executados:**
  - `jogador` (Ricardo, 18 anos) $ightarrow$ *Acesso negado.*
  - `jogadorVelho` (Toin, 76 anos) $ightarrow$ *Acesso liberado.*

#### B) Avaliação de Experiência de Técnicos (`avaliarExperiencia`)
* **Objetivo:** Recebe um objeto do tipo `Tecnico` e avalia sua senioridade com base nos anos de experiência usando operador ternário.
* **Regra de Negócio:** Técnicos com 5 ou mais anos de experiência são classificados como **Experientes**; caso contrário, como **Iniciantes**.
* **Testes executados:**
  - `tecnico1` (Professor Tite, 25 anos de experiência) $ightarrow$ *Classificado como Experiente.*
  - `tecnico2` (Lucas Novato, 2 anos de experiência) $ightarrow$ *Classificado como Iniciante.*

---

## 🛠️ Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone <URL_DO_SEU_REPOSITORIO>
   cd <NOME_DA_PASTA>
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Executar o script TypeScript:**
   Se estiver usando `npx ts-node`:
   ```bash
   npx ts-node nivel1.ts
   ```
