import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import WorkTable from './components/Mainpage';

const { Cell } = ResponsiveGrid;

const Mainpage = () => {
  return (
    <ResponsiveGrid gap={0}>
      <Cell colSpan={12}>
        <PageHeader
          title="主页"
          description="欢迎来到MorphDAG！"
        />
      </Cell>

      <Cell colSpan={12}>
        <WorkTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Mainpage;
