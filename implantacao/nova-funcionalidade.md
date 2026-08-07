# 🚦 Como registrar uma nova funcionalidade/tela

Guia para quem acabou de criar uma **tela nova** no `PetShop.WebApp`
(ex.: PDV, um novo relatório, etc.) e precisa deixá-la disponível para
ser liberada por plano (Starter / Pro / Elite).

Sem seguir esses passos, a tela fica **inacessível** para clientes reais
assim que a API de planos responder normalmente — ela só "funciona por
acidente" enquanto o carregamento de funcionalidades ainda não rodou.

::: tip Resumo em 1 frase
Toda tela nova precisa de uma **chave de funcionalidade** cadastrada no
catálogo canônico do back-end. Só depois disso ela aparece no painel
`implantacao` para você decidir em quais planos ela entra.
:::

---

## Visão geral — por que 4 lugares?

O acesso a uma tela é controlado por uma **chave** (ex.: `"pdv"`) que
precisa existir em 4 pontos sincronizados:

| # | Arquivo | Repositório | Papel |
| --- | --- | --- | --- |
| 1 | `src/router/index.js` | `PetShop.WebApp` | Declara a rota e associa a chave via `meta.funcionalidade` |
| 2 | `src/store/useGlobalStore.js` (`CATALOGO_ESTATICO`) | `PetShop.WebApp` | Fallback offline — garante que o menu nunca fique em branco se a API cair |
| 3 | `Pet.ON.Api/Migrations/FuncionalidadeSyncService.cs` | `Pet.ON.Api` | **Catálogo canônico real.** Sincronizado no banco a cada start da API |
| 4 | `src/config/planos.config.js` | `PetShop.WebApp` | Documentação / "regra de ouro" (não afeta runtime, mas deve ficar em sincronia) |

A **associação da chave a um plano específico** (quem ganha a
funcionalidade) **não é feita em nenhum desses 4 arquivos** — isso é
feito depois, na tela **`/menus-por-plano`** do painel `implantacao`.

---

## Passo a passo

### 1. Criar a rota no `PetShop.WebApp`

Em `src/router/index.js`, adicione a rota com `meta.funcionalidade`
apontando para a nova chave (use `snake_case`):

```js
{
  path: "/pdv",
  name: "Pdv",
  component: () => import("@/pages/PdvPage.vue"),
  meta: {
    menu: true,           // aparece no MenuHorizontal
    label: "PDV",         // texto do menu
    icon: "ShoppingCart",  // nome do ícone (lucide-vue-next)
    grupo: "principal",    // principal | clientes | gestao
    funcionalidade: "pdv", // a chave — precisa bater com os outros 3 arquivos
  },
},
```

O guard global (`router.beforeEach`) já bloqueia automaticamente
qualquer rota cuja `meta.funcionalidade` não esteja na lista de
funcionalidades da empresa logada — não precisa escrever lógica de
bloqueio manualmente.

### 2. Adicionar o fallback em `useGlobalStore.js`

Em `src/store/useGlobalStore.js`, dentro de `CATALOGO_ESTATICO`,
adicione a mesma chave (é o que garante que o menu não suma se a API
de planos estiver fora do ar):

```js
pdv: {
  label: "PDV",
  icone: "ShoppingCart",
  rota: "/pdv",
  grupo: "principal",
  ordem: 5, // próximo número livre dentro do grupo
},
```

### 3. Registrar no catálogo canônico (back-end)

Em `Pet.ON.Api/Pet.ON.Api/Migrations/FuncionalidadeSyncService.cs`,
adicione uma linha na lista `_catalogo`, dentro do grupo correto:

```csharp
// Chave | Label | Descricao | Grupo | IsMenu | Rota | Icone | Ordem
new("pdv", "PDV", "Ponto de venda para dar saída de estoque no balcão", "principal", true, "/pdv", "ShoppingCart", 5),
```

Esse serviço roda a cada startup da API e faz `INSERT` da chave na
tabela `funcionalidades` **se ela ainda não existir** — nunca deleta,
nunca sobrescreve `label`/`descricao` de registros já existentes.
É só depois do próximo deploy/restart da API que a chave passa a
existir no banco.

Funcionalidades que **não** têm tela própria (ex.: flags internas)
usam `Grupo = null`, `IsMenu = false`, `Rota = null`, `Icone = null`,
`Ordem = 0` — veja os exemplos existentes no próprio arquivo
(`animais`, `vacinas`, `financeiro`, etc.).

