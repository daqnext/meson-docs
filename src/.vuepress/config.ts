const { description } = require('../../package')

// https://github.com/vuepress/vuepress-next/blob/98b7a57856c7b81a82291642e3cf7218699f3523/packages/%40vuepress/markdown/src/utils/slugify.ts
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

module.exports = {
    locales: {
    '/': {
        lang: 'en-US',
        title: 'Meson Network',
        description: description,
    },
    '/ru/': {
        lang: 'ru',
        title: 'Meson Network',
        description: 'description',
      },
    },

    head: [
        ['meta', { name: 'theme-color', content: '#fff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/daqnext/meson-docs/src/images/meson-logo.svg' }]
    ],

    markdown: {
        extractHeaders: {
            level: [1, 2, 3, 4, 5],
        },
        anchor: {
            slugify: (str) => str
                .normalize('NFKD')
                // Remove accents
                .replace(rCombining, '')
                // Remove control characters
                .replace(rControl, '')
                // Replace special characters
                .replace(rSpecial, '-')
                // Remove continuos separators
                .replace(/-{2,}/g, '-')
                // Remove prefixing and trailing separators
                .replace(/^-+|-+$/g, '')
                // ensure it doesn't start with a number (#121)
                // .replace(/^(\d)/, '_$1')
                // lowercase
                .toLowerCase()
        }
    },

    plugins: [
        '@vuepress/plugin-shiki',
        '@vuepress/plugin-search',
        ['@vuepress/plugin-google-analytics', {
            id: 'G-SEH5LFSBRP',
        }],
    ],

    themeConfig: {
        repo: 'daqnext',
        docsRepo: 'daqnext/meson-docs',
        sidebarDepth: 3,
        docsDir: 'src',
        logo: 'https://cdn.jsdelivr.net/gh/daqnext/meson-docs/src/images/meson-logo.svg',
        themePlugins: {
            activeHeaderLinks: false,
        },
        locales: {
            '/': {
              selectLanguageName: 'English',
              navbar: [
                {
                    text: 'Home',
                    link: 'https://meson.network/',
                },
                {
                    text: 'Guide',
                    link: '/',
                },
                {
                    text: 'Whitepaper',
                    link: 'https://docs.meson.network/Meson-Network-Whitepaper-v1.6.pdf'
                },
                {
                    text: '3.0-Explorer',
                    link: 'https://explorer.meson.network:1984/'
                },
                {
                    text: 'Blog',
                    link: 'https://blog.meson.network'
                },
                {
                    text: 'Learn More',
                    children: [
                        {
                            text: 'Changelog',
                            link: '/changelog/',
                        },
                        {
                            text: 'Twitter',
                            link: 'https://twitter.com/NetworkMeson'
                        },
                        {
                            text: 'Medium',
                            link: 'https://medium.com/meson-network'
                        },
                        {
                            text: 'Discord',
                            link: 'https://discord.gg/z6YfSHDkmS'
                        },
                        {
                            text: 'Telegram',
                            link: 'https://t.me/mesonnetwork'
                        },
                        {
                            text: 'Content2049',
                            link: 'https://content2049.meson.network'
                        },
                        {
                            text: 'YouTube',
                            link: 'https://www.youtube.com/c/MesonNetwork'
                        },
                        {
                            text: 'Media Kit',
                            link: 'https://github.com/daqnext/brand-kit'
                        },
                        {
                            text: 'Status',
                            link: 'https://status.meson.network'
                        },
                    ]
                },
            ],
            sidebar: {
                '/changelog/': [
                    {
                        text: 'Changelog',
                        children: [
                            '/changelog/README.md',
                            '/changelog/02-18-2022.md',
                        ],
                    },
                ],
                '/': [
                    {
                        text: '👋 Guide',
                        collapsible: true,
                        link: '/README.md',
                        children: [
                            '/README.md',
                            '/meson-token.md',
                            '/bandwidth-marketplace.md',
                            '/roadmap.md',
                            '/partnership.md',
                        ],
                    },
                    {
                        text: '🚀 Run Meson Nodes',
                        collapsible: true,
                        link: '/nodes/README.md',
                        children: [
                            '/nodes/README.md',
                            '/nodes/run-meson-nodes.md',
                            '/nodes/run-meson-arm-nodes.md',
                        ],
                    },
                    {
                        text: '⚒️ Use Meson Network',
                        collapsible: true,
                        link: '/using/README.md',
                        children: [
                            '/using/README.md',
                            '/using/meson-enhances-arweave.md',
                            '/using/meson-enhances-wordpress.md',
                            '/using/meson-enhances-jamstack.md',
                        ],
                    },
                    {
                        text: '🌀 Open Source',
                        collapsible: true,
                        link: '/opensource.md',
                    },
                    {
                        text: '💰 Manage a Wallet',
                        collapsible: true,
                        link: '/msntt-transfer-101.md',
                        children: [
                            '/msntt-transfer-101.md',
                            '/meson-testtokens-to-ethereum.md',
                        ],
                    },
                    {
                        text: '👾 Community',
                        collapsible: true,
                        link: '/community.md',
                    },
                    {
                        text: '🌍 Pricing',
                        collapsible: true,
                        link: '/pricing.md',
                    },
                    {
                        text: '🧱 Glossary',
                        collapsible: true,
                        link: '/glossary.md',
                    },
                    {
                        text: '🌱 FAQ ',
                        collapsible: true,
                        link: '/faq.md',
                    },
                ],
            },
            },
            '/ru/': {
              selectLanguageName: 'Русский',
              navbar: [
                {
                    text: 'Home',
                    link: 'https://meson.network/',
                },
                {
                    text: 'Guide',
                    link: '/ru/',
                },
                {
                    text: 'Whitepaper',
                    link: 'https://docs.meson.network/Meson-Network-Whitepaper-v1.6.pdf'
                },
                {
                    text: '3.0-Explorer',
                    link: 'https://explorer.meson.network:1984/'
                },
                {
                    text: 'Blog',
                    link: 'https://blog.meson.network'
                },
                {
                    text: 'Learn More',
                    children: [
                        {
                            text: 'Changelog',
                            link: '/changelog/',
                        },
                        {
                            text: 'Twitter',
                            link: 'https://twitter.com/NetworkMeson'
                        },
                        {
                            text: 'Medium',
                            link: 'https://medium.com/meson-network'
                        },
                        {
                            text: 'Discord',
                            link: 'https://discord.gg/z6YfSHDkmS'
                        },
                        {
                            text: 'Telegram',
                            link: 'https://t.me/mesonnetwork'
                        },
                        {
                            text: 'Content2049',
                            link: 'https://content2049.meson.network'
                        },
                        {
                            text: 'YouTube',
                            link: 'https://www.youtube.com/c/MesonNetwork'
                        },
                        {
                            text: 'Media Kit',
                            link: 'https://github.com/daqnext/brand-kit'
                        },
                        {
                            text: 'Status',
                            link: 'https://status.meson.network'
                        },
                    ]
                },
            ],
            sidebar: {
                '/changelog/': [
                    {
                        text: 'Changelog',
                        children: [
                            '/changelog/README.md',
                            '/changelog/02-18-2022.md',
                        ],
                    },
                ],
                '/': [
                    {
                        text: '👋 Руководство',
                        collapsible: true,
                        link: '/ru/README.md',
                        children: [
                            '/ru/README.md',
                            '/ru/meson-token.md',
                        ],
                    },
                    {
                        text: '🚀 Запуск Ноды Meson',
                        collapsible: true,
                        link: '/ru/nodes/README.md',
                        children: [
                            '/ru/nodes/README.md',
                            '/ru/nodes/run-meson-nodes.md',
                            '/ru/nodes/run-meson-arm-nodes.md',
                        ],
                    },
                    {
                        text: '⚒️ Использование Meson',
                        collapsible: true,
                        link: '/ru/using/README.md',
                        children: [
                            '/ru/using/README.md',
                            '/ru/using/meson-enhances-arweave.md',
                            '/ru/using/meson-enhances-wordpress.md',
                            '/ru/using/meson-enhances-jamstack.md',
                        ],
                    },
                    {
                        text: '🌀 Открытый исходный код',
                        collapsible: true,
                        link: '/ru/opensource.md',
                    },
                    {
                        text: '💰 Управление кошельком',
                        collapsible: true,
                        link: '/ru/msntt-transfer-101.md',
                        children: [
                            '/ru/msntt-transfer-101.md',
                            '/ru/meson-testtokens-to-ethereum.md',
                        ],
                    },
                    {
                        text: '👾 Сообщество',
                        collapsible: true,
                        link: '/ru/community.md',
                    },
                    {
                        text: '🌍 Ценообразование',
                        collapsible: true,
                        link: '/ru/pricing.md',
                    },
                    {
                        text: '🧱 Глоссарий',
                        collapsible: true,
                        link: '/ru/glossary.md',
                    },
                    {
                        text: '🌱 FAQ ',
                        collapsible: true,
                        link: '/ru/faq.md',
                    },
                ],
            },
            },
          },
    },
}
