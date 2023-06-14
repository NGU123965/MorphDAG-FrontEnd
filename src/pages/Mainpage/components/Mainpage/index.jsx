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
import fig1 from './指标一.jpg';
import fig2 from './吞吐量指标.jpg';
import fig3 from './时延指标.jpg';
import fig4 from './范围溯源查询耗时对比.jpg';
import fig5 from './子图匹配查询验证耗时对比.jpg';
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
        <ResponsiveGrid gap={2}>
          <Cell colSpan={4}>
            <Card free>
              <Card.Content className={styles.centeredContent}>
                <Box spacing={[20, 50]} direction="row" wrap >
                  {firstList.map((item, idx) => {
                    return (
                      <Button type="primary" key={idx} size="large" component="a" href={item.link} className={styles.largeButton}>
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
              <Card.Content className={styles.centeredContent}>
                <Box spacing={[20, 50]} direction="row" wrap>
                  {secondList.map((item, idx) => {
                    return (
                      <Button type="primary" key={idx} size="large" component="a" href={item.link} className={styles.largeButton}>
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
              <Card.Content className={styles.centeredContent}>
                <Box spacing={[20, 50]} direction="row" wrap>
                  {thirdList.map((item, idx) => {
                    return (
                      <Button type="primary" key={idx} size="large" component="a" href={item.link} className={styles.largeButton}>
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
          <Cell colSpan={12}>
            <Card
              free
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Card.Header title={<span className={styles.cardHeaderTitle}>度量</span>} />
              <Card.Divider />
              <Card.Content>
                <img src={fig1} alt="度量指标图" className={styles.architectureImage} />
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={6}>
            <Card
              free
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Card.Header title={<span className={styles.cardHeaderTitle}>吞吐量</span>} />
              <Card.Divider />
              <Card.Content>
                <img src={fig2} alt="吞吐量指标图" className={styles.architectureImage} />
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={6}>
            <Card
              free
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Card.Header title={<span className={styles.cardHeaderTitle}>时延</span>} />
              <Card.Divider />
              <Card.Content>
                <img src={fig3} alt="时延指标图" className={styles.architectureImage} />
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={7}>
            <Card
              free
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Card.Header title={<span className={styles.cardHeaderTitle}>范围溯源查询耗时对比</span>} />
              <Card.Divider />
              <Card.Content>
                <img src={fig4} alt="范围溯源查询耗时对比图" className={styles.architectureImage} />
              </Card.Content>
            </Card>
          </Cell>
          <Cell colSpan={5}>
            <Card
              free
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <Card.Header title={<span className={styles.cardHeaderTitle}>子图匹配查询验证耗时对比</span>} />
              <Card.Divider />
              <Card.Content>
                <img src={fig5} alt="子图匹配查询验证耗时对比图" className={styles.architectureImage} />
              </Card.Content>
            </Card>
          </Cell>
        </ResponsiveGrid>
      </div>
    </div>
  );
};

export default WorkTable;
