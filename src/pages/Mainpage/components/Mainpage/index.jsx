import * as React from 'react';
import {
  Avatar,
  Box,
  Button,
  Typography,
  Tag,
  ResponsiveGrid,
  Tab,
  Card,
  Table,
  Calendar,
  Timeline,
  List,
} from '@alifd/next';
import mock from './mock';
import styles from './index.module.css';
import lj from './架构图.jpg';
import background from './universe.jpg';

const { useState } = React;
const { Cell } = ResponsiveGrid;
const TimelineItem = Timeline.Item;
const DEFAULT_DATA = {
  firstList: mock.first,
  secondList: mock.second,
  thirdList: mock.third,
};

const WorkTable = (props) => {
  const { dataSource = DEFAULT_DATA } = props;
  const { firstList, secondList, thirdList } = dataSource;
  const [tab, setTab] = useState('1');

  const changeTab = (val) => setTab(val);

  const renderLevel = (text, index) => {
    let color;

    if (text === 'high') {
      color = 'red';
    } else if (text === 'middle') {
      color = 'yellow';
    } else {
      color = 'green';
    }

    return (
      <span key={text + index.toString()}>
        <Tag size="small" color={color}>
          {text}
        </Tag>
      </span>
    );
  };

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
                      <Button type="primary" key={idx} size="large" component="b" href={item.link}>
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
                  {secondList.map((item, idx) => {
                    return (
                      <Button type="primary" key={idx} size="large" component="b" href={item.link}>
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
                  {thirdList.map((item, idx) => {
                    return (
                      <Button type="primary" key={idx} size="large" component="b" href={item.link}>
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
                {/* <Table
                  dataSource={orderList}
                  hasBorder={false}
                  rowSelection={{
                    getProps: (record, index) => ({
                      children: (
                        <span key={index} className="next-table-cell-wrapper">
                          {record.name}
                        </span>
                      ),
                    }),
                    columnProps: () => ({
                      width: 330,
                    }),
                    titleAddons: () => (
                      <span key="title" className="next-table-cell-wrapper">
                        任务名称
                      </span>
                    ),
                  }}
                >
                  <Table.Column title="所属阶段" dataIndex="state" width={230} />
                  <Table.Column title="优先级" dataIndex="level" cell={renderLevel} width={150} />
                </Table> */}
              </Card.Content>
            </Card>
          </Cell>
        </ResponsiveGrid>
      </div>
    </div>
  );
};

export default WorkTable;
