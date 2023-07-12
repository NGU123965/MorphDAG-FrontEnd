import React from 'react';
import { ResponsiveGrid, Card } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import FunctionDetail1 from './components/FunctionDetail1';
import FunctionDetail2 from './components/FunctionDetail2';
import styles from './index.module.css';
import fig1 from './任务三.jpg';

const { Cell } = ResponsiveGrid;

const Function1 = () => {
  return (
    <ResponsiveGrid gap={0}>
      <Cell colSpan={12}>
        <div colSpan={12} style={{ background: '#ffffff', height: '35px' }} />
        <Card
          free
          className={styles.CardContent}
        >
          <Card.Content>
            <span className={styles.title} >图式可验证分层索引机制与高效查询处理优化策略</span>
          </Card.Content>
        </Card>
      </Cell>
      <Cell colSpan={12}>
        <Card
          free
          className={styles.CardContent}
        >
          <Card.Content className={styles.CardContent}>
            <img src={fig1} alt="度量指标图" className={styles.architectureImage} />
          </Card.Content>
        </Card>
        <div colSpan={12} style={{ background: '#ffffff', height: '25px' }} />
        <div colSpan={12} style={{ background: '#f2f2f2', height: '25px' }} />
      </Cell>
      <Cell colSpan={6}>
        <FunctionDetail1 />
      </Cell>
      <Cell colSpan={6}>
        <FunctionDetail2 />
        <div colSpan={12} style={{ background: '#f2f2f2', height: '75px' }} />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Function1;
