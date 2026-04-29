# 📊 Dashboard

O Dashboard é a tela principal do painel. Ao fazer login, você é redirecionado diretamente para ela. Aqui você tem uma visão rápida de tudo que está acontecendo no seu petshop hoje.

## O que você vê no Dashboard

### Indicadores do dia (KPIs)

No topo da tela, quatro cards mostram os números mais importantes do dia:

| Card | O que mostra |
|---|---|
| **Faturamento do dia** | Soma de todos os serviços concluídos hoje |
| **Atendimentos realizados** | Quantidade de serviços finalizados no dia |
| **Ticket médio** | Valor médio por atendimento hoje |
| **Próximo agendamento** | Horário e nome do próximo cliente |

---

### Agendamentos pendentes de confirmação

Lista os agendamentos que os clientes fizeram pelo app ou portal e que **aguardam a sua aprovação**. 

Para cada agendamento pendente, você vê:
- Nome do cliente e do pet
- Serviço solicitado
- Data e horário desejados
- Botões **Confirmar** e **Recusar**

::: tip
Confirme ou recuse os agendamentos com agilidade — o cliente recebe uma notificação em tempo real no app assim que você responde.
:::

---

### Próximos agendamentos do dia

Lista os agendamentos confirmados para hoje em ordem cronológica:

- Horário
- Nome do cliente
- Nome e porte do pet
- Serviço contratado
- Status atual

---

### Atalhos rápidos

O Dashboard oferece atalhos para as ações mais comuns:

- **Ver agenda completa** → vai para a página de Agenda
- **Confirmar agendamentos** → vai para a fila de confirmações
- **Novo agendamento** → abre o formulário de agendamento manual (planos Pro e Elite)

---

## Comportamento esperado

✅ **Atualização automática** — Os dados do Dashboard são atualizados automaticamente a cada 30 segundos, sem precisar recarregar a página.

✅ **Notificação sonora** — Quando um novo agendamento é recebido, um sinal sonoro discreto é emitido (se o navegador tiver permissão).

✅ **Zero agendamentos pendentes** — Se não houver pendências, a seção exibe a mensagem: *"Tudo em dia! Nenhum agendamento aguardando confirmação."*

✅ **Dia sem agendamentos** — Os KPIs exibem "R$ 0,00" e "0 atendimentos". Isso é normal em dias folga ou feriados.

---

## Perguntas frequentes

**Por que o faturamento do dia não bate com o que recebi no caixa?**
O faturamento no Dashboard considera apenas serviços com status **"Concluído"**. Agendamentos confirmados mas ainda não finalizados não entram no total.

**Posso personalizar quais cards aparecem no Dashboard?**
No momento, os cards são fixos. Personalizações de Dashboard estão previstas em atualizações futuras.

**O Dashboard não está atualizando. O que fazer?**
Verifique sua conexão com a internet. Se estiver conectado, force uma atualização com **Ctrl+F5** (ou Cmd+R no Mac). Acesse **https://petshop.petmob.com.br** novamente se o problema persistir.
