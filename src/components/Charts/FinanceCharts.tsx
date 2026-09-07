import React, {useEffect, useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';

type AssetPoint = {date: string; value: number};
type AllocationItem = {name: string; value: number};
type FinanceData = {
  title: string;
  currency: string;
  updatedAt: string;
  series: AssetPoint[];
  allocation: AllocationItem[];
};

function ChartsInner({data}: {data: FinanceData}) {
  const ReactECharts = require('echarts-for-react').default;

  const lineOption = {
    title: {text: data.title, left: 'center', textStyle: {fontSize: 14}},
    tooltip: {trigger: 'axis'},
    grid: {left: 40, right: 20, top: 50, bottom: 40},
    xAxis: {
      type: 'category',
      data: data.series.map((p) => p.date),
      axisLabel: {rotate: 30},
    },
    yAxis: {type: 'value', name: data.currency},
    series: [
      {
        name: '净值指数',
        type: 'line',
        smooth: true,
        data: data.series.map((p) => p.value),
        areaStyle: {opacity: 0.08},
      },
    ],
  };

  const pieOption = {
    title: {text: '示例配置分布', left: 'center', textStyle: {fontSize: 14}},
    tooltip: {trigger: 'item'},
    legend: {bottom: 0},
    series: [
      {
        type: 'pie',
        radius: ['35%', '60%'],
        data: data.allocation.map((a) => ({name: a.name, value: a.value})),
      },
    ],
  };

  return (
    <div>
      <p style={{opacity: 0.75}}>数据更新于 {data.updatedAt} · 占位示例，可替换 JSON</p>
      <ReactECharts option={lineOption} style={{height: 360, width: '100%'}} />
      <ReactECharts option={pieOption} style={{height: 360, width: '100%', marginTop: 24}} />
    </div>
  );
}

export default function FinanceCharts(): React.ReactNode {
  const dataUrl = useBaseUrl('/data/finance/sample-assets.json');
  const [data, setData] = useState<FinanceData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(dataUrl)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((json: FinanceData) => {
        if (!cancelled) setData(json);
      })
      .catch((e: Error) => {
        if (!cancelled) setError(e.message);
      });
    return () => {
      cancelled = true;
    };
  }, [dataUrl]);

  if (error) {
    return <p>加载财务数据失败：{error}</p>;
  }
  if (!data) {
    return <p>加载中…</p>;
  }

  return (
    <BrowserOnly fallback={<p>加载图表中…</p>}>
      {() => <ChartsInner data={data} />}
    </BrowserOnly>
  );
}
