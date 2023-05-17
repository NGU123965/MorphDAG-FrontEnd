import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import WorkTable from './components/Mainpage';
import styles from './index.module.css';

const { Cell } = ResponsiveGrid;

const Mainpage = () => {
  return (
    <div className="container">
      <ResponsiveGrid gap={0} >
        <Cell colSpan={12}>
          <PageHeader
            title={<div className="welcome-text">Welcome to MorphDAG</div>}
          />
        </Cell>

        <Cell colSpan={12}>
          <WorkTable />
        </Cell>
      </ResponsiveGrid>
    </div>
  );
};

export default Mainpage;
