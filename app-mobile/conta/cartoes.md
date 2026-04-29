# 💳 Meus Cartões

A tela de Meus Cartões permite cadastrar cartões de crédito ou débito para pagamento rápido nos agendamentos que suportam pagamento pelo app.

## Como acessar

Toque em **Perfil → Meus Cartões**

---

## Adicionando um cartão

1. Toque em **"+ Adicionar cartão"**
2. Preencha os dados:

| Campo                | Descrição                         |
| -------------------- | --------------------------------- |
| **Número do cartão** | 16 dígitos                        |
| **Nome no cartão**   | Exatamente como aparece no cartão |
| **Validade**         | MM/AA                             |
| **CVV**              | 3 ou 4 dígitos                    |

3. Toque em **"Salvar cartão"**

::: info Segurança
Os dados do cartão são processados com criptografia pelo Stripe — uma das plataformas de pagamento mais seguras do mundo. O app **não armazena** o número completo do cartão, apenas os últimos 4 dígitos para identificação.
:::

---

## Cartão principal

Se você tiver mais de um cartão, pode definir um como **"Principal"**. Ele será selecionado automaticamente na hora do pagamento.

Para definir:

1. Toque e segure o cartão desejado
2. Toque em **"Definir como principal"**

---

## Removendo um cartão

1. Toque e segure o cartão que deseja remover
2. Toque em **"Remover cartão"**
3. Confirme

---

## Usando o cartão em um agendamento

Na etapa de confirmação do agendamento (quando o petshop aceita pagamento pelo app):

1. A seção **"Pagamento"** exibe seus cartões cadastrados
2. Selecione o cartão desejado
3. O pagamento é processado ao confirmar o agendamento

---

## Comportamento esperado

✅ **Tokenização** — O cartão é armazenado de forma segura como um token criptografado.

✅ **Bandeiras aceitas** — Visa, Mastercard, Elo, American Express e Hipercard.

✅ **Expiração do cartão** — Quando a data de validade do cartão passa, ele é marcado como "Expirado" e você é notificado para atualizar.

---

## Perguntas frequentes

**É seguro salvar o cartão no app?**
Sim. O processamento é feito pelo Stripe, que é certificado PCI DSS Nível 1 — o mais alto nível de segurança para dados de cartão.

**Posso pagar sem cartão salvo?**
Sim. Se preferir não salvar, você pode digitar os dados na hora do pagamento sem salvar para o futuro.

**O petshop vê meus dados de cartão?**
Não. O petshop apenas recebe a confirmação do pagamento. Os dados do cartão ficam exclusivamente entre você e o processador de pagamento.
