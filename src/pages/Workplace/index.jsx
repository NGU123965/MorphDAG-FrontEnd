import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import WorkTable from './components/WorkTable';
import styles from './index.module.css';

const { Cell } = ResponsiveGrid;

const Workplace = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title={<span style={{ fontSize: '50px' }}>一致性检测</span>}
          // breadcrumbs={[
          //   {
          //     name: <span className={styles.customTitle}>功能</span>,
          //   },
          //   {
          //     name: <span className={styles.customTitle}>一致性检测</span>,
          //   },
          // ]}
          description={<span style={{ fontSize: '30px' }}>输出同轮次各分片上Leader的哈希值并判断一致性</span>}
        />
      </Cell>

      <Cell colSpan={12}>
        <WorkTable />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Workplace;
