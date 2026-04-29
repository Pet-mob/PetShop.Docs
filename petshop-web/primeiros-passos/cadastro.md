# 📝 Cadastro do Petshop

A tela de cadastro é o primeiro passo para o seu petshop entrar na plataforma **PetMob**. Preencha com atenção — essas informações aparecem para os clientes no app.

## Como acessar

Acesse **https://petshop.petmob.com.br** e clique em **"Criar conta"** na tela de login.

---

## Passo a passo

### 1. Informações da empresa

Preencha os dados do seu petshop:

| Campo               | Obrigatório | O que preencher                                |
| ------------------- | ----------- | ---------------------------------------------- |
| **Nome do Petshop** | ✅ Sim      | Nome fantasia, como aparecerá para os clientes |
| **CNPJ**            | ✅ Sim      | Apenas números, sem pontos ou traços           |
| **E-mail**          | ✅ Sim      | E-mail para login e comunicações               |
| **Telefone**        | ✅ Sim      | WhatsApp ou telefone principal                 |
| **Senha**           | ✅ Sim      | Mínimo 8 caracteres                            |
| **Confirmar senha** | ✅ Sim      | Deve ser igual ao campo senha                  |

### 2. Endereço

| Campo           | Obrigatório | Observação                                                         |
| --------------- | ----------- | ------------------------------------------------------------------ |
| **CEP**         | ✅ Sim      | Ao digitar o CEP, os demais campos são preenchidos automaticamente |
| **Rua**         | ✅ Sim      |                                                                    |
| **Número**      | ✅ Sim      |                                                                    |
| **Complemento** | ❌ Não      | Ex: Sala 2, Loja 3                                                 |
| **Bairro**      | ✅ Sim      |                                                                    |
| **Cidade**      | ✅ Sim      |                                                                    |
| **Estado**      | ✅ Sim      |                                                                    |

### 3. Confirmar cadastro

Após preencher tudo, clique em **"Criar conta"**. Você será redirecionado para a tela de sucesso.

---

## Comportamento esperado

✅ **CEP preenchido automaticamente** — Ao digitar o CEP e pressionar Tab ou sair do campo, o endereço é consultado automaticamente via API dos Correios.

✅ **Validação de CNPJ** — O sistema valida se o CNPJ é válido antes de prosseguir.

✅ **E-mail único** — Se o e-mail já estiver cadastrado, o sistema avisa e impede duplicatas.

✅ **Senha segura** — O campo mostra um indicador de força da senha.

✅ **Após o cadastro** — Você é redirecionado para a tela de **Configuração Inicial** para completar seu perfil antes de aceitar agendamentos.

---

## O que acontece depois?

1. Conta criada com sucesso → tela de confirmação
2. Você recebe um e-mail de boas-vindas
3. É redirecionado para o **Onboarding** — guia passo a passo para configurar seu petshop
4. Configure seus **serviços**, **horários** e **link de agendamento** antes de divulgar

::: warning Importante
Seu petshop **não aparece para clientes** até você completar as configurações básicas (serviços e horários de funcionamento).
:::

---

## Perguntas frequentes

**Preciso ter CNPJ para me cadastrar?**
Sim. O CNPJ é obrigatório para validar o estabelecimento na plataforma PetMob.

**Posso alterar meu e-mail depois?**
Sim. Acesse **Configurações → Dados da Empresa** para atualizar suas informações a qualquer momento.

**Esqueci minha senha logo após o cadastro. O que fazer?**
Na tela de login, clique em **"Esqueci minha senha"** e informe seu e-mail para receber o link de recuperação.
