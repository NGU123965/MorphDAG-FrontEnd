import * as React from 'react';
import {
  Box,
  Button,
  ResponsiveGrid,
  Card,
} from '@alifd/next';
import mock from './mock';
import styles from './index.module.css';
import lj from './架构图.jpg';
import background from './universe.jpg';

const { useState } = React;
const { Cell } = ResponsiveGrid;
const DEFAULT_DATA = {
  firstList: mock.first,
  secondList: mock.second,
  thirdList: mock.third,
};


const WorkTable = (props) => {
  const { dataSource = DEFAULT_DATA } = props;
  const { firstList, secondList, thirdList } = dataSource;
  const [tab, setTab] = useState('1');

  return (
    <div className={styles.workTable} >
      <div className={styles.workerContainer} />
      <div className={styles.workTableContent}>
        <ResponsiveGrid gap={20}>
          <Cell colSpan={4}>
            <Card free>
              {/* <Card.Header
                title="快捷入口"
                extra={
                  <Button type="primary" size="large" text component="a" href="#/dashboard/function1">
                    设置
                  </Button>
                }
              /> */}

              <Card.Content>
                <Box spacing={[20, 50]} direction="row" wrap>
                  {firstList.map((item, idx) => {
                    return (
                      <Button type="primary" key={idx} size="large" component="a" href={item.link}>
                        {item.name}
                      </Button>
                    );
                  })}
                </Box>
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={4}>
            <Card free>
              <Card.Content>
                <Box spacing={[20, 50]} direction="row" wrap>
                  {secondList.map((item, idx) => {
                    return (
                      <Button type="primary" key={idx} size="large" component="a" href={item.link} >
                        {item.name}
                      </Button>
                    );
                  })}
                </Box>
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={4}>
            <Card free>
              <Card.Content>
                <Box spacing={[20, 50]} direction="row" wrap>
                  {thirdList.map((item, idx) => {
                    return (
                      <Button type="primary" key={idx} size="large" component="a" href={item.link}>
                        {item.name}
                      </Button>
                    );
                  })}
                </Box>
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={12}>
            <Card
              free
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Card.Header title={<span className={styles.cardHeaderTitle}>系统架构图</span>} />
              <Card.Divider />
              <Card.Content>
                <img src={lj} alt="架构图" className={styles.architectureImage} />
              </Card.Content>
            </Card>
          </Cell>
        </ResponsiveGrid>
      </div>
    </div>
  );
};

export default WorkTable;
