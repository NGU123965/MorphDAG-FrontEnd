import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import WorkTable from './components/WorkTable';

const { Cell } = ResponsiveGrid;

const Workplace = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="一致性检测"
          breadcrumbs={[
            {
              name: '功能',
            },
            {
              name: '一致性检测',
            },
          ]}
          description="输出同轮次各分片上Leader的哈希值并判断一致性"
        />
      </Cell>

      <Cell colSpan={12}>
        <WorkTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Workplace;
