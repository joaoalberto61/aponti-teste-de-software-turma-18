# Relatório de Análise de Defeitos – Sistema PsicoCare

## Introdução

Este relatório apresenta a análise dos defeitos identificados no sistema **PsicoCare**, relacionando cada problema às fases do ciclo de vida do desenvolvimento de software, aos impactos para usuários e para o negócio, além da relação com o custo de correção de defeitos.

---

# 1. Gráfico de Custo de Correção de Defeitos

O gráfico do custo de correção de bugs, proposto por **Barry Boehm**, demonstra que **quanto mais tarde um defeito é identificado no ciclo de vida do software, maior será o custo para corrigi-lo**.

### Exemplos

- Um erro encontrado na fase de **Requisitos** possui baixo custo, pois normalmente basta alterar a documentação.
- Caso esse erro seja identificado apenas durante o **Desenvolvimento**, será necessário modificar o código.
- Se o problema chegar aos **Testes**, além da correção do código será necessária uma nova rodada de validações.
- Quando o defeito chega à **Produção**, os custos aumentam significativamente devido à necessidade de:
  - retrabalho;
  - novos testes;
  - reimplantação do sistema;
  - impactos financeiros;
  - danos à reputação da empresa.

### Contextualização

Todos os defeitos descritos neste relatório foram encontrados durante a **fase de testes**.

Isso significa que:

- o custo de correção já é relativamente elevado;
- será necessário alterar código, banco de dados ou regras de negócio;
- a equipe de testes precisará validar novamente as funcionalidades.

Por outro lado, identificar esses problemas antes da implantação evitou custos muito maiores que ocorreriam caso os erros fossem descobertos apenas pelos usuários finais.

---

# 2. Análise dos Defeitos

## Defeito 1 — Ficha de Anamnese

### Tipo

Erro de persistência de dados.

### Fase em que poderia ter sido encontrado

- Desenvolvimento;
- Testes Unitários.

### Justificativa

Durante o desenvolvimento, o método responsável por salvar os dados deveria ter sido validado para garantir que as informações fossem realmente persistidas no banco de dados.

### Impactos para o usuário

- perda das informações preenchidas;
- retrabalho;
- frustração da recepcionista.

### Impactos para o negócio

- perda do histórico do paciente;
- perda de informações clínicas;
- redução da credibilidade da clínica.

### Relação com o custo de correção

**Médio/Alto**

Como o defeito envolve persistência de dados, sua correção exige alterações estruturais e novos testes integrados.

---

## Defeito 2 — Agenda de Consultas

### Tipo

Erro de regra de negócio.

### Fase em que poderia ter sido encontrado

- Requisitos;
- Análise.

### Justificativa

A impossibilidade de um psicólogo atender dois pacientes simultaneamente deveria constar claramente nos requisitos do sistema.

### Impactos para o usuário

- atrasos;
- conflitos de agenda;
- constrangimento entre pacientes e profissionais.

### Impactos para o negócio

- perda de organização;
- queda na qualidade do atendimento;
- prejuízo à reputação da clínica.

### Relação com o custo de correção

**Alto**

A correção exige alterações na lógica de agendamento e validação de conflitos de horário.

---

## Defeito 3 — Cadastro do Psicólogo

### Tipo

Erro de validação de entrada.

### Fase em que poderia ter sido encontrado

- Requisitos;
- Testes Unitários;
- Front-end.

### Justificativa

As regras de validação do número do CRP deveriam estar especificadas e implementadas por meio de máscaras ou expressões regulares.

### Impactos para o usuário

- cadastro de informações inválidas;
- ausência de mensagens de erro.

### Impactos para o negócio

- inconsistência cadastral;
- possíveis sanções do Conselho Regional de Psicologia (CRP).

### Relação com o custo de correção

**Baixo/Médio**

Normalmente basta implementar validações no formulário.

---

## Defeito 4 — Controle Financeiro

### Tipo

Erro de validação de negócio.

### Fase em que poderia ter sido encontrado

- Requisitos;
- Desenvolvimento.

### Justificativa

Valores monetários iguais ou inferiores a zero deveriam ser bloqueados pelo sistema.

### Impactos para o usuário

- erros no fechamento do caixa;
- confusão financeira.

### Impactos para o negócio

