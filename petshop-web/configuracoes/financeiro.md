# 💰 Financeiro

A tela Financeiro centraliza todo o histórico de cobranças da sua assinatura PetMob — faturas emitidas, pagamentos realizados e documentos fiscais.

## Como acessar

Menu lateral → **Configurações → Financeiro**

---

## Histórico de faturas

A tabela de faturas exibe todas as cobranças realizadas:

| Coluna          | Descrição                              |
| --------------- | -------------------------------------- |
| **Competência** | Mês/ano a que a fatura se refere       |
| **Vencimento**  | Data de vencimento da cobrança         |
| **Valor**       | Valor cobrado                          |
| **Status**      | Pago / Pendente / Atrasado / Cancelado |
| **Ações**       | Baixar PDF / Emitir NF                 |

---

## Status das faturas

| Status        | Cor         | Significado                           |
| ------------- | ----------- | ------------------------------------- |
| **Pago**      | 🟢 Verde    | Pagamento confirmado                  |
| **Pendente**  | 🟡 Amarelo  | Ainda não venceu                      |
| **Atrasado**  | 🔴 Vermelho | Passou da data sem pagamento          |
| **Cancelado** | ⚫ Cinza    | Fatura cancelada (ex: após downgrade) |

---

## Baixando faturas

Para cada fatura paga, você pode baixar o comprovante:

1. Localize a fatura na lista
2. Clique em **"Baixar PDF"**
3. O documento é baixado automaticamente

---

## Método de pagamento

A seção de método de pagamento exibe o cartão atualmente cadastrado (últimos 4 dígitos).

Para **alterar o cartão**:

1. Clique em **"Alterar cartão"**
2. Preencha os dados do novo cartão
3. Clique em **"Salvar"**

O novo cartão será usado nas próximas cobranças.

::: info
Os dados do cartão são processados com segurança pela plataforma de pagamentos Stripe. O PetMob não armazena os dados completos do seu cartão.
:::

---

## Comportamento esperado

✅ **Cobrança automática** — A cobrança é feita automaticamente na data de renovação.

✅ **E-mail de confirmação** — A cada pagamento realizado, você recebe um e-mail de confirmação com o recibo.

✅ **Alerta de cartão vencido** — Se o cartão expirar, você é notificado com antecedência para atualizar antes da próxima cobrança.

---

## Perguntas frequentes

**Preciso de nota fiscal para fins contábeis. Como solicitar?**
Clique em **"Emitir NF"** ao lado da fatura desejada. A nota fiscal é gerada em formato PDF.

**Tive um problema com uma cobrança indevida. O que fazer?**
Entre em contato pelo suporte em **Configurações → Fale Conosco** informando o número da fatura e o problema.
