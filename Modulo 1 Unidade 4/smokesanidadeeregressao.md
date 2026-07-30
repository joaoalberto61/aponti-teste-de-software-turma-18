# 🧪 Testes de Software: Smoke, Sanidade e Regressão

Este repositório contém a resolução de uma atividade avaliativa prática de **Garantia de Qualidade de Software (QA)**, focada no planejamento de cenários de testes para uma nova versão de um **Sistema Bancário**.

---

## 🎯 Cenário da Aplicação

Uma nova versão de um sistema bancário foi implantada em ambiente de testes contendo as seguintes alterações:
1. **Correção de bug** na funcionalidade de **Login**.
2. **Ajuste na exibição do Saldo** localizado na tela inicial (Dashboard).

---

## 📌 Resumo da Estratégia de Testes

| Tipo de Teste | Foco Principal | Objetivo |
| :--- | :--- | :--- |
| **Smoke Test (Fumaça)** | Estabilidade do Build | Verificar se os fluxos vitais funcionam e se a aplicação está apta para testes mais profundos. |
| **Sanity Test (Sanidade)** | Alterações Recentes | Validar rapidamente se o *bugfix* do login e a alteração do saldo funcionam como esperado. |
| **Regression Test (Regressão)** | Impacto e Integridade | Garantir que as alterações não introduziram novos bugs em funcionalidades existentes (ex: Pix, Extrato). |

---

## 🚀 Planejamento de Cenários de Teste

### 1. 🔥 Testes de Smoke (Fumaça)
> **Objetivo:** Validar a estabilidade geral da versão (*Build Health Check*).

1. **CT-SMK-001:** Carregamento e acesso à tela inicial/login da aplicação bancária.
2. **CT-SMK-002:** Autenticação de usuário com credenciais válidas.
3. **CT-SMK-003:** Carregamento do Dashboard principal sem erros de sistema (*Crash/Error 500*).
4. **CT-SMK-004:** Navegação entre telas principais (Ex: Perfil/Configurações e retorno).
5. **CT-SMK-005:** Encerramento de sessão (*Logout*) com sucesso.

* **Justificativa:** Caso qualquer um destes testes falhe, a build é considerada instável e deve ser rejeitada imediatamente, evitando desperdício de tempo da equipe de QA.

---

### 2. 🩺 Testes de Sanidade (Sanity)
> **Objetivo:** Validar o escopo direto da alteração (*Fixes & Feature Adjustments*).

1. **CT-SAN-001:** Efetuar login com credenciais válidas e verificar a resolução do problema prévio.
2. **CT-SAN-002:** Validar se o valor exibido no saldo da tela inicial corresponde ao valor real da conta.
3. **CT-SAN-003:** Validar a formatação de moeda e decimais do saldo (ex: `R$ 1.250,00`).
4. **CT-SAN-004:** Testar funcionalidade de ocultar/exibir saldo (ícone de visibilidade).
5. **CT-SAN-005:** Atualizar a página (*Pull-to-refresh*) e verificar a atualização adequada do saldo.

* **Justificativa:** Garante que a equipe de desenvolvimento entregou a correção e o ajuste de acordo com os requisitos especificados no *Release Note*.

---

### 3. 🔄 Testes de Regressão (Regression)
> **Objetivo:** Garantir a não quebra de funcionalidades dependentes ou legadas (*Side Effects*).

1. **CT-REG-001:** Realizar uma transferência via Pix/TED e verificar o débito imediato e atualização no saldo.
2. **CT-REG-002:** Consultar o extrato detalhado e comparar os lançamentos com o saldo exibido na tela inicial.
3. **CT-REG-003:** Tentativa de login com credenciais inválidas para validar regras de bloqueio e mensagens de erro.
4. **CT-REG-004:** Efetuar pagamento de boleto bancário e verificar a persistência da transação.
5. **CT-REG-005:** Testar persistência e expiração de sessão ao fechar e reabrir a aplicação.

* **Justificativa:** Mudanças no login (autenticação/sessão) e na exibição do saldo (APIs financeiras) podem impactar diretamente a segurança e módulos financeiros sensíveis.

---

## 🛠️ Tecnologias & Conceitos Aplicados
* **Garantia de Qualidade (QA)**
* **Estratégias de Testes de Software**
* **Elaboração de Casos e Cenários de Teste**
* **Metodologias Ágeis & Análise de Riscos**
