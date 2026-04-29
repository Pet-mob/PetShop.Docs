#!/bin/bash
# =============================================================
# ec2-setup-docs.sh
# Setup inicial da EC2 para hospedar o PetShop.Docs (VitePress)
# Execute UMA ÚNICA VEZ após provisionar a instância:
#   bash ec2-setup-docs.sh
# =============================================================

set -e

DOMAIN="docs.petmob.com.br"
WEBROOT="/var/www/petshop-docs"

echo "=== [1/6] Atualizando pacotes ==="
sudo apt update && sudo apt upgrade -y

echo "=== [2/6] Instalando Nginx ==="
sudo apt install -y nginx

echo "=== [3/6] Criando diretório de deploy ==="
sudo mkdir -p "$WEBROOT"
sudo chown -R ubuntu:ubuntu "$WEBROOT"

echo "=== [4/6] Configurando Nginx ==="
sudo tee /etc/nginx/sites-available/petshop-docs > /dev/null << EOF
server {
    listen 80;
    server_name $DOMAIN;

    root $WEBROOT;
    index index.html;

    # VitePress — todas as rotas servem index.html
    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Assets com hash gerados pelo VitePress — cache longo
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # index.html — sem cache para sempre servir a versão mais recente
    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # Segurança
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Compressão gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript
               text/xml application/xml application/xml+rss text/javascript;
}
EOF

echo "=== [5/6] Ativando site no Nginx ==="
sudo ln -sf /etc/nginx/sites-available/petshop-docs /etc/nginx/sites-enabled/petshop-docs
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl enable nginx
sudo systemctl restart nginx

echo "=== [6/6] Verificando status ==="
sudo systemctl status nginx --no-pager

PUBLIC_IP=$(curl -s ifconfig.me)
echo ""
echo "✅ EC2 pronta para o PetShop.Docs!"
echo "   IP público: $PUBLIC_IP"
echo "   Aponte o DNS do Cloudflare: $DOMAIN → $PUBLIC_IP"
echo ""
echo "⚠️  PRÓXIMOS PASSOS:"
echo "   1. Configure o DNS no Cloudflare (ver DEPLOY.md)"
echo "   2. Configure os GitHub Secrets (ver DEPLOY.md)"
echo "   3. Faça um push na branch main para disparar o deploy"
