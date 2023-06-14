/* eslint-disable max-len */
import * as React from 'react';
import {
  Box,
  Button,
  ResponsiveGrid,
  Card,
  Icon,
} from '@alifd/next';
import mock from './mock';
import styles from './index.module.css';
import pic from './logo.png';
import pic1 from './icon.png';
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
        <ResponsiveGrid gap={0}>
          <Cell colSpan={12}>
            <Card free style={{ height: '100%', width: '100%' }}>
              <Card.Content className={styles.flexContainer}>
                <div className={styles.imageContainer} style={{ position: 'relative', left: '30%', transform: 'translateX(-50%)' }}>
                  <img src={pic} alt="总图标" className={styles.architectureImage} style={{ objectFit: 'cover', width: '50%', height: '50%' }} />
                </div>
                <div className={styles.descriptionContainer}>
                  <p style={{ textAlign: 'center', fontSize: '40px', lineHeight: '1.5', color: 'black', fontWeight: 'bold', marginTop: '-20px' }}>
                    原型系统MorphDAG
                  </p>

                  <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '1.5', marginTop: '20px' }}>
                    &emsp;&emsp;原型系统MorphDAG1.0的版本分为四层，由下至上依次是：数据层、共识层、执行层和查询层。
                  </p>

                  <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '1.5' }}>
                    &emsp;&emsp;数据层面向任务一，构建了弹性图式数据模型与拓扑结构，并融合了分片存储策略提升存储可扩展性；
                    共识层面向任务二，利用RBC或CBC进行区块广播，并采用引用计数机制，实现低延迟的图式共识；执行层面向任务二，包含区块全序确定机制以及负载感知的事务处理机制；
                    查询层则面向任务三，实现可验证高效查询，支持时态数据查询以及图结构数据查询。
                  </p>
                </div>
              </Card.Content>
            </Card>
          </Cell>

          <Cell colSpan={12}>
            <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f2f2f2' }}>
              {/* <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f0f0f0' }}>
              <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f5f5f5' }}>
            <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f8f8f8' }}>
            <Card free style={{ height: '100%', width: '100%', backgroundColor: '#d3d3d3' }}> */}
              <Card.Content className={`${styles.flexContainer} ${styles.contentContainer}`}>
                <div className={styles.imageContainer}>
                  <img
                    src={pic1}
                    alt="完成"
                    className={styles.architectureImage}
                    style={{ objectFit: 'cover', width: '25%', height: '25%', margin: '0 -250px 0 0' }}
                  />
                </div>
                <div className={styles.descriptionContainer}>
                  <p style={{ textAlign: 'center', fontSize: '20px', lineHeight: '1.5', fontWeight: 'bold', margin: '-2px 0 0 -100px' }}>
                    高并发 <br />
                    可扩展存储
                  </p>
                </div>
                <div className={styles.imageContainer}>
                  <img
                    src={pic1}
                    alt="完成"
                    className={styles.architectureImage}
                    style={{ objectFit: 'cover', width: '25%', height: '25%', margin: '0 -250px 0 0' }}
                  />
                </div>
                <div className={styles.descriptionContainer}>
                  <p style={{ textAlign: 'center', fontSize: '20px', lineHeight: '1.5', fontWeight: 'bold', margin: '-2px 0 0 -100px' }}>
                    高效一致性 <br />
                    共识执行
                  </p>
                </div>
                <div className={styles.imageContainer}>
                  <img
                    src={pic1}
                    alt="完成"
                    className={styles.architectureImage}
                    style={{ objectFit: 'cover', width: '25%', height: '25%', margin: '0 -250px 0 0' }}
                  />
                </div>
                <div className={styles.descriptionContainer}>
                  <p style={{ textAlign: 'center', fontSize: '20px', lineHeight: '1.5', fontWeight: 'bold', margin: '-2px 0 0 -100px' }}>
                    高效可验证 <br />
                    查询检索
                  </p>
                </div>
              </Card.Content>
            </Card>
          </Cell>

          <Cell colSpan={12}>
            <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f7f7f7' }}>
              <Card.Content className={styles.flexContainer}>
                <div className={styles.imageContainer} style={{ position: 'relative', left: '30%', transform: 'translateX(-50%)' }}>
                  <img src={lj} alt="系统架构图" className={styles.architectureImage} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
                <div className={styles.descriptionContainer}>
                  <p style={{ textAlign: 'center', fontSize: '40px', lineHeight: '1.5', color: 'black', fontWeight: 'bold', marginTop: '-20px', marginLeft: '200px' }}>
                    系统架构图
                  </p>

                  <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '1.5', marginTop: '20px', marginLeft: '200px' }}>
                    &emsp;&emsp;原型系统MorphDAG1.0的版本分为四层，由下至上依次是：数据层、共识层、执行层和查询层。
                  </p>

                  <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '1.5', marginLeft: '200px' }}>
                    &emsp;&emsp;数据层面向任务一，构建了弹性图式数据模型与拓扑结构，并融合了分片存储策略提升存储可扩展性；
                    共识层面向任务二，利用RBC或CBC进行区块广播，并采用引用计数机制，实现低延迟的图式共识；执行层面向任务二，包含区块全序确定机制以及负载感知的事务处理机制；
                    查询层则面向任务三，实现可验证高效查询，支持时态数据查询以及图结构数据查询。
                  </p>
                </div>
              </Card.Content>
            </Card>
          </Cell>

        </ResponsiveGrid>
        <ResponsiveGrid gap={0}>
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
              className={styles.Card}
            >
              {/* <Card.Header title={<span className={styles.cardHeaderTitle1}>度量</span>} /> */}
              {/* <Card.Divider /> */}
              <Card.Content><span className={styles.cardHeaderTitle1}>度量</span></Card.Content>
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
              <Card.Header title={<span className={styles.cardHeaderTitle2}>吞吐量</span>} />
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
              <Card.Header title={<span className={styles.cardHeaderTitle2}>时延</span>} />
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
              className={styles.Card}
            >
              <Card.Content><span className={styles.cardHeaderTitle1}>范围溯源查询耗时对比</span></Card.Content>
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
              className={styles.Card}
            >
              <Card.Content><span className={styles.cardHeaderTitle1}>子图匹配查询验证耗时对比</span></Card.Content>
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
