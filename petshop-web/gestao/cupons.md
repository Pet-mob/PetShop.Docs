# 🏷️ Cupons de Desconto

::: info Disponível nos planos Pro e Elite
Esta funcionalidade está disponível nos planos Pro e Elite.
:::

Cupons de desconto são códigos promocionais que seus clientes usam no momento do agendamento para obter um desconto. São ótimos para campanhas de captação, reativação de clientes inativos e datas especiais.

## Como acessar

Menu lateral → **Gestão → Cupons**

---

## Criando um cupom

1. Clique em **"+ Criar cupom"**
2. Preencha os dados:

| Campo | Obrigatório | Descrição |
|---|---|---|
| **Código** | ✅ Sim | Código que o cliente digitará (ex: BEMVINDO10). Use letras maiúsculas e números. |
| **Tipo de desconto** | ✅ Sim | Percentual (%) ou valor fixo (R$) |
| **Valor do desconto** | ✅ Sim | Ex: 15 (para 15%) ou 20 (para R$20) |
| **Validade** | ✅ Sim | Data de início e data de fim do cupom |
| **Limite de usos** | ❌ Não | Quantas vezes o cupom pode ser usado no total |
| **Limite por cliente** | ❌ Não | Quantas vezes o mesmo cliente pode usar |
| **Valor mínimo** | ❌ Não | Valor mínimo do pedido para o cupom ser válido |
| **Serviços aplicáveis** | ❌ Não | Se vazio, aplica-se a todos os serviços |
| **Ativo** | ✅ Sim | Se deve estar disponível para uso imediatamente |

3. Clique em **"Criar cupom"**

---

## Exemplos práticos de cupons

| Objetivo | Código sugerido | Configuração |
|---|---|---|
| Boas-vindas (novo cliente) | BEMVINDO | 15% de desconto, limite de 1 uso por cliente |
| Reativação | VOLTEI | R$20 de desconto, apenas para quem não agendou há 60 dias |
| Data comemorativa | DIADOPET | 10% de desconto, válido somente no dia do cliente |
| Indicação | TROUXEAMIGO | R$15 de desconto, sem limite de usos |

---

## Gerenciando cupons ativos

A lista exibe todos os cupons criados:

| Coluna | Descrição |
|---|---|
| **Código** | O código do cupom |
| **Desconto** | Valor ou percentual |
| **Validade** | Período de validade |
| **Usos** | Quantas vezes já foi utilizado |
| **Restantes** | Quantos usos ainda disponíveis |
| **Status** | Ativo / Inativo / Expirado |

---

## Desativando um cupom

Para desativar um cupom antes da data de vencimento:
1. Localize o cupom na lista
2. Clique no toggle de **Status**
3. Confirme

Cupons desativados não podem mais ser usados por clientes, mesmo que ainda estejam dentro do prazo de validade.

---

## Como o cliente usa o cupom

1. No app, ao fazer um agendamento
2. Na etapa de confirmação/pagamento
3. Aparece o campo **"Tenho um cupom"**
4. O cliente digita o código e clica em aplicar
5. O desconto é aplicado instantaneamente

---

## Comportamento esperado

✅ **Validação em tempo real** — Ao digitar o código, o app valida se o cupom existe, está ativo e se o cliente atende às condições.

✅ **Desconto no valor final** — O desconto é aplicado sobre o valor do serviço. Se o serviço custa R$80 e o cupom dá 10%, o cliente paga R$72.

✅ **Limite respeitado** — Ao atingir o limite de usos, o cupom é automaticamente desativado.

✅ **Código inválido** — Se o código não existir, estiver expirado ou o cliente não atender às condições, o app exibe uma mensagem clara explicando o motivo.

---

## Perguntas frequentes

**Posso criar um cupom exclusivo para um único cliente?**
Sim. Crie um cupom com código único e defina o limite por cliente como 1.

**O cupom pode ser acumulado com outros descontos ou pontos?**
Por padrão, não. Você pode definir se o cupom é acumulável ao criá-lo.

**Como faço para saber quem usou meu cupom?**
Na tela de cupons, clique em um cupom e selecione **"Ver utilizações"** para ver a lista completa de clientes que usaram.
