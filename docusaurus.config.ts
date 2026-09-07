import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '个人知识库',
  tagline: '持续演化的活知识库 · 健康 · 事业 · 财务 · 人生体验',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://taywiniwn.github.io',
  baseUrl: '/personal-knowledge/',

  organizationName: 'taywiniwn',
  projectName: 'personal-knowledge',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/taywiniwn/personal-knowledge/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: '个人知识库',
      logo: {
        alt: '个人知识库',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'knowledgeSidebar',
          position: 'left',
          label: '知识库',
        },
        {
          to: '/docs/about/overview',
          label: '关于本站',
          position: 'left',
        },
        {
          to: '/charts/finance',
          label: '数据看板',
          position: 'left',
        },
        {
          href: 'https://github.com/taywiniwn/personal-knowledge',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '四大支柱',
          items: [
            {label: '健康', to: '/docs/health/overview'},
            {label: '事业', to: '/docs/career/overview'},
            {label: '财务', to: '/docs/finance/overview'},
            {label: '人生体验', to: '/docs/life/overview'},
          ],
        },
        {
          title: '站点说明',
          items: [
            {label: '关于本站', to: '/docs/about/overview'},
            {label: '内容标准', to: '/docs/about/content-standards'},
            {label: '内容如何生产', to: '/docs/about/content-production'},
            {label: '技术架构', to: '/docs/about/tech-architecture'},
          ],
        },
        {
          title: '更多',
          items: [
            {label: '财务看板', to: '/charts/finance'},
            {
              label: 'GitHub',
              href: 'https://github.com/taywiniwn/personal-knowledge',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 个人知识库 · Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