### 4. Atualizar a documentação do front (`planos.config.js`)

Em `src/config/planos.config.js`, adicione a chave em `FUNCIONALIDADES`:

```js
pdv: {
  label: "PDV",
  descricao: "Ponto de venda para dar saída de estoque no balcão",
  grupo: "principal",
  menu: true,
},
```

::: warning Atenção ao plano Elite
`PLANOS.elite.funcionalidades` é definido como `Object.keys(FUNCIONALIDADES)`
— ou seja, **toda chave nova cai automaticamente "no Elite" neste
arquivo de documentação**. Isso não afeta o runtime real (que é a
tabela `planos.funcionalidades` no banco, controlada pelo painel
`implantacao`), mas mantenha em mente ao ler este arquivo depois.
:::

Não é necessário adicionar a chave em `PLANOS.starter.funcionalidades`
nem `PLANOS.pro.funcionalidades` neste passo — isso é decidido no
próximo passo, pela pessoa responsável pelos planos.

### 5. Deploy/restart do `Pet.ON.Api`

Depois que o passo 3 for para produção (ou homologação) e a API
reiniciar, o `FuncionalidadeSyncService` roda automaticamente e insere
a chave na tabela `funcionalidades`.

### 6. Liberar para os planos desejados

Acesse o painel **`implantacao`** → tela **`/menus-por-plano`** →
marque os checkboxes dos planos (Starter / Pro / Elite) que devem ter
acesso à nova funcionalidade → salvar.

Isso grava a chave no CSV `planos.funcionalidades` no banco — é esse
CSV que a API devolve em `GET /api/planos/menu-acessos?cnpj=...` e que
o front usa em tempo real para liberar/bloquear o menu e a rota.

::: tip Não precisa de SQL manual
Os passos acima substituem qualquer necessidade de rodar `UPDATE` manual
na tabela `planos`. O único código que se escreve é o item do catálogo
(passo 3) — a associação a planos é 100% feita pela UI do painel
`implantacao`.
:::

### 7. Testar

- Empresa em um plano que **não** tem a funcionalidade → o menu não
  aparece e a rota redireciona para `/inicio`.
- Empresa em um plano que **tem** a funcionalidade → menu e rota
  funcionam normalmente.
- Se quiser simular "API de planos fora do ar", veja o comportamento
  do fallback: `store.funcionalidades` vazio libera tudo (evita tela
  em branco), então esse cenário **não** serve para validar bloqueio —
  só serve para confirmar que o menu não desaparece.

---

## Checklist rápido (copiar e colar)

- [ ] Rota adicionada em `PetShop.WebApp/src/router/index.js` com `meta.funcionalidade`
- [ ] Entrada adicionada em `useGlobalStore.js` → `CATALOGO_ESTATICO`
- [ ] Entrada adicionada em `Pet.ON.Api/Migrations/FuncionalidadeSyncService.cs`
- [ ] Entrada adicionada em `PetShop.WebApp/src/config/planos.config.js` → `FUNCIONALIDADES`
- [ ] Deploy/restart do `Pet.ON.Api` feito (ou confirmado que vai rodar no próximo deploy)
- [ ] Planos liberados na tela `/menus-por-plano` do painel `implantacao`
- [ ] Testado com uma empresa de cada plano relevante

---

## Perguntas frequentes

**A chave precisa ser igual em todos os arquivos?**
Sim, exatamente igual (mesma string, `snake_case`). É a chave que
conecta a rota (front) à linha da tabela `funcionalidades` (back).

**Posso pular o passo 4 (`planos.config.js`)?**
Tecnicamente sim — esse arquivo não é importado em nenhum outro lugar
do código, é só documentação. Mas ele existe justamente para alguém
conseguir ler "quais planos têm o quê" sem abrir o banco, então vale
manter atualizado.

**O que significa `grupo`?**
É a seção do menu horizontal onde o item aparece: `principal`,
`clientes` ou `gestao`. Precisa ser o mesmo valor usado no
`MenuHorizontal.vue` e na tela `/menus-por-plano`.

**E se eu esquecer o passo 3 (back-end)?**
A chave nunca é criada na tabela `funcionalidades`, então ela nunca
aparece no painel `implantacao` para ser liberada — a tela fica
bloqueada para sempre (exceto no cenário de fallback do passo 7).

**Onde fica o painel `implantacao`?**
É um projeto separado (`C:\Castanheira Holding\implantacao`), com seu
próprio deploy — peça o link de acesso a quem administra os planos.
