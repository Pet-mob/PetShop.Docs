# 🚀 Deploy — PetShop.Docs

Guia completo para subir o PetShop.Docs na infraestrutura PetMob: **EC2 + Nginx + Cloudflare + GitHub Actions**.

---

## Visão geral da arquitetura

```
GitHub (push main)
    │
    ▼
GitHub Actions
    │  npm ci → npm run docs:build → tar dist
    │  scp dist.tar.gz → EC2
    │  ssh: extrai e recarrega nginx
    │
    ▼
EC2 (Ubuntu) — Nginx
    │  /var/www/petshop-docs/   ← arquivos estáticos do VitePress
    │  porta 80 → Cloudflare proxy
    │
    ▼
Cloudflare
    │  DNS: docs.petmob.com.br → IP da EC2
    │  SSL/TLS: modo "Full" (HTTPS para o usuário)
    │  Cache de assets estáticos
    │
    ▼
Usuário: https://docs.petmob.com.br
```

---

## Pré-requisitos

- [ ] Instância EC2 criada (Ubuntu 22.04 LTS, t3.micro é suficiente)
- [ ] Par de chaves SSH da EC2 disponível (arquivo `.pem`)
- [ ] Acesso ao DNS do Cloudflare (zona `petmob.com.br`)
- [ ] Repositório `Pet-mob/PetShop.Docs` no GitHub com permissão de Actions

---

## Passo 1 — Configurar a EC2

### 1.1 Conectar na instância

```bash
ssh -i sua-chave.pem ubuntu@<IP_DA_EC2>
```

### 1.2 Fazer upload e executar o script de setup

Do seu computador local:

```bash
scp -i sua-chave.pem ec2-setup-docs.sh ubuntu@<IP_DA_EC2>:~/
ssh -i sua-chave.pem ubuntu@<IP_DA_EC2> "bash ~/ec2-setup-docs.sh"
```

O script instala o Nginx, cria o diretório `/var/www/petshop-docs` e configura o virtual host para `docs.petmob.com.br`.

### 1.3 Anotar o IP público

```bash
curl ifconfig.me
```

Guarde esse IP — você vai usá-lo no Cloudflare e no GitHub Secrets.

---

## Passo 2 — Configurar o Cloudflare

