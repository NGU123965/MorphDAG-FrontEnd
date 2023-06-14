import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import WorkTable from './components/WorkTable';
import styles from './index.module.css';

const { Cell } = ResponsiveGrid;

const Workplace = () => {
  return (
    <ResponsiveGrid gap={0}>
      <Cell colSpan={12}>
        <WorkTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Workplace;
