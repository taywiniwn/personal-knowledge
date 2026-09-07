import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  to: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: '健康',
    to: '/docs/health/overview',
    description: <>睡眠、运动、恢复与可持续节律。原则写在文档，指标可进数据层。</>,
  },
  {
    title: '事业',
    to: '/docs/career/overview',
    description: <>可复用能力、深度工作与协作方式。优先改已有页，避免碎片化。</>,
  },
  {
    title: '财务',
    to: '/docs/finance/overview',
    description: <>配置、风险与长期视角。量化序列放 JSON，看板用图表呈现。</>,
  },
  {
    title: '人生体验',
    to: '/docs/life/overview',
    description: <>旅行、关系与值得沉淀的体验。回来后写回原则，而不是只留相册。</>,
  },
];

function Feature({title, description, to}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <Link to={to}>{title}</Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.metaLinks}>
          <Link to="/docs/about/content-standards">内容标准</Link>
          <span>·</span>
          <Link to="/docs/about/content-production">内容如何生产</Link>
          <span>·</span>
          <Link to="/docs/about/tech-architecture">技术架构</Link>
          <span>·</span>
          <Link to="/charts/finance">财务看板</Link>
        </div>
      </div>
    </section>
  );
}
