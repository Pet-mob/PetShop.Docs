# 📅 Visualizar Agenda

A página de Agenda exibe todos os seus agendamentos em um calendário interativo. É a central de controle do dia a dia do seu petshop.

## Como acessar

Menu lateral → **Agenda**

---

## Visões disponíveis

Você pode alternar entre três visões do calendário usando os botões no canto superior direito:

| Visão | O que mostra |
|---|---|
| **Dia** | Todos os agendamentos do dia selecionado, organizados por horário |
| **Semana** | Visão semanal com todos os atendimentos da semana |
| **Mês** | Visão mensal com indicadores de quantidade por dia |

---

## Navegando no calendário

- **Setas ← →** no topo: avança ou volta no tempo (dia/semana/mês, dependendo da visão)
- **Botão "Hoje"**: volta para a data atual
- **Clique em um dia** (visão mensal): expande para a visão diária daquele dia

---

## Informações em cada agendamento

Cada bloco de agendamento na agenda exibe:

- 🕐 **Horário** de início e fim
- 👤 **Nome do cliente**
- 🐾 **Nome do pet** e porte (P / M / G)
- ✂️ **Serviço** contratado
- 🔵 **Status** com cor diferente:
  - 🟡 Amarelo = Aguardando confirmação
  - 🔵 Azul = Confirmado
  - 🟢 Verde = Em atendimento
  - ✅ Cinza escuro = Concluído
  - 🔴 Vermelho = Cancelado

---

## Criando um agendamento manual

::: info Disponível no plano Pro
O agendamento manual permite marcar um atendimento diretamente pela agenda, sem precisar que o cliente passe pelo app ou portal.
:::

**Como criar:**

1. Clique em um horário vago no calendário
2. Ou clique no botão **"+ Novo agendamento"** no canto superior
3. Preencha os dados:
   - Nome do cliente e telefone
   - Nome e porte do pet
   - Serviço desejado
   - Data e horário
4. Clique em **"Confirmar agendamento"**

O agendamento é criado com status **Confirmado** automaticamente.

---

## Editando um agendamento

1. Clique no bloco do agendamento na agenda
2. Um painel lateral se abre com os detalhes
3. Clique em **"Editar"** para alterar data/horário
4. Ou clique em **"Cancelar agendamento"** para recusar

::: warning
Ao cancelar um agendamento confirmado, o cliente recebe uma notificação automática no app informando o cancelamento. Sempre que possível, entre em contato antes de cancelar.
:::

---

## Comportamento esperado

✅ **Horários bloqueados** — Horários fora do seu horário de funcionamento aparecem em cinza e não aceitam agendamentos.

✅ **Conflito de horários** — O sistema não permite criar dois agendamentos no mesmo horário, a não ser que seus parâmetros permitam atendimentos simultâneos.

✅ **Arraste e solte** — Você pode arrastar um agendamento para outro horário diretamente no calendário para reagendar rapidamente.

✅ **Feriados** — Dias marcados como feriado aparecem com um ícone especial e ficam bloqueados para novos agendamentos.

---

## Perguntas frequentes

**O cliente agendou mas não aparece na minha agenda. Por quê?**
Verifique a aba de **"Aguardando confirmação"**. O agendamento fica nessa fila até você aprovar.

**Posso bloquear um horário sem ser um agendamento?**
Sim. Clique no horário desejado e selecione **"Bloquear horário"**. Esse bloco não aparece para clientes como disponível.

**Como vejo os agendamentos de uma data passada?**
Use as setas de navegação para voltar no tempo. Agendamentos passados são exibidos normalmente.
