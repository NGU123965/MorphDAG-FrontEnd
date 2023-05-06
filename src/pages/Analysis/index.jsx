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
          title="存储开销检测"
          breadcrumbs={[
            {
              name: '功能',
            },
            {
              name: '存储开销检测',
            },
          ]}
          description="实时检测同轮次各分片的存储开销"
        />
      </Cell>
      <Cell colSpan={12}>
        <BasicDetail />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Analysis;
