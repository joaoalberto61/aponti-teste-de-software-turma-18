# 📋 Checklist de Testes Não Funcionais — Plataforma PACO

> **Projeto:** Plataforma de Agendamento de Consultas (PACO)  
> **Disciplina / Assunto:** Garantia de Qualidade e Testes de Software  
> **Objetivo:** Avaliar e garantir os requisitos não funcionais da aplicação web PACO, cobrindo aspectos críticos de desempenho, segurança, usabilidade e compatibilidade para prevenir riscos operacionais em ambiente de produção.

---

## 📌 Contexto do Sistema

A **PACO (Plataforma de Agendamento de Consultas)** é um sistema web voltado para a marcação de consultas médicas de forma simples e segura por pacientes, bem como para a gestão de agendas e atendimentos por administradores da clínica.

### Principais Regras de Negócio e Funcionalidades
- **Autenticação:** Usuários devem estar autenticados para realizar agendamentos.
- **Regra de Concorrência:** Não é permitido agendar dois horários simultâneos para o mesmo usuário.
- **Regra de Cancelamento:** Cancelamentos só podem ocorrer até 24 horas antes do horário marcado.
- **Multiplataforma:** Acesso via navegadores web em desktops, tablets e smartphones.

---

## 📑 Checklist de Testes Não Funcionais

### ⚡ 1. Performance (Desempenho e Carga)

| ID | Item a ser Verificado | O que será Verificado? | Risco Associado |
| :---: | :--- | :--- | :--- |
| **PERF-01** | **Tempo de Resposta em Condições Normais** | Medir o tempo necessário para carregar páginas e processar buscas por médicos/especialidades. | **Lenteza/Insatisfação:** Se a busca demorar, o usuário pode desistir do agendamento ou julgar que o sistema travou. |
| **PERF-02** | **Comportamento em Horários de Pico (Teste de Carga)** | Simular múltiplos acessos simultâneos de pacientes tentando agendar horários no mesmo período. | **Queda do Sistema (Downtime):** Sobrecarga no servidor resultando em erros HTTP (ex: 504 Gateway Timeout) e incapacidade de concluir agendamentos. |
| **PERF-03** | **Condição de Corrida (Race Condition / Concorrência)** | Submeter requisições exatamente simultâneas para tentar agendar o mesmo horário com usuários diferentes. | **Inconsistência de Dados (Overbooking):** Dois pacientes conseguirem reservar a mesma consulta com o mesmo médico no mesmo horário. |

---

### 🔒 2. Segurança

| ID | Item a ser Verificado | O que será Verificado? | Risco Associado |
| :---: | :--- | :--- | :--- |
| **SEG-01** | **Proteção de Dados Sensíveis (LGPD / Criptografia)** | Verificar se dados de saúde, CPF e histórico médico estão criptografados no banco de dados e em trânsito (HTTPS/TLS). | **Vazamento de Dados Pessoais:** Exposição pública de dados médicos confidenciais, gerando sanções legais, multas (LGPD) e perda de credibilidade. |
| **SEG-02** | **Controle de Acesso e Autenticação (IDOR)** | Testar se um usuário autenticado consegue alterar parâmetros na URL ou API para visualizar consultas de outros pacientes. | **Acesso Não Autorizado:** Um paciente acessar exames, diagnósticos ou horários de outro usuário sem permissão. |
| **SEG-03** | **Separação de Privilégios (Paciente vs. Admin)** | Garantir que contas com perfil de paciente comum não consigam acessar as rotas ou painéis da Área Administrativa. | **Elevação de Privilégio:** Paciente comum alterando horários de funcionamento da clínica ou cancelando consultas de terceiros. |

---

### 📱 3. Usabilidade

| ID | Item a ser Verificado | O que será Verificado? | Risco Associado |
| :---: | :--- | :--- | :--- |
| **USA-01** | **Design Responsivo em Dispositivos Móveis** | Testar se botões de agendamento, formulários e calendários se ajustam corretamente em telas pequenas sem quebrar o layout. | **Inacessibilidade:** Usuários mobile não conseguirem clicar em ações principais (ex: botão "Confirmar") por sobreposição ou desalinhamento na tela. |
| **USA-02** | **Feedback Claro de Erros e Regras de Negócio** | Avaliar se mensagens explicativas são exibidas quando o usuário tenta cancelar uma consulta com menos de 24h de antecedência. | **Frustração / Sobrecarga do Suporte:** O usuário tentar cancelar, a ação falhar sem explicação clara e ele presumir que o sistema está quebrado. |
| **USA-03** | **Acessibilidade Básica (Navegabilidade)** | Avaliar contraste de cores, tamanho de fonte e facilidade de navegação para pessoas leigas ou com restrições visuais. | **Exclusão de Usuários:** Pacientes idosos ou com limitações visuais não conseguirem concluir o agendamento de forma autônoma. |

---

### 💻 4. Compatibilidade

| ID | Item a ser Verificado | O que será Verificado? | Risco Associado |
| :---: | :--- | :--- | :--- |
| **COMP-01** | **Navegadores Diferentes (Cross-Browser)** | Testar o funcionamento do sistema nos principais navegadores (Google Chrome, Mozilla Firefox, Safari e Microsoft Edge). | **Quebra de Funcionalidades:** Recursos interativos de calendário ou seletores de data/hora falharem ou não carregarem em navegadores específicos (ex: Safari). |
| **COMP-02** | **Sistemas Operacionais e Dispositivos (Cross-Device)** | Testar a aplicação em Desktop (Windows/macOS) e em dispositivos móveis (Android/iOS). | **Incompatibilidade Multiplataforma:** O sistema funcionar perfeitamente em computadores, mas apresentar bugs críticos de renderização ou execução em iPhones (iOS). |

---

## 🛠️ Tecnologias e Ferramentas Recomendadas para Execução

- **Testes de Carga / Performance:** Apache JMeter, k6, Locust
- **Testes de Segurança:** OWASP ZAP, Postman (Autenticação/Tokens), Burp Suite
- **Testes de Usabilidade e Acessibilidade:** Lighthouse, Wave, BrowserStack
- **Testes de Compatibilidade:** BrowserStack, Sauce Labs, DevTools (Device Mode)
