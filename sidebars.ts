import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  knowledgeSidebar: [
    {
      type: 'category',
      label: '关于本站',
      collapsed: false,
      items: [
        'about/overview',
        'about/content-standards',
        'about/content-production',
        'about/tech-architecture',
      ],
    },
    {
      type: 'category',
      label: '健康',
      collapsed: false,
      items: ['health/overview', 'health/sleep-and-recovery'],
    },
    {
      type: 'category',
      label: '事业',
      collapsed: false,
      items: ['career/overview', 'career/deep-work'],
    },
    {
      type: 'category',
      label: '财务',
      collapsed: false,
      items: ['finance/overview', 'finance/asset-allocation'],
    },
    {
      type: 'category',
      label: '人生体验',
      collapsed: false,
      items: ['life/overview', 'life/travel-principles'],
    },
  ],
};

export default sidebars;
