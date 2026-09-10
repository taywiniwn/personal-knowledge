import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';

export default function FinanceChartPage(): ReactNode {
  return (
    <Layout title="财务看板" description="数据放 static/data">
      <main className="container margin-vert--lg">
        <Heading as="h1">财务看板</Heading>
        <p>
          数据放 <code>static/data/finance/*.json</code>，本页负责读取并渲染图表。
          论述性内容写在{' '}
          <Link to="/docs/finance/overview">财务总览</Link>。
        </p>
        <p style={{opacity: 0.75}}>当前无数据。放入 JSON 后可在此接入图表组件。</p>
      </main>
    </Layout>
  );
}
