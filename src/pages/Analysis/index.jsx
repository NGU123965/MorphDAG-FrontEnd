import * as React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicDetail from './components/BasicDetail';
import styles from './index.module.css';

const { Cell } = ResponsiveGrid;

const Analysis = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title={<span style={{ fontSize: '50px' }}>存储开销检测</span>}
          // breadcrumbs={[
          //   {
          //     name: <span className={styles.customTitle}>功能</span>,
          //   },
          //   {
          //     name: <span className={styles.customTitle}>存储开销检测</span>,
          //   },
          // ]}
          description={<span style={{ fontSize: '30px' }}>实时检测同轮次各分片的存储开销</span>}
        />
      </Cell>
      <Cell colSpan={12}>
        <BasicDetail />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Analysis;
