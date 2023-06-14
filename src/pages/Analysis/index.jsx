import * as React from 'react';
import { Card, ResponsiveGrid } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import BasicDetail from './components/BasicDetail';
import styles from './index.module.css';

const { Cell } = ResponsiveGrid;

const Analysis = () => {
  return (
    <ResponsiveGrid gap={0}>
      <Cell colSpan={12}>
        <BasicDetail />
      </Cell>
    </ResponsiveGrid>
  );
};

export default Analysis;
