import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import FunctionDetail from './components/FunctionDetail';

const { Cell } = ResponsiveGrid;

const Function1 = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="查询"
          breadcrumbs={[
            {
              name: '功能',
            },
            {
              name: '查询',
            },
          ]}
          description="查询交易及消息相关数据"
        />
      </Cell>
      <Cell colSpan={12}>
        <FunctionDetail />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Function1;
