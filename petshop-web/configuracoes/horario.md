# 🕐 Horário de Funcionamento

O horário de funcionamento define em quais dias e horários seu petshop aceita agendamentos. É uma das configurações mais importantes: sem ela configurada corretamente, clientes não conseguem agendar.

## Como acessar

Menu lateral → **Configurações → Horário de Funcionamento**

---

## Configurando os dias e horários

Para cada dia da semana, você pode:

- **Ativar ou desativar** o dia (toggle on/off)
- **Definir horário de abertura** e **horário de fechamento**
- **Definir intervalo de almoço** (opcional)

### Exemplo de configuração

| Dia     | Aberto | Abertura | Fechamento | Intervalo     |
| ------- | ------ | -------- | ---------- | ------------- |
| Segunda | ✅     | 08:00    | 18:00      | 12:00 – 13:00 |
| Terça   | ✅     | 08:00    | 18:00      | 12:00 – 13:00 |
| Quarta  | ✅     | 08:00    | 18:00      | 12:00 – 13:00 |
| Quinta  | ✅     | 08:00    | 18:00      | 12:00 – 13:00 |
| Sexta   | ✅     | 08:00    | 17:00      | 12:00 – 13:00 |
| Sábado  | ✅     | 09:00    | 14:00      | —             |
| Domingo | ❌     | —        | —          | —             |

---

## Feriados e dias especiais

Na seção **"Dias especiais"**, você pode bloquear datas específicas do calendário:

1. Clique em **"+ Adicionar data especial"**
2. Selecione a data no calendário
3. Escolha:
   - **Fechado** — O petshop não funciona neste dia
   - **Horário especial** — Funciona em horário diferente do padrão
4. Salve

::: tip
Cadastre com antecedência os feriados locais e nacionais para evitar agendamentos em datas que você não funcionará.
:::

---

## Intervalo entre atendimentos

Em **Configurações → Parâmetros**, você pode definir um **tempo de intervalo** entre um atendimento e o próximo. Isso evita que dois clientes cheguem ao mesmo tempo.

Exemplo: intervalo de 15 minutos → após um atendimento que termina às 10h00, o próximo horário disponível é 10h15.

---

## Comportamento esperado

✅ **Calendário atualizado imediatamente** — Ao salvar o horário, as datas disponíveis no app são atualizadas em tempo real.

✅ **Dias desativados bloqueados** — Se domingo está desativado, nenhum cliente consegue agendar para domingo.

✅ **Horário de fechamento** — O sistema bloqueia automaticamente horários que terminariam após o fechamento. Ex: se você fecha às 18h e o serviço dura 1h, o último horário disponível é 17h.

✅ **Intervalo de almoço** — Horários que caem dentro do intervalo configurado não ficam disponíveis para agendamento.

---

## Perguntas frequentes

**Posso ter horários diferentes por tipo de serviço?**
Não. O horário de funcionamento se aplica ao petshop como um todo. Horários por serviço não são suportados no momento.

**Um cliente agendou para um dia em que vou fechar. O que fazer?**
Cancele o agendamento e notifique o cliente com antecedência. Em seguida, bloqueie a data em "Dias especiais" para evitar novos agendamentos.

**Esqueci de bloquear um feriado e recebi agendamentos. Ainda consigo cancelar?**
Sim. Cancele os agendamentos individualmente pela agenda, com uma mensagem explicando o motivo.
