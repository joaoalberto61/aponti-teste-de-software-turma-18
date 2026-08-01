# 🧪 Atividade Prática: Testes Não Funcionais em Sistemas Bancários

Este repositório contém a resolução da atividade prática sobre **Testes Não Funcionais**, focando em testes exploratórios, usabilidade e experiência do usuário (UX) aplicados a uma aplicação financeira fictícia.

---

## 📱 Sistema Fictício Analisado

* **Nome do Sistema:** `BankX`
* **Tipo de Aplicação:** Aplicativo Mobile (Android/iOS) para Conta Digital Pessoa Física.
* **Contexto:** Sistema de alta concorrência e criticidade que lida com transações financeiras, Pix, pagamentos e dados sensíveis de clientes.

---

## 📋 Resolução da Atividade

### 1. 🔍 5 Pontos para Teste Exploratório Livre (Foco Não Funcional)

1. **Acessibilidade e Leitura de Tela (Acessibilidade):**
   * Navegação completa no aplicativo utilizando leitores de tela (`TalkBack` no Android e `VoiceOver` no iOS) para garantir a inclusão de usuários com deficiência visual.
2. **Comportamento sob Instabilidade de Rede (Resiliência):**
   * Realização de transações (Pix/Pagamentos) simulando a alternância entre Wi-Fi, 4G, 3G e modo sem conexão para verificar a recuperação de falhas e retenção de dados temporários.
3. **Proteção de Dados Sensíveis em Multitarefa (Segurança/Privacidade):**
   * Alternar para o modo de multitarefa do sistema operacional para validar se a tela do app é obscurecida/borrada automaticamente, protegendo informações confidenciais.
4. **Respostas sob Alta Carga de Acessos Simultâneos (Performance):**
   * Teste de estresse simulando picos de tráfego típicos de dias de pagamento (ex: dia 5 do mês) para avaliar o tempo de resposta das APIs de extrato e saldo.
5. **Responsividade e Adaptação de Layout (Usabilidade/Design):**
   * Validação em diferentes tamanhos e resoluções de tela (smartphones pequenos, telas dobráveis e tablets), além do comportamento da interface com a fonte do sistema aumentada ao máximo.

---

### 2. ⚠️ 5 Possíveis Problemas de Usabilidade

1. **Contraste Inadequado de Cores:**
   * Textos em cinza-claro sobre fundos brancos ou botões de ação principal com baixo contraste.
2. **Ausência de Feedback Visual em Ações Lentas:**
   * Falta de um *loader* ou indicador de progresso imediato ao clicar em "Confirmar Pagamento".
3. **Exposição do Saldo sem Atalho Rápido de Ocultação:**
   * Saldo exibido por padrão na tela inicial sem um botão visível e rápido (ícone de olho) para ocultá-lo.
4. **Mensagens de Erro Técnicas ou Genéricas:**
   * Apresentação de mensagens como *"Error 500: Internal Server Error"* em vez de textos instrucionais e amigáveis ao usuário.
5. **Dificuldade na Localização de Comprovantes:**
   * Fluxo complexo ou ausência do botão direto para exportar/compartilhar comprovantes logo após a conclusão de uma transação.

---

### 3. 💥 Impacto desses Problemas no Usuário

* **Insegurança e Cobranças Duplicadas:** A ausência de feedback visual ou a exibição de erros técnicos faz com que o usuário duvide se a operação foi concluída, levando-o a repetir a ação e correndo o risco de pagar um boleto ou transferir valores em duplicidade.
* **Exclusão de Usuários:** Baixo contraste e falta de suporte adequado a leitores de tela barram o acesso de idosos e pessoas com deficiência visual, tornando a aplicação inacessível.
* **Exposição de Privacidade:** A impossibilidade de esconder o saldo rapidamente deixa o cliente vulnerável a olhares curiosos em locais públicos ou no transporte coletivo.
* **Frustração e Aumento de Suporte:** Dificuldades simples, como salvar um comprovante, geram irritação no usuário e aumentam o volume de chamados nos canais de atendimento ao cliente, elevando os custos operacionais do banco.

---

## 🛠️ Conceitos de QA Aplicados

* **Testes Não Funcionais:** Usabilidade, Performance, Segurança, Acessibilidade e Resiliência.
* **Testes Exploratórios:** Investigação livre focada nos pontos mais críticos do sistema.
* **UX/UI QA:** Análise de heurísticas de usabilidade (Feedback, Prevenção de Erros, Carga Cognitiva).
