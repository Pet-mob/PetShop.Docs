# 🧩 Implantação — Documentação Interna

Esta seção é para **desenvolvedores da equipe PetMob**, não para petshops
clientes. Documenta processos internos de implantação da plataforma —
como registrar uma tela nova no sistema de planos, como o catálogo de
funcionalidades é sincronizado entre os repositórios, etc.

## Guias disponíveis

- [Como registrar uma nova funcionalidade/tela](/implantacao/nova-funcionalidade) —
  passo a passo para deixar uma tela nova disponível para configuração
  por plano. **Envie este link para quem acabou de criar uma tela nova.**

## Repositórios envolvidos

| Repositório | Papel |
| --- | --- |
| `PetShop.WebApp` | Front-end (Vue) usado pelos petshops — telas, rotas, menu |
| `Pet.ON.Api` | Back-end — catálogo canônico de funcionalidades, API de planos |
| `implantacao` | Painel administrativo interno — onde se decide quais planos têm quais funcionalidades |