- prejuízos financeiros;
- inconsistência contábil;
- possibilidade de fraudes.

### Relação com o custo de correção

**Alto**

A correção exige alterações nas regras financeiras e testes rigorosos.

---

## Defeito 5 — Controle de Estoque

### Tipo

Erro de regra de negócio.

### Fase em que poderia ter sido encontrado

- Requisitos;
- Design do Sistema.

### Justificativa

As regras de estoque mínimo, máximo e de retirada deveriam estar definidas desde a modelagem do sistema.

### Impactos para o usuário

- divergência entre estoque físico e sistema;
- falta de materiais.

### Impactos para o negócio

- cancelamento de atendimentos;
- falhas na auditoria de estoque;
- perda de controle dos insumos.

### Relação com o custo de correção

**Alto**

A lógica de movimentação do estoque precisará ser modificada.

---

## Defeito 6 — Exclusão de Paciente

### Tipo

Erro de integridade do banco de dados.

### Fase em que poderia ter sido encontrado

- Arquitetura;
- Modelagem do Banco de Dados.

### Justificativa

As restrições de chave estrangeira deveriam impedir a exclusão de registros vinculados ou definir corretamente o comportamento das relações.

### Impactos para o usuário

- consultas sem paciente;
- telas com erros;
- relatórios inconsistentes.

### Impactos para o negócio

- perda da rastreabilidade dos atendimentos;
- inconsistência dos dados históricos.

### Relação com o custo de correção

**Muito Alto**

Pode exigir migrações complexas e alterações em diversas consultas ao banco de dados.

---

## Defeito 7 — Pesquisa de Pacientes

### Tipo

Problema de usabilidade.

### Fase em que poderia ter sido encontrado

- Desenvolvimento.

### Justificativa

A pesquisa deveria ignorar diferenças entre letras maiúsculas e minúsculas utilizando recursos como `toLowerCase()` ou consultas *case-insensitive*.

### Impactos para o usuário

- dificuldade para localizar pacientes;
- perda de tempo durante o atendimento.

### Impactos para o negócio

- criação de cadastros duplicados;
- inconsistência da base de dados.

### Relação com o custo de correção

**Baixo**

A alteração normalmente consiste em modificar o filtro de busca.

---

## Defeito 8 — Login

### Tipo

Falha de segurança.

### Fase em que poderia ter sido encontrado

- Requisitos Não Funcionais;
- Desenvolvimento;
- Arquitetura.

### Justificativa

A política de bloqueio após múltiplas tentativas de login deveria fazer parte dos requisitos de segurança.

### Impactos para o usuário

- risco à privacidade dos pacientes;
- exposição de dados sigilosos.

### Impactos para o negócio

- ataques de força bruta;
- vazamento de dados;
- processos relacionados à LGPD;
- danos à reputação da clínica.

### Prioridade

**Urgente**

### Relação com o custo de correção

**Alto**

Será necessário alterar o mecanismo de autenticação, registrar tentativas de acesso e implementar bloqueios temporários.

---

# 3. Conclusão

A análise dos defeitos encontrados no sistema **PsicoCare** demonstra que a maioria das falhas está relacionada à ausência ou deficiência na especificação de requisitos, regras de negócio e arquitetura do sistema.

Os principais problemas foram identificados nas seguintes áreas:

- regras de negócio;
- validação de entradas;
- persistência de dados;
- integridade do banco de dados;
- segurança.

Segundo o gráfico do custo de correção de defeitos de Barry Boehm, essas falhas poderiam ter sido corrigidas com baixo custo caso fossem identificadas durante a fase de requisitos ou de projeto.

Como foram detectadas apenas durante os testes, será necessário:

- refatorar partes do código;
- revisar regras de negócio;
- modificar estruturas do banco de dados;
- executar uma nova rodada completa de testes.

Apesar do aumento do custo de correção, a atuação da equipe de testes foi fundamental para impedir que esses defeitos chegassem ao ambiente de produção, evitando prejuízos financeiros, operacionais e jurídicos para a clínica.

---

## Considerações Finais

A realização de revisões de requisitos, inspeções de código, testes unitários e validações contínuas durante o desenvolvimento é essencial para reduzir o custo de correção de defeitos e aumentar a qualidade do software entregue.