1. Acesse [dash.cloudflare.com](https://dash.cloudflare.com)
2. Selecione a zona **petmob.com.br**
3. Vá em **DNS → Registros**
4. Adicione o registro:

| Tipo | Nome   | Conteúdo      | Proxy              |
| ---- | ------ | ------------- | ------------------ |
| `A`  | `docs` | `<IP_DA_EC2>` | ☁️ Ativo (laranja) |

5. Vá em **SSL/TLS → Visão geral**
6. Defina o modo como **Full** _(não "Full (strict)" ainda — a EC2 não tem certificado local)_

> **Por que proxy ativo?**  
> Com o proxy do Cloudflare ativado, o HTTPS é gerenciado pelo Cloudflare automaticamente. A EC2 recebe tráfego na porta 80 vindo dos IPs do Cloudflare, e o usuário final acessa via HTTPS sem precisar do Certbot na EC2.

### 2.1 Regra de cache (opcional, recomendado)

Em **Rules → Cache Rules**, crie uma regra:

- **Condição:** `docs.petmob.com.br` e caminho `/_vitepress/assets/*`
- **Ação:** Cache Level = Cache Everything, Edge TTL = 1 mês

---

## Passo 3 — Configurar GitHub Secrets

No repositório `Pet-mob/PetShop.Docs`:

1. Vá em **Settings → Secrets and variables → Actions**
2. Clique em **New repository secret**
3. Adicione os dois secrets abaixo:

| Secret        | Valor                                               |
| ------------- | --------------------------------------------------- |
| `EC2_HOST`    | IP público da instância EC2                         |
| `EC2_SSH_KEY` | Conteúdo completo do arquivo `.pem` (chave privada) |

> **Como copiar a chave SSH:**
>
> ```bash
> # No Windows PowerShell:
> Get-Content "C:\caminho\para\sua-chave.pem" | Set-Clipboard
> ```
>
> Cole o conteúdo completo (incluindo `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----`) no campo do secret.

---

## Passo 4 — Primeiro deploy

Com os secrets configurados, faça um push na branch `main`:

```bash
cd "C:\Castanheira Holding\PetShop.Docs"
git add .
git commit -m "chore: trigger first deploy"
git push
```

Acompanhe em: `https://github.com/Pet-mob/PetShop.Docs/actions`

---

## Passo 5 — Verificar o deploy

1. Acesse `http://docs.petmob.com.br` — deve redirecionar para HTTPS e exibir a documentação
2. Verifique o certificado SSL (cadeado no navegador)
3. Confirme que a busca funciona e a navegação lateral está correta

---

## Como funciona o deploy automático

```
git push → main
    └─ GitHub Actions dispara
        ├─ npm ci (instala dependências)
        ├─ npm run docs:build (gera .vitepress/dist/)
        ├─ tar -czf dist.tar.gz (empacota)
        ├─ scp → EC2 /tmp/dist.tar.gz
        └─ ssh EC2:
            ├─ rm -rf /var/www/petshop-docs/*
            ├─ tar -xzf dist.tar.gz -C /var/www/petshop-docs/
            └─ nginx reload
```

**Tempo médio de deploy:** ~2 minutos.

---

## Rollback manual

Se um deploy quebrar o site:

```bash
ssh -i sua-chave.pem ubuntu@<IP_DA_EC2>

# Listar backups (se existirem) ou
# Fazer novo push para reverter o código no GitHub
```

Para proteção futura, adicione backup automático no workflow (ver seção Melhorias).

---

## Arquivos deste repositório relacionados ao deploy

| Arquivo                        | Finalidade                          |
| ------------------------------ | ----------------------------------- |
| `.github/workflows/deploy.yml` | Pipeline CI/CD do GitHub Actions    |
| `nginx.conf`                   | Configuração de referência do Nginx |
| `ec2-setup-docs.sh`            | Script de setup inicial da EC2      |
| `DEPLOY.md`                    | Este guia                           |

---

## Solução de problemas

**Deploy rodou mas o site não atualizou**

- Verifique se o Cloudflare está com cache antigo: `Caching → Purge Everything`

**Erro: Permission denied (publickey)**

- Confirme que o conteúdo do `EC2_SSH_KEY` está completo, incluindo as linhas `-----BEGIN/END-----`
- Verifique se o usuário é `ubuntu` (não `ec2-user`)

**Nginx retorna 403 ou 404**

- Conecte na EC2 e verifique: `ls -la /var/www/petshop-docs/`
- Confirme que o index.html existe no diretório

**Site abre em HTTP e não redireciona para HTTPS**

- No Cloudflare: **SSL/TLS → Edge Certificates → Always Use HTTPS** → Ativar

---

## Melhorias futuras (automação)

Ver seção [Automatizando múltiplos projetos](#automatizando-múltiplos-projetos) abaixo.

---

## Automatizando múltiplos projetos

Para novos projetos de documentação ou frontend estático na PetMob, o padrão é sempre o mesmo. O que muda entre projetos:

| Variável         | PetShop.Docs            | Próximo projeto       |
| ---------------- | ----------------------- | --------------------- |
| Subdomínio       | `docs.petmob.com.br`    | `outro.petmob.com.br` |
| Diretório EC2    | `/var/www/petshop-docs` | `/var/www/outro`      |
| Build output     | `.vitepress/dist`       | `dist/`               |
| Comando de build | `npm run docs:build`    | `npm run build`       |

### Reuso com GitHub Actions Reusable Workflows

Crie em `Pet-mob/.github` (repositório de organização) o arquivo `workflows/deploy-static.yml`:

```yaml
# .github/workflows/deploy-static.yml (repositório Pet-mob/.github)
on:
  workflow_call:
    inputs:
      build_command:
        required: true
        type: string
      dist_folder:
        required: true
        type: string
      webroot:
        required: true
        type: string
    secrets:
      EC2_HOST:
        required: true
      EC2_SSH_KEY:
        required: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
      - run: npm ci
      - run: ${{ inputs.build_command }}
      - run: tar -czf dist.tar.gz -C ${{ inputs.dist_folder }} .
      - uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ubuntu
          key: ${{ secrets.EC2_SSH_KEY }}
          source: "dist.tar.gz"
          target: "/tmp/"
      - uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ubuntu
          key: ${{ secrets.EC2_SSH_KEY }}
          script: |
            rm -rf ${{ inputs.webroot }}/*
            tar -xzf /tmp/dist.tar.gz -C ${{ inputs.webroot }}/
            rm -f /tmp/dist.tar.gz
            sudo nginx -t && sudo systemctl reload nginx
```

Depois, em cada novo projeto, o `deploy.yml` fica com apenas 10 linhas:

```yaml
# Em qualquer projeto novo
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    uses: Pet-mob/.github/.github/workflows/deploy-static.yml@main
    with:
      build_command: npm run docs:build
      dist_folder: .vitepress/dist
      webroot: /var/www/petshop-docs
    secrets:
      EC2_HOST: ${{ secrets.EC2_HOST }}
      EC2_SSH_KEY: ${{ secrets.EC2_SSH_KEY }}
```

Isso significa que qualquer ajuste no processo de deploy (ex: adicionar notificação no Slack, backup antes de sobrescrever) é feito **uma única vez** no workflow central e se aplica a todos os projetos automaticamente.
