import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PetMob — Central de Ajuda',
  description: 'Documentação oficial da plataforma PetMob para petshops e tutores',
  lang: 'pt-BR',

  head: [
    ['meta', { name: 'theme-color', content: '#7C3AED' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'PetMob Docs',

    nav: [
      { text: '🏠 Início', link: '/' },
      {
        text: '🖥️ Petshop Web',
        link: '/petshop-web/',
        activeMatch: '/petshop-web/'
      },
      {
        text: '📱 App Mobile',
        link: '/app-mobile/',
        activeMatch: '/app-mobile/'
      },
      {
        text: '🌐 Portal Público',
        link: '/portal/',
        activeMatch: '/portal/'
      }
    ],

    sidebar: {
      '/petshop-web/': [
        {
          text: '🚀 Primeiros Passos',
          collapsed: false,
          items: [
            { text: 'Visão Geral do Sistema', link: '/petshop-web/' },
            { text: 'Cadastro do Petshop', link: '/petshop-web/primeiros-passos/cadastro' },
            { text: 'Login', link: '/petshop-web/primeiros-passos/login' },
            { text: 'Recuperar Senha', link: '/petshop-web/primeiros-passos/recuperar-senha' },
            { text: 'Onboarding — Configuração Guiada', link: '/petshop-web/primeiros-passos/onboarding' },
            { text: 'Configuração Inicial', link: '/petshop-web/primeiros-passos/configuracao-inicial' },
          ]
        },
        {
          text: '📊 Dashboard',
          collapsed: false,
          items: [
            { text: 'Visão Geral', link: '/petshop-web/dashboard/' },
          ]
        },
        {
          text: '📅 Agenda',
          collapsed: false,
          items: [
            { text: 'Visualizar Agenda', link: '/petshop-web/agenda/visualizar' },
            { text: 'Confirmar Agendamentos', link: '/petshop-web/agenda/confirmar' },
            { text: 'Acompanhamento em Tempo Real', link: '/petshop-web/agenda/acompanhamento' },
          ]
        },
        {
          text: '👥 Clientes',
          collapsed: false,
          items: [
            { text: 'Histórico de Atendimentos', link: '/petshop-web/clientes/historico' },
            { text: 'Meus Pets (Animais)', link: '/petshop-web/clientes/animais' },
            { text: 'Avaliações', link: '/petshop-web/clientes/avaliacoes' },
            { text: 'Programa de Fidelidade', link: '/petshop-web/clientes/fidelidade' },
          ]
        },
        {
          text: '⚙️ Gestão',
          collapsed: false,
          items: [
            { text: 'Funcionários', link: '/petshop-web/gestao/funcionarios' },
            { text: 'Relatórios', link: '/petshop-web/gestao/relatorios' },
            { text: 'Relatórios Avançados', link: '/petshop-web/gestao/relatorios-avancados' },
            { text: 'Comparar Petshops', link: '/petshop-web/gestao/comparar' },
            { text: 'Estoque', link: '/petshop-web/gestao/estoque' },
            { text: 'Combos de Serviços', link: '/petshop-web/gestao/combos' },
            { text: 'Cupons de Desconto', link: '/petshop-web/gestao/cupons' },
            { text: 'Promoções', link: '/petshop-web/gestao/promocoes' },
          ]
        },
        {
          text: '🔧 Configurações',
          collapsed: false,
          items: [
            { text: 'Dados da Empresa', link: '/petshop-web/configuracoes/dados-empresa' },
            { text: 'Horário de Funcionamento', link: '/petshop-web/configuracoes/horario' },
            { text: 'Serviços e Preços', link: '/petshop-web/configuracoes/servicos' },
            { text: 'Link de Agendamento', link: '/petshop-web/configuracoes/link-agendamento' },
            { text: 'Parâmetros', link: '/petshop-web/configuracoes/parametros' },
            { text: 'Boost de Visibilidade', link: '/petshop-web/configuracoes/boost' },
            { text: 'Planos e Preços', link: '/petshop-web/configuracoes/planos' },
            { text: 'Assinatura', link: '/petshop-web/configuracoes/assinatura' },
            { text: 'Financeiro', link: '/petshop-web/configuracoes/financeiro' },
            { text: 'Contrato', link: '/petshop-web/configuracoes/contrato' },
            { text: 'Fale Conosco', link: '/petshop-web/configuracoes/suporte' },
          ]
        }
      ],

      '/app-mobile/': [
        {
          text: '🚀 Primeiros Passos',
          collapsed: false,
          items: [
            { text: 'Sobre o App PetMob', link: '/app-mobile/' },
            { text: 'Cadastro e Login', link: '/app-mobile/primeiros-passos/cadastro' },
            { text: 'Adicionar seu Pet', link: '/app-mobile/primeiros-passos/adicionar-pet' },
          ]
        },
        {
          text: '🏠 Tela Principal',
          collapsed: false,
          items: [
            { text: 'Home — Tela Inicial', link: '/app-mobile/home/' },
            { text: 'Buscar Petshops', link: '/app-mobile/home/buscar' },
            { text: 'Perfil do Petshop', link: '/app-mobile/home/perfil-empresa' },
          ]
        },
        {
          text: '📅 Agendamentos',
          collapsed: false,
          items: [
            { text: 'Fazer um Agendamento', link: '/app-mobile/agendamentos/novo' },
            { text: 'Acompanhar Status', link: '/app-mobile/agendamentos/status' },
            { text: 'Histórico de Agendamentos', link: '/app-mobile/agendamentos/historico' },
          ]
        },
        {
          text: '🐾 Meus Pets',
          collapsed: false,
          items: [
            { text: 'Gerenciar Pets', link: '/app-mobile/meus-pets/gerenciar' },
            { text: 'Carteira de Vacinação', link: '/app-mobile/meus-pets/vacinacao' },
          ]
        },
        {
          text: '🎁 Fidelidade',
          collapsed: false,
          items: [
            { text: 'Programa de Pontos', link: '/app-mobile/fidelidade/pontos' },
          ]
        },
        {
          text: '👤 Minha Conta',
          collapsed: false,
          items: [
            { text: 'Dados da Conta', link: '/app-mobile/conta/dados' },
            { text: 'Meus Cartões', link: '/app-mobile/conta/cartoes' },
            { text: 'Notificações', link: '/app-mobile/conta/notificacoes' },
          ]
        }
      ],

      '/portal/': [
        {
          text: '🌐 Portal de Agendamento',
          collapsed: false,
          items: [
            { text: 'O que é o Portal', link: '/portal/' },
            { text: 'Agendar pelo Portal', link: '/portal/agendamento' },
            { text: 'Consultar Histórico', link: '/portal/historico' },
            { text: 'Avaliar Atendimento', link: '/portal/avaliacao' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pet-mob' }
    ],

    footer: {
      message: 'Desenvolvido com ❤️ pela equipe PetMob',
      copyright: '© 2026 PetMob — Todos os direitos reservados'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Pesquisar',
                buttonAriaLabel: 'Pesquisar na documentação'
              },
              modal: {
                noResultsText: 'Nenhum resultado para',
                resetButtonTitle: 'Limpar pesquisa',
                footer: {
                  selectText: 'para selecionar',
                  navigateText: 'para navegar',
                  closeText: 'para fechar'
                }
              }
            }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/pet-mob/petmob-docs/edit/main/:path',
      text: 'Editar esta página'
    },

    lastUpdated: {
      text: 'Atualizado em',
    },

    docFooter: {
      prev: 'Página anterior',
      next: 'Próxima página'
    },

    outline: {
      label: 'Nesta página'
    }
  }
})
