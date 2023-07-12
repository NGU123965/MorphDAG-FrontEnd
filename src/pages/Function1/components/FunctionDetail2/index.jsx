import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Search,
  Card,
  Table,
  Pagination,
  Select,
  Tag,
} from '@alifd/next';
import styles from './index.module.css';

const FunctionDetail2 = (props) => {
  const [tableData, setTableData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading1, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = [];
      const response = await fetch('./Records-200/query_results_1.json');
      const json = await response.json();
      const { records } = json;
      const jsonData = Object.keys(records).map((key) => ({
        hashes: records[key].hashes,
        round: parseInt(key),
        query_latency: records[key].query_latency,
      }));
      data.push(...jsonData);
      setTableData([]);
      setOriginalData(data);
    }
    fetchData();
  }, []);

  const onSearchClick = (value) => {
    setSearchValue(value);
    setLoading(true);
    let filteredData;
    if (!isNaN(parseInt(value))) {
      filteredData = originalData.filter((data) => data.round === parseInt(value));
    } else {
      filteredData = originalData.filter((data) => data.hashes.includes(value));
    }
    setTableData(filteredData);
    setLoading(false);
  };

  const renderLevel = (text, index) => {
    const size = parseInt(text.substring(0, text.length - 2));

    let color;
    if (size < 100) {
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

  return (
    <div>
      <Box spacing={20}>
        <Card free style={{ height: '100%', width: '100%', backgroundColor: '#f2f2f2' }}>
          <Card.Content>
            <span className={styles.cardTitle}>区块查询</span>
          </Card.Content>
          <Card.Content>
            <Box align="center">
              <Search
                type="primary"
                hasIcon={false}
                searchText="查询区块"
                onSearch={onSearchClick}
                placeholder="请输入轮次号"
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
                title={<div className={styles.tableTitle}>所在轮次</div>}
                dataIndex="round"
                width={110}
                align="center"
                style={{ fontSize: 'x-large' }}
                cell={(value, index, record) => (<div style={{ fontSize: 'x-large' }}>{value}</div>)}
              />
              <Table.Column
                title={<div className={styles.tableTitle}>交易哈希</div>}
                dataIndex="hashes"
                width={380}
                align="center"
                style={{ fontSize: 'x-large' }}
                cell={(value, index, record) => (
                  <div style={{ fontSize: 'x-large' }}>
                    {value.map((hash) => (
                      <div key={hash}>[{hash}]</div>
                    ))}
                  </div>
                )}
              />
              <Table.Column
                title={<div className={styles.tableTitle}>查询延迟</div>}
                dataIndex="query_latency"
                width={110}
                align="center"
                cell={renderLevel}
                style={{ fontSize: 'x-large' }}
              />
            </Table>
          </Card.Content>
        </Card>
      </Box>
    </div>
  );
};

export default FunctionDetail2;
