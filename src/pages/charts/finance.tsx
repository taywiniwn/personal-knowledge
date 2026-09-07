import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import FinanceCharts from '@site/src/components/Charts/FinanceCharts';

export default function FinanceChartPage(): ReactNode {
  return (
    <Layout title="财务看板" description="读取 static/data 中的 JSON 并渲染 ECharts">
      <main className="container margin-vert--lg">
        <Heading as="h1">财务看板</Heading>
        <p>
          本页演示「客观数据」生产路径：脚本或手工写入{' '}
          <code>static/data/finance/*.json</code>，页面只负责读取并渲染。
          论述性结论请写在{' '}
          <Link to="/docs/finance/overview">财务总览</Link>。
        </p>
        <FinanceCharts />
      </main>
    </Layout>
  );
}
