import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import FunctionDetail1 from './components/FunctionDetail1';
import FunctionDetail2 from './components/FunctionDetail2';
import styles from './index.module.css';

const { Cell } = ResponsiveGrid;

const Function1 = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title={<span style={{ fontSize: '50px' }}>查询</span>}
          // breadcrumbs={[
          //   {
          //     name: <span className={styles.customTitle}>功能</span>,
          //   },
          //   {
          //     name: <span className={styles.customTitle}>查询</span>,
          //   },
          // ]}
          description={<span style={{ fontSize: '30px' }}>查询交易及消息相关数据</span>}
        />
      </Cell>
      <Cell colSpan={6}>
        <FunctionDetail1 />
      </Cell>
      <Cell colSpan={6}>
        <FunctionDetail2 />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Function1;
