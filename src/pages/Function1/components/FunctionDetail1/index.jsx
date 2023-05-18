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

const FunctionDetail1 = (props) => {
  const [tableData, setTableData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
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
    // setIsSearchClicked(true);
    setSearchValue(value);
    setLoading(true);
    let filteredData;
    if (value) {
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

  const renderHashCell = (value, index, record) => {
    if (record.hashes.includes(searchValue)) {
      return <div style={{ fontSize: 'x-large' }}>[{searchValue}]</div>;
    } else {
      return <div style={{ fontSize: 'x-large' }}>[{value}]</div>;
    }
  };

  return (
    <div>
      <Box spacing={20}>
        <Card free>
          <Card.Header className={styles.cardHeader} title={<span className={styles.cardTitle}>单笔交易查询</span>} />
          <Card.Divider />
          <Card.Content>
            <Box align="center">
              <Search
                type="primary"
                hasIcon={false}
                searchText="查询交易"
                onSearch={onSearchClick}
                placeholder="请输入交易的哈希值"
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
                width={120}
                align="center"
                style={{ fontSize: 'x-large' }}
                cell={(value, index, record) => (<div style={{ fontSize: 'x-large' }}>{value}</div>)}
              />
              <Table.Column
                title={<div className={styles.tableTitle}>交易哈希</div>}
                dataIndex="hashes"
                width={360}
                align="center"
                style={{ fontSize: 'x-large' }}
                cell={renderHashCell}
              />
              <Table.Column
                title={<div className={styles.tableTitle}>查询延迟</div>}
                dataIndex="query_latency"
                width={120}
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

export default FunctionDetail1;
