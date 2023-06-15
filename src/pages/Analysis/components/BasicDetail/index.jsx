import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Search,
  Card,
  Table,
  Pagination,
  Tag,
  ResponsiveGrid,
} from '@alifd/next';
import styles from './index.module.css';
import fig1 from './任务一.jpg';

const { Cell } = ResponsiveGrid;

const BasicDetail = (props) => {
  const [tableData, setTableData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);
  const [searchData, setSearchData] = useState([]);
  // eslint-disable-next-line max-len
  const paths = ['./Records-200/info-0.json', './Records-200/info-1.json', './Records-200/info-2.json', './Records-200/info-3.json', './Records-200/info-4.json', './Records-200/info-5.json', './Records-200/info-6.json', './Records-200/info-7.json'];

  useEffect(() => {
    async function fetchData() {
      const data = [];
      for (const path of paths) {
        const response = await fetch(path);
        const json = await response.json();
        const { records } = json;
        const jsonData = Object.keys(records).map((key) => ({
          shardID: records[key].shardid,
          round: records[key].round,
          chaindataMB: `${records[key].chaindata_MB} MB`,
          statedataMB: `${records[key].statedata_MB} MB`,
        }));
        data.push(...jsonData);
      }
      // setTableData(data.slice(0, pageSize));
      // setSearchData(data);
      setTableData([]);
      setSearchData([]);
      setOriginalData(data);
    }
    fetchData();
  }, []);

  const onSearchClick = () => {
    if (searchValue != '') {
      setLoading(true);
      const filteredData = originalData.filter((data) => data.round === parseInt(searchValue));
      setTableData(filteredData.slice(0, pageSize));
      setSearchData(filteredData);
      setCurrentPage(1);
      setLoading(false);
    } else {
      // setTableData(originalData.slice(0, pageSize));
      // setSearchData(originalData);
      setTableData([]);
      setSearchData([]);
    }
  };

  const onInputChange = (value) => {
    setSearchValue(value);
  };

  const onInputClear = () => {
    setSearchValue('');
    setTableData(originalData);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setTableData(searchData.slice(startIndex, endIndex));
  };

  const handlePageSizeChange = (pagesize) => {
    setPageSize(pagesize);
    if (searchValue == '' && tableData.length == 0) {
      setCurrentPage(1);
      setTableData([]);
    } else {
      setTableData(searchData.slice(0, pagesize));
    }
  };

  const renderLevel1 = (text, index) => {
    const size = parseInt(text.substring(0, text.length - 3));

    let color;
    if (size < 10) {
      color = 'green';
    } else if (size < 100) {
      color = 'orange';
    } else {
      color = 'red';
    }

    return (
      <span key={text + index.toString()}>
        <Tag size="large" color={color}>
          {text}
        </Tag>
      </span>
    );
  };

  const renderLevel2 = (text, index) => {
    const size = parseInt(text.substring(0, text.length - 3));

    let color;
    if (size < 10) {
      color = 'green';
    } else if (size < 30) {
      color = 'orange';
    } else {
      color = 'red';
    }

    return (
      <span key={text + index.toString()}>
        <Tag size="large" color={color}>
          {text}
        </Tag>
      </span>
    );
  };

  return (
    <div>
      <div colSpan={12} style={{ background: '#ffffff', height: '35px' }} />
      <Box spacing={0}>
        <Cell colSpan={12}>
          <Card
            free
            className={styles.CardContent}
          >
            <Card.Content>
              <span className={styles.title} >弹性图式数据模型与可扩展分片存储策略</span>
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
        </Cell>

        <div colSpan={12} style={{ background: '#ffffff', height: '25px' }} />
        <div colSpan={12} style={{ background: '#f2f2f2', height: '25px' }} />

        <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f2f2f2' }}>
          <Card.Content ><span className={styles.cardTitle}>存储开销查询</span></Card.Content>
          <Card.Divider />
          <Card.Content>
            <Box align="center">
              <Search
                type="primary"
                hasIcon={false}
                searchText="查询"
                onSearch={onSearchClick}
                value={searchValue}
                placeholder="请输入轮次号"
                onChange={onInputChange}
                onClear={onInputClear}
                size="large"
              />
            </Box>
            <p> </p>
            <Table
              dataSource={tableData}
              hasBorder
              className={styles.mainTable}
              align="center"
              emptyContent={<div className={styles.emptyText}>没有查询到数据</div>}
            >
              <Table.Column
                title={<div className={styles.tableTitle}>分片号</div>}
                dataIndex="shardID"
                width={200}
                align="center"
                style={{ fontSize: 'x-large' }}
                cell={(value, index, record) => (<div style={{ fontSize: 'x-large' }}>{value}</div>)}
              />
              <Table.Column
                title={<div className={styles.tableTitle}>所在轮次</div>}
                dataIndex="round"
                width={200}
                align="center"
                style={{ fontSize: 'x-large' }}
                cell={(value, index, record) => (<div style={{ fontSize: 'x-large' }}>{value}</div>)}
              />
              <Table.Column
                title={<div className={styles.tableTitle}>键数据大小</div>}
                dataIndex="chaindataMB"
                width={200}
                align="center"
                cell={renderLevel1}
                style={{ fontSize: 'x-large' }}
              />
              <Table.Column
                title={<div className={styles.tableTitle}>状态数据大小</div>}
                dataIndex="statedataMB"
                width={200}
                align="center"
                cell={renderLevel2}
                style={{ fontSize: 'x-large' }}
              />
            </Table>
            <p> </p>
            <Pagination
              total={searchData.length}
              current={currentPage}
              pageSize={pageSize}
              pageSizeSelector="dropdown"
              pageSizeList={[5, 8, 10, 20, 50, 100]}
              onChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
              size="large"
            />
          </Card.Content>
        </Card>
      </Box>
      <div colSpan={12} style={{ background: '#f2f2f2', height: '50px' }} />
    </div>
  );
};

export default BasicDetail;
