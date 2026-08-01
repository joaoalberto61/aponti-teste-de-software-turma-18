# 🧪 Testes de Performance — Estudo de Caso e Atividade Avaliativa

Este repositório contém a resolução de uma atividade avaliativa focada em **Testes de Performance e Garantia de Qualidade (QA)**. Para fundamentar a análise, foi simulado um relatório de teste de desempenho de um ambiente de e-commerce durante um pico de acessos.

---

## 📊 Relatório de Teste de Performance

* **Sistema Avaliado:** E-commerce — Endpoint da API `/api/checkout`
* **Ferramentas Simuladas:** JMeter / k6
* **Duração do Teste:** 30 minutos
* **Objetivo:** Avaliar a estabilidade e capacidade da aplicação em suportar o tráfego esperado em grandes eventos de vendas (ex: *Black Friday*).

### 📈 Tabela de Métricas Métricas Coletadas

| Métrica | Meta / SLA Esperada | Resultado Obtido | Status |
| :--- | :--- | :--- | :---: |
| **Usuários Simultâneos (VUs)** | 5.000 VUs | 5.000 VUs | 🟡 |
| **Vazão (Throughput)** | > 800 req/s | 420 req/s | 🔴 |
| **Tempo Médio de Resposta** | < 1,5 s | **4,8 s** | 🔴 |
| **Tempo de Resposta (Percentil 95%)** | < 2,0 s | **12,3 s** | 🔴 |
| **Taxa de Erro (HTTP Status 5xx)** | < 1% | **8,5%** | 🔴 |
| **Uso Médio de CPU (Servidor App)** | < 70% | **98%** | 🔴 |
| **Uso de Memória (Banco de Dados)** | < 80% | **92%** | 🔴 |

---

## 📝 Resolução da Atividade

### 1. O sistema pode ser considerado aprovado?
**Não.** O sistema é considerado **reprovado**. O tempo de resposta para 95% das requisições (12,3s) superou drasticamente o limite da SLA estipulada (2,0s). Além disso, a taxa de erro de 8,5% invalida o uso em ambiente de produção, pois afeta diretamente a experiência do usuário final.

---

### 2. Quais métricas indicam problemas de performance?
* **Tempo de Resposta (P95 em 12,3s):** Demonstra que grande parte das solicitações sofreu atrasos críticos.
* **Taxa de Erro (8,5%):** Indica que aproximadamente 1 a cada 12 requisições resultou em falha interna do servidor (`HTTP 500` / `504 Gateway Timeout`).
* **Vazão / Throughput (420 req/s):** Ficou cerca de 47% abaixo da capacidade mínima esperada (800 req/s).
* **Consumo de Recursos (CPU a 98% e Memória a 92%):** Revela saturação de hardware e esgotamento do *pool* de conexões no banco de dados.

---

### 3. Quais possíveis gargalos podem existir?
1. **Saturação de CPU na Aplicação:** Código ineficiente no processamento do carrinho/checkout ou ausência de auto-scaling.
2. **Esgotamento do Pool de Conexões:** Excesso de requisições retidas aguardando conexão disponível com o banco de dados.
3. **Consultas SQL Lentas (*Slow Queries*):** Falta de indexação adequada nas tabelas de inventário e produtos consultadas durante o checkout.

---

### 4. Esse cenário se aproxima mais de Carga, Stress ou Capacidade?
Este cenário se aproxima de um **Teste de Stress (Estresse)**.
> **Justificativa:** A carga aplicada levou o ambiente até e além do seu limite operacional (processamento em 98%), resultando em degradação acentuada de performance e surgimento de erros em cascata.

---

### 5. O que você recomendaria ao time técnico?
1. **Otimização de Consultas:** Refatorar requisições do banco de dados no fluxo de checkout e criar índices nas tabelas críticas.
2. **Escalabilidade Horizontal:** Configurar políticas de *Auto-scaling* nos contêineres/pods para subir novas instâncias quando a CPU ultrapassar 70%.
3. **Implementação de Cache:** Utilizar camadas de cache em memória (ex: Redis) para consulta de dados estáticos ou de leitura frequente (preços e estoque).
4. **Ajuste no Pool de Conexões:** Redimensionar e otimizar as conexões ativas do banco de dados.
5. **Re-teste (Reteste de Performance):** Executar nova bateria de testes após as correções técnicas para validar o cumprimento dos SLAs.
