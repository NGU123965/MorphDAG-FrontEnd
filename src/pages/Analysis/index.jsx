import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicDetail from './components/BasicDetail';

const { Cell } = ResponsiveGrid;

const Analysis = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title={<span style={{ fontSize: 'x-large' }}>存储开销检测</span>}
          breadcrumbs={[
            {
              name: <span style={{ fontSize: 'larger' }}>功能</span>,
            },
            {
              name: <span style={{ fontSize: 'larger' }}>存储开销检测</span>,
            },
          ]}
          description={<span style={{ fontSize: 'larger' }}>实时检测同轮次各分片的存储开销</span>}
        />
      </Cell>
      <Cell colSpan={12}>
        <BasicDetail />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Analysis;
