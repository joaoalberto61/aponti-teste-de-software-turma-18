# Atividade Avaliativa: Testes Manuais vs. Automatizados

Este repositório contém a resolução do estudo de caso sobre **Testes Manuais vs. Testes Automatizados**, aplicado ao contexto de um sistema bancário fictício (**BankTech**). 

O objetivo é classificar diferentes cenários de testes, analisando fatores como **custo**, **repetição**, **estabilidade** e **objetivo do teste**.

---

## 📋 Resumo da Classificação

| ID | Cenário de Teste | Classificação | Critério Principal |
|---|---|---|---|
| 01 | Login de Usuário com Validação de Credenciais | **Automatizado** | Alta repetição / Teste Regressivo |
| 02 | Transferência via Pix (Validação de Regras) | **Automatizado** | Validação de Regras de Negócio Críticas |
| 03 | Experiência do Usuário (UX) no Solicitação de Empréstimo | **Manual** | Avaliação de Usabilidade e Percepção Humana |
| 04 | Processamento de Arquivos em Lote (Batch/CNAB) | **Automatizado** | Volume de Dados e Custo Operacional |
| 05 | Comportamento do App com Oscilação de Rede | **Manual** | Teste Exploratório e Condições Físicas |
| 06 | Extrato Bancário e Atualização de Saldo | **Automatizado** | Estabilidade e Teste Regressivo |

---

## 🔍 Detalhamento dos Cenários

### 1. Login de Usuário com Validação de Credenciais
* **Classificação:** `Automatizado`
* **Justificativa:** É a porta de entrada da aplicação, possuindo alta estabilidade e altíssima frequência de execução. Automatizar este cenário garante feedback rápido a cada novo build/deploy no pipeline de CI/CD.

### 2. Transferência via Pix entre Contas
* **Classificação:** `Automatizado`
* **Justificativa:** Trata-se de uma funcionalidade crítica envolvendo transações financeiras e diversas validações de saldo e limites. Scripts automatizados em nível de API/E2E cobrem múltiplos cenários de forma rápida, precisa e sem risco de falha humana.

### 3. Experiência do Usuário (Usabilidade) em Solicitação de Empréstimo
* **Classificação:** `Manual`
* **Justificativa:** Testes de Usabilidade e UX dependem de análise qualitativa humana. Ferramentas de automação não conseguem avaliar a clareza das informações, o fluxo visual ou a intuição do usuário ao utilizar a interface.

### 4. Processamento de Arquivo de Lote (Pagamento de Salários / CNAB)
* **Classificação:** `Automatizado`
* **Justificativa:** Envolve o processamento e validação de grande quantidade de dados estruturados. Testar manualmente o envio e retorno de arquivos em lote gera alto custo de tempo e margem para erros.

### 5. Comportamento do App após Queda e Retorno de Conexão (Offline/3G/4G)
* **Classificação:** `Manual`
* **Justificativa:** Trata-se de um teste de comportamento exploratório do dispositivo sob condições reais e imprevisíveis de hardware/rede, sendo mais ágil e assertivo quando executado manualmente.

### 6. Validação do Extrato Bancário e Cálculo do Saldo
* **Classificação:** `Automatizado`
* **Justificativa:** Funcionalidade estável e recorrente. Faz parte da suíte de regressão essencial para garantir que correções ou novas funcionalidades não afetem a integridade do saldo do cliente.

---

## 🎯 Critérios de Decisão Utilizados

* **Testes Automatizados:** Recomendados para fluxos críticos, estáveis, de alta repetição, grandes volumes de dados ou que compõem a suíte de testes regressivos.
* **Testes Manuais:** Recomendados para testes exploratórios, validações visuais/UX, funcionalidades em fase inicial de mudanças constantes ou testes de experiência em hardware real.
