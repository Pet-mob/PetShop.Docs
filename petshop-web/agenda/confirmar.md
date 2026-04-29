# ✅ Confirmar Agendamentos

A tela de Confirmação de Agendamentos é onde você aprova ou recusa as solicitações feitas pelos clientes pelo app ou portal. Todo novo agendamento passa por aqui antes de entrar na sua agenda.

## Como acessar

Menu lateral → **Agenda → Confirmar Agendamentos**

Também acessível direto do Dashboard, pelo card de pendências.

---

## Entendendo o fluxo

```
Cliente agenda pelo app/portal
         ↓
Aparece aqui como "Aguardando confirmação"
         ↓
Você confirma ou recusa
         ↓
Cliente recebe notificação no app
```

---

## O que você vê em cada solicitação

Para cada agendamento aguardando confirmação:

| Informação | Descrição |
|---|---|
| **Cliente** | Nome completo e telefone |
| **Pet** | Nome, raça e porte |
| **Serviço** | O serviço solicitado |
| **Data e horário** | Quando o cliente deseja ser atendido |
| **Valor** | Preço do serviço conforme tabela |
| **Observações** | Alguma mensagem do cliente (se houver) |

---

## Como confirmar

1. Localize o agendamento na lista
2. Clique em **"Confirmar"** (botão verde)
3. Pronto — o agendamento entra na agenda com status **Confirmado**

O cliente recebe uma notificação push no celular: *"Seu agendamento foi confirmado! 🎉"*

---

## Como recusar

1. Localize o agendamento na lista
2. Clique em **"Recusar"** (botão vermelho)
3. Selecione o **motivo da recusa**:
   - Horário não disponível
   - Serviço não disponível para esse porte
   - Capacidade máxima atingida
   - Outro (campo livre)
4. Confirme a recusa

O cliente recebe uma notificação informando a recusa e pode tentar outro horário.

::: tip Boa prática
Sempre que recusar um agendamento, use o campo de observações para explicar o motivo. Isso reduz a frustração do cliente e aumenta as chances de ele tentar novamente.
:::

---

## Comportamento esperado

✅ **Notificação em tempo real** — Quando um novo agendamento chega, um badge vermelho aparece no menu lateral com o número de pendências e você recebe um alerta visual e sonoro.

✅ **Prazo de resposta** — O sistema recomenda confirmar ou recusar em até 2 horas. Após 24 horas sem resposta, o cliente pode cancelar a solicitação.

✅ **Lista vazia** — Se não houver pendências, a tela exibe: *"Nenhum agendamento aguardando confirmação. Tudo em dia! ✅"*

✅ **Ordenação** — Os agendamentos são exibidos do mais antigo para o mais recente (quem esperou mais tempo aparece primeiro).

---

## Confirmação em lote

Se você recebe muitos agendamentos de uma vez, pode usar o botão **"Confirmar todos"** para aprovar todas as solicitações pendentes de uma só vez.

::: warning
Use "Confirmar todos" apenas quando tiver certeza que tem disponibilidade para todos os horários listados. Não é possível desfazer confirmações em lote.
:::

---

## Perguntas frequentes

**Posso configurar confirmação automática?**
Sim. Em **Configurações → Parâmetros**, você pode ativar a **"Confirmação automática"**. Com ela ativada, os agendamentos são confirmados instantaneamente sem precisar da sua aprovação manual.

**O cliente foi confirmado mas depois preciso cancelar. É possível?**
Sim. Acesse a agenda, clique no agendamento e selecione "Cancelar". O cliente será notificado.

**Recebi um agendamento fora do meu horário de funcionamento. Como isso aconteceu?**
Verifique suas configurações de horário em **Configurações → Horário de Funcionamento**. É possível que o horário esteja configurado de forma incorreta.
