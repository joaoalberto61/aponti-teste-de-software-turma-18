# Atividade Avaliativa — Teste de Software (Clínica PSI)

Este repositório contém a documentação da atividade avaliativa de **Teste de Software**, aplicando **Heurísticas de Teste** (Heurísticas de Nielsen + Testing Tours) no sistema **Clínica PSI (Time 2)**.

---

## 📌 Contexto da Aplicação

- **Sistema:** Clínica PSI - Time 2
- **Funcionalidade Avaliada:** Dashboard / Visão Geral (Painel do Administrador)
- **Perfil Utilizado:** Administrador (Usuária: Ana Souza)

---

## 🎯 Justificativa das Escolhas

### 1. Funcionalidade: Dashboard (Visão Geral)
> **Por que o Dashboard?**  
> Por ser a tela inicial de entrada do sistema e o primeiro ponto de contato do perfil **Administrador**, o Dashboard centraliza a visão macro da clínica. Qualquer falha na exibição, consolidação de dados ou inconsistência visual nessa etapa afeta diretamente a tomada de decisão do gestor e compromete a confiabilidade do produto.

### 2. Heurística de Nielsen: Visibilidade do Estado do Sistema (*Nielsen #1*)
> **Por que esta heurística?**  
> A função primária de um painel de controle é manter o usuário continuamente informado sobre o status e os eventos do sistema em tempo real (ex.: contagem de consultas, pacientes ativos e perfil autenticado). A escolha desta heurística permite identificar falhas na sincronização, atualização e clareza dos dados exibidos.

### 3. Testing Tour: Tour do Guia Turístico (*The Tourist Tour*)
> **Por que este Tour?**  
> O *Tourist Tour* foca em percorrer os caminhos mais visitados e de maior destaque para o usuário final. Como o Dashboard é a página principal acessada em cada login, utilizar essa técnica garante avaliar a experiência de uso inicial, a clareza dos indicadores e o fluxo básico de navegação macro.

---

## 🔍 Resultados da Avaliação

### 1. Falhas Identificadas
- **Inconsistência Visual e Redundância no Card de Perfil:** O quarto card na área central repete a informação `"Perfil: Administrador"`, enquanto os demais cards apresentam métricas quantitativas (`Consultas Cadastradas: 2`, `Pacientes Ativos: 2`, `Módulos Disponíveis: 22`).
- **Subaproveitamento de Layout (Espaço em Branco):** Grande área sem conteúdo abaixo dos cards numéricos, que poderia ser otimizada com atalhos para ações rápidas (ex.: *Novo Agendamento*, *Novo Paciente*) ou gráficos informativos.

---

### 2. Riscos Identificados
- **Risco de Desincronização de Dados em Tempo Real:** Se os dados dos cards (`Consultas`, `Pacientes`) forem mantidos em cache sem atualização reativa ou via polling/WebSocket, o gestor pode tomar decisões com base em métricas defasadas.
- **Risco de Acessibilidade (Baixo Contraste):** Os rótulos superiores dos cards e informações secundárias utilizam tons de cinza muito claros (`#717D96` / `#A0AEC0`), o que pode violar as diretrizes de contraste (WCAG 2.1) em monitores com brilho reduzido.
- **Risco de Responsividade e Quebra de Layout:** A exibição de 4 cards em linha sem flexibilidade pode gerar sobreposição de textos ou rolagem horizontal indesejada em telas menores ou dispositivos móveis.

---

### 3. Áreas que Merecem Mais Atenção
- **Módulos Disponíveis (Validação de Permissões):** O indicador aponta `22 módulos disponíveis`. É crítico testar se a matriz de controle de acesso (RBAC) está restringindo adequadamente a navegação do menu lateral conforme o perfil logado.
- **Gerenciamento de Sessão e Invalidação de Token (Logout):** O botão `"Sair"` e a área de identificação de usuário (`Ana Souza`) exigem atenção especial de segurança para assegurar que a sessão e os tokens de autenticação/autorização sejam totalmente invalidados ao deslogar, impedindo o acesso indevido a dados sensíveis de saúde (prontuários e agendamentos).

---

## 🛠️ Tecnologias / Conceitos Utilizados

- **Heurísticas de Usabilidade de Jakob Nielsen**
- **Exploratory Testing Tours (Whittaker)**
- **Análise de Riscos de Software & QA**
