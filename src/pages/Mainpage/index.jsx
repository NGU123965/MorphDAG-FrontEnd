import * as React from 'react';
import { Card, ResponsiveGrid, Box, Button } from '@alifd/next';
import PageHeader from '@/components/PageHeader';
import WorkTable from './components/Mainpage';
import styles from './index.module.css';
import mock from './components/Mainpage/mock';

const { Cell } = ResponsiveGrid;
const DEFAULT_DATA = {
  // functionList: mock.functionList,
  entranceList: mock.entrances,
};

const Mainpage = (props) => {
  const { dataSource = DEFAULT_DATA } = props;
  const entranceList = dataSource;

  return (
    <div className="container">
      <ResponsiveGrid gap={0} >
        <Cell colSpan={12}>
          <PageHeader
            title={<div className="welcome-text">Welcome to MorphDAG</div>}
          />
        </Cell>
        {/* <Cell colSpan={4}>
          <Card free>
            <Card.Content>
              <Box spacing={[20, 50]} direction="row" wrap>
                {entranceList.map((item, idx) => {
                  return (
                    <Button key={idx} size="large" text component="a" href={item.link}>
                      {item.name}
                    </Button>
                  );
                })}
              </Box>
            </Card.Content>
          </Card>
        </Cell> */}
        <Cell colSpan={12}>
          <WorkTable />
        </Cell>
      </ResponsiveGrid>
    </div>
  );
};

export default Mainpage;
