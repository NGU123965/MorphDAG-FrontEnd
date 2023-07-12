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
import pic from './intro.png';
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
            <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f2f2f2' }}>
              <Card.Content className={styles.flexContainer}>
                <div className={styles.imageContainer} style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}>
                  <img src={pic} alt="总图标" className={styles.architectureImage} style={{ objectFit: 'cover', width: '80%', height: '50%' }} />
                </div>
              </Card.Content>
              <div colSpan={12} style={{ background: '#ffffff', height: '25px' }} />
            </Card>
          </Cell>

          {/* <Cell colSpan={12}> */}
          {/* <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f2f2f2' }}>
              <div colSpan={12} style={{ background: '#f2f2f2', height: '25px' }} /> */}
          {/* <Card.Content className={`${styles.flexContainer} ${styles.contentContainer}`}>
                <div className={styles.imageContainer}>
                  <img
                    src={pic1}
                    alt="完成"
                    className={styles.architectureImage}
                    style={{ objectFit: 'cover', width: '25%', height: '25%', marginLeft: '50px' }}
                  />
                </div>
                <div className={styles.descriptionContainer}>
                  <p style={{ textAlign: 'left', fontSize: '30px', lineHeight: '1.5', color: 'black', fontWeight: 'bold', margin: '-10px 0 0 -80px' }}>
                    &gt;5x
                  </p>
                  <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '1.5', fontWeight: 'bold', margin: '-2px 0 0 -80px' }}>
                    高并发可扩展存储
                  </p>
                </div>
                <div className={styles.imageContainer}>
                  <img
                    src={pic1}
                    alt="完成"
                    className={styles.architectureImage}
                    style={{ objectFit: 'cover', width: '25%', height: '25%', marginLeft: '50px' }}
                  />
                </div>
                <div className={styles.descriptionContainer}>
                  <p style={{ textAlign: 'left', fontSize: '30px', lineHeight: '1.5', color: 'black', fontWeight: 'bold', margin: '-10px 0 0 -80px' }}>
                    10TB+
                  </p>
                  <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '1.5', fontWeight: 'bold', margin: '-2px 0 0 -80px' }}>
                    高效一致性共识执行
                  </p>
                </div>
                <div className={styles.imageContainer}>
                  <img
                    src={pic1}
                    alt="完成"
                    className={styles.architectureImage}
                    style={{ objectFit: 'cover', width: '25%', height: '25%', marginLeft: '50px' }}
                  />
                </div>
                <div className={styles.descriptionContainer}>
                  <p style={{ textAlign: 'left', fontSize: '30px', lineHeight: '1.5', color: 'black', fontWeight: 'bold', margin: '-10px 0 0 -80px' }}>
                    &lt;20s
                  </p>
                  <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '1.5', fontWeight: 'bold', margin: '-2px 0 0 -80px' }}>
                    高效可验证查询检索
                  </p>
                </div>
              </Card.Content> */}
          {/* <div colSpan={12} style={{ background: '#f2f2f2', height: '25px' }} /> */}
          {/* </Card>
          </Cell> */}

          <Cell colSpan={12}>
            <div colSpan={12} style={{ background: '#ffffff', height: '25px' }} />
            <Card free className={styles.CardContent}>
              <Card.Content className={styles.flexContainer}>
                <div className={styles.imageContainer} style={{ position: 'relative', left: '30%', transform: 'translateX(-50%)' }}>
                  <img src={lj} alt="系统架构图" className={styles.architectureImage} style={{ objectFit: 'cover', width: '110%', height: '110%' }} />
                </div>
                <div className={styles.descriptionContainer}>
                  <p style={{ textAlign: 'left', fontSize: '40px', lineHeight: '1.5', color: 'black', fontWeight: 'bold', marginTop: '-20px', marginLeft: '250px' }}>
                    系统架构图
                  </p>

                  <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '1.5', marginTop: '20px', marginLeft: '250px' }}>
                    原型系统MorphDAG1.0的版本分为三层，由下至上依次是：数据存储层、共识执行层和查询检索层。
                  </p>

                  <p style={{ textAlign: 'left', fontSize: '20px', lineHeight: '1.5', marginLeft: '250px' }}>
                    其中数据存储层面向任务一，构建了弹性图式数据模型与拓扑结构，并融合了分片存储策略提升存储可扩展性；
                    共识执行层面向任务二，利用RBC或CBC进行区块广播，并使用高效并发控制机制进行冲突检测与事务排序，实现低延迟的图式共识与执行；
                    查询检索层则面向任务三，实现可验证高效查询，支持时态数据查询以及图结构数据查询
                  </p>
                </div>
              </Card.Content>
            </Card>
            <div colSpan={12} style={{ background: '#ffffff', height: '25px' }} />
            <div colSpan={12} style={{ background: '#f2f2f2', height: '25px' }} />
          </Cell>

        </ResponsiveGrid>

        <ResponsiveGrid gap={0}>
          <Cell colSpan={12}>
            <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f2f2f2' }} >
              <Card.Content>
                <span className={styles.smalltitle}>
                  <br />
                  功能<br />
                  ______
                </span>
              </Card.Content>
              <Card.Content className={styles.centeredContent}>
                <Box spacing={0} direction="row" wrap justify="center">
                  {firstList.map((item, idx) => {
                    return (
                      <Button type="normal" color="#ffffff" key={idx} size="large" component="a" href={item.link} className={styles.largeButton}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Icon type="copy" size={'xxxl'} style={{ marginBottom: '30px' }} />
                          <span>{item.name}</span>
                        </div>
                      </Button>
                    );
                  })}
                  {secondList.map((item, idx) => {
                    return (
                      <Button type="normal" key={idx} size="large" component="a" href={item.link} className={styles.largeButton}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Icon type="chart-bar" size={'xxxl'} style={{ marginBottom: '30px' }} />
                          <span>{item.name}</span>
                        </div>
                      </Button>
                    );
                  })}
                  {thirdList.map((item, idx) => {
                    return (
                      <Button type="normal" key={idx} size="large" component="a" href={item.link} className={styles.largeButton}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <Icon type="calendar" size={'xxxl'} style={{ marginBottom: '30px' }} />
                          <span>{item.name}</span>
                        </div>
                      </Button>
                    );
                  })}
                </Box>
              </Card.Content>
            </Card>
            <div colSpan={12} style={{ background: '#f2f2f2', height: '75px' }} />
          </Cell>

          {/* <Cell colSpan={12}>
            <Card
              free
              style={{
                height: '100%',
                width: '100%',
              }}
              className={styles.Card}
            >
              <Card.Content><span className={styles.cardHeaderTitle1}>节点存储开销与执行吞吐量</span></Card.Content>
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
          </Cell> */}
        </ResponsiveGrid>
      </div>
    </div>
  );
};

export default WorkTable;
