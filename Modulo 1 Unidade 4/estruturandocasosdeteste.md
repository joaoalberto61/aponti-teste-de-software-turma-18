# 🧪 Casos de Teste - Tela de Login (QA / Teste de Software)

Este repositório contém uma suíte de casos de teste estruturada para validação de uma **Tela de Login**, abordando desde o caminho feliz até cenários de exceção, segurança, usabilidade e comportamento de borda ("fora da caixinha").

Projetado seguindo as melhores práticas da engenharia de qualidade de software, focando em clareza, objetividade e resultados observáveis.

---

## 📌 Objetivos

- Validar a funcionalidade e o comportamento do fluxo de autenticação (Login).
- Aplicar técnicas de testes como **Valores Limite**, **Partição de Equivalência** e **Testes de Segurança/Usabilidade**.
- Garantir a entrega de um documento claro e rastreável para a equipe de desenvolvimento e QA.

---

## 🛠️ Estipulações de Estrutura dos Casos de Teste

Cada caso de teste foi escrito utilizando o seguinte formato:
- **ID / Título do Teste:** Identificador único e breve descrição do objetivo.
- **Pré-condições:** O estado necessário do sistema antes de iniciar o teste.
- **Passos:** Instruções sequenciais e objetivas para a execução.
- **Resultado Esperado:** O comportamento preciso, claro e mensurável que o sistema deve apresentar ao final da execução.

---

## 📋 Suíte de Casos de Teste

### 1. CT-01: Login com sucesso
* **Pré-condições:** Usuário possui uma conta ativa registrada com o e-mail `usuario.valido@email.com` e senha `SenhaValida123`.
* **Passos:**
  1. Acessar a página de login.
  2. Digitar `usuario.valido@email.com` no campo "E-mail".
  3. Digitar `SenhaValida123` no campo "Senha".
  4. Clicar no botão "Entrar".
* **Resultado Esperado:** O sistema redireciona o usuário para a tela `/dashboard` e exibe a mensagem de boas-vindas contendo o nome do usuário.

---

### 2. CT-02: Tentar login com senha incorreta
* **Pré-condições:** E-mail `usuario.valido@email.com` cadastrado no sistema.
* **Passos:**
  1. Acessar a página de login.
  2. Digitar `usuario.valido@email.com` no campo "E-mail".
  3. Digitar `SenhaIncorreta` no campo "Senha".
  4. Clicar no botão "Entrar".
* **Resultado Esperado:** O sistema permanece na tela de login e exibe a mensagem de erro em vermelho: `"E-mail ou senha inválidos."` abaixo dos campos de texto.

---

### 3. CT-03: Submeter formulário com campos vazios
* **Pré-condições:** Nenhuma.
* **Passos:**
  1. Acessar a página de login.
  2. Deixar os campos "E-mail" e "Senha" em branco.
  3. Clicar no botão "Entrar".
* **Resultado Esperado:** Os campos de "E-mail" e "Senha" são destacados com borda vermelha e são exibidas as mensagens: `"O campo e-mail é obrigatório"` e `"O campo senha é obrigatório"`.

---

### 4. CT-04: Tentar login com formato de e-mail inválido
* **Pré-condições:** Nenhuma.
* **Passos:**
  1. Acessar a página de login.
  2. Digitar `usuario.sem.arroba.com` no campo "E-mail".
  3. Digitar `SenhaValida123` no campo "Senha".
  4. Clicar no botão "Entrar".
* **Resultado Esperado:** O sistema impede o envio e exibe a mensagem de alerta abaixo do campo de e-mail: `"Por favor, insira um endereço de e-mail válido."`

---

### 5. CT-05: Bloqueio de conta por múltiplas tentativas incorretas
* **Pré-condições:** E-mail `usuario.valido@email.com` ativo e cadastrado.
* **Passos:**
  1. Acessar a página de login.
  2. Digitar `usuario.valido@email.com` no campo "E-mail" e `SenhaErrada` no campo "Senha".
  3. Clicar no botão "Entrar".
  4. Repetir os passos 2 e 3 por mais 4 vezes consecutivas (totalizando 5 tentativas incorretas).
* **Resultado Esperado:** Na 5ª tentativa, o sistema bloqueia temporariamente a conta e exibe a mensagem: `"Sua conta foi bloqueada por 15 minutos devido a sucessivas tentativas incorretas."`

---

### 6. CT-06: Visibilidade e ocultação da senha (Ícone de Olho)
* **Pré-condições:** Nenhuma.
* **Passos:**
  1. Acessar a página de login.
  2. Digitar `MinhaSenha123` no campo "Senha".
  3. Observar que o texto é exibido em caracteres ocultos (bolinhas/asteriscos).
  4. Clicar no ícone de "olho" dentro do campo "Senha".
  5. Clicar novamente no ícone de "olho".
* **Resultado Esperado:** No passo 4, o texto da senha torna-se visível (`MinhaSenha123`). No passo 5, o texto volta a ficar ocultado por bolinhas/asteriscos.

---

### 7. CT-07: Injeção de SQL no campo de e-mail (Segurança)
* **Pré-condições:** Nenhuma.
* **Passos:**
  1. Acessar a página de login.
  2. Digitar `' OR '1'='1` no campo "E-mail".
  3. Digitar `123456` no campo "Senha".
  4. Clicar no botão "Entrar".
* **Resultado Esperado:** O sistema trata a entrada como texto comum e exibe a mensagem de erro: `"E-mail ou senha inválidos."`, sem permitir acesso indevido ou expor erro de banco de dados (ex: erro 500).

---

### 8. CT-08: Inserção de espaços em branco (Trim) antes e depois do e-mail
* **Pré-condições:** Usuário registrado com o e-mail `usuario.valido@email.com`.
* **Passos:**
  1. Acessar a página de login.
  2. Digitar `   usuario.valido@email.com   ` (com espaços no início e no fim) no campo "E-mail".
  3. Digitar `SenhaValida123` no campo "Senha".
  4. Clicar no botão "Entrar".
* **Resultado Esperado:** O sistema remove automaticamente os espaços extras e realiza o login com sucesso, redirecionando o usuário para a tela `/dashboard`.

---

### 9. CT-09: Redirecionamento ao clicar no link "Esqueci minha senha"
* **Pré-condições:** Nenhuma.
* **Passos:**
  1. Acessar a página de login.
  2. Clicar no link/botão "Esqueci minha senha".
* **Resultado Esperado:** O usuário é redirecionado para a URL `/recuperar-senha`, onde é exibido um formulário com um campo de entrada para solicitação de e-mail de redefinição.

---

### 10. CT-10: Navegação por teclado utilizando a tecla TAB e ENTER (Acessibilidade/Usabilidade)
* **Pré-condições:** Usuário com dados cadastrados e ativos.
* **Passos:**
  1. Acessar a página de login sem utilizar o mouse.
  2. Pressionar a tecla `TAB` até focar o campo "E-mail" e digitar `usuario.valido@email.com`.
  3. Pressionar `TAB` para mudar o foco para o campo "Senha" e digitar `SenhaValida123`.
  4. Pressionar a tecla `ENTER`.
* **Resultado Esperado:** O foco visual muda na ordem lógica dos elementos e, ao pressionar `ENTER`, o formulário é submetido, efetuando o login e redirecionando para a tela `/dashboard`.
