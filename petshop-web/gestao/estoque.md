# 📦 Estoque

::: info Disponível nos planos Pro e Elite
Esta funcionalidade está disponível nos planos Pro e Elite.
:::

A tela de Estoque permite controlar os produtos e insumos utilizados nos seus serviços — shampoos, condicionadores, perfumes, acessórios e qualquer material de consumo.

## Como acessar

Menu lateral → **Gestão → Estoque**

---

## Cadastrando um produto

1. Clique em **"+ Adicionar produto"**
2. Preencha os dados:

| Campo                 | Obrigatório | Descrição                             |
| --------------------- | ----------- | ------------------------------------- |
| **Nome do produto**   | ✅ Sim      | Ex: Shampoo Anti-pulga 500ml          |
| **Categoria**         | ✅ Sim      | Higiene, Perfumaria, Acessórios, etc. |
| **Unidade de medida** | ✅ Sim      | Unidade, mL, kg, etc.                 |
| **Quantidade atual**  | ✅ Sim      | Estoque atual                         |
| **Estoque mínimo**    | ✅ Sim      | Abaixo desse valor, o sistema alerta  |
| **Preço de custo**    | ❌ Não      | Valor pago por unidade                |
| **Fornecedor**        | ❌ Não      | Nome do fornecedor                    |

3. Clique em **"Salvar"**

---

## Movimentando o estoque

### Entrada (compra de produto)

1. Localize o produto na lista
2. Clique em **"Registrar entrada"**
3. Informe a quantidade recebida
4. Informe o valor pago (opcional)
5. Confirme

### Saída (uso em atendimento)

1. Localize o produto
2. Clique em **"Registrar saída"**
3. Informe a quantidade utilizada
4. Associe a um atendimento (opcional)
5. Confirme

---

## Alertas de estoque baixo

Quando um produto fica **abaixo do estoque mínimo** definido:

- Um badge de alerta aparece no menu lateral ao lado de "Estoque"
- Na tela, o produto fica destacado em amarelo/laranja
- Você recebe uma notificação no painel

::: warning
Fique atento aos alertas de estoque para não ser pego de surpresa em dias de alta demanda.
:::

---

## Relatório de consumo

A tela exibe um resumo do consumo por período:

| Coluna                 | Descrição                    |
| ---------------------- | ---------------------------- |
| **Produto**            | Nome do produto              |
| **Consumo no período** | Quantidade utilizada         |
| **Custo total**        | Custo dos insumos no período |
| **Estoque atual**      | Saldo disponível             |

---

## Comportamento esperado

✅ **Alerta em tempo real** — O alerta de estoque mínimo aparece no mesmo momento em que o estoque cai abaixo do limite.

✅ **Histórico de movimentações** — Toda entrada e saída fica registrada com data, hora e usuário responsável.

✅ **Estoque negativo** — O sistema não permite estoque negativo. Se tentar registrar uma saída maior que o estoque, um aviso é exibido.

---

## Perguntas frequentes

**O sistema faz pedido automático ao fornecedor?**
Não. O sistema notifica que o estoque está baixo, mas o pedido precisa ser feito manualmente.

**Posso vincular o consumo de produto a um serviço específico?**
Sim. Ao registrar uma saída, você pode associar ao serviço e ao atendimento para ter o custo real de cada serviço.
