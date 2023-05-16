import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Card, Table, Search, Pagination, Tag } from '@alifd/next';
import styles from './index.module.css';

const BasicDetail = (props) => {
  const [tableData, setTableData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchLength, setSearchLength] = useState(-1);

  const paths = ['./Records-200/info-0.json', './Records-200/info-1.json', './Records-200/info-2.json', './Records-200/info-3.json', './Records-200/info-4.json', './Records-200/info-5.json', './Records-200/info-6.json', './Records-200/info-7.json'];

  useEffect(() => {
    async function fetchData() {
      const data = [];
      for (const path of paths) {
        const response = await fetch(path);
        const json = await response.json();
        const records = json.records;
        const jsonData = Object.keys(records).map(key => ({
          shardID: records[key].shardid,
          round: records[key].round,
          chaindataMB: records[key].chaindata_MB + ' MB',
          statedataMB: records[key].statedata_MB + ' MB',
        }));
        data.push(...jsonData);
      }
      // setTableData(data.slice(0, pageSize));
      setTableData([]);
      setOriginalData(data);
    }
    fetchData();
  }, []);

  const onSearchClick = () => {
    if (searchValue != '') {
      setLoading(true);
      const filteredData = originalData.filter((data) => data.round === parseInt(searchValue));
      setSearchLength(filteredData.length);
      setTableData(filteredData);
      console.log(filteredData.length);
      setLoading(false);
    } else {
      setSearchLength(originalData.length);
      setTableData(originalData.slice(0, pageSize));
    }
  };

  const onInputChange = (value) => {
    setSearchValue(value);
  }

  const onInputClear = () => {
    setSearchValue('');
    setTableData(originalData);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setTableData(originalData.slice(startIndex, endIndex));
  };

  const handlePageSizeChange = (pagesize) => {
    setPageSize(pagesize);
    if (searchValue == '') {
      setCurrentPage(1);
      // setTableData(originalData.slice(0, pagesize));
    }
  };

  const renderLevel1 = (text, index) => {
    return (
      <span key={text + index.toString()}>
        <Tag size="small" color={'orange'}>
          {text}
        </Tag>
      </span>
    );
  };

  const renderLevel2 = (text, index) => {
    return (
      <span key={text + index.toString()}>
        <Tag size="small" color={'green'}>
          {text}
        </Tag>
      </span>
    );
  };

  return (
    <div>
      <Box spacing={20}>
        <Card free>
          <Card.Header title="系统存储开销详情" />
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
              />
              <p> </p>
            </Box>
            <Table dataSource={tableData} hasBorder className={styles.mainTable} align="center">
              <Table.Column title="分片号" dataIndex="shardID" width={200} align="center" />
              <Table.Column title="所在轮次" dataIndex="round" width={200} align="center" />
              <Table.Column title="键数据大小" dataIndex="chaindataMB" width={200} align="center" cell={renderLevel1} />
              <Table.Column title="状态数据大小" dataIndex="statedataMB" width={200} align="center" cell={renderLevel2} />
            </Table>
            <Pagination
              // total={(searchLength == -1 || searchLength > 8) ? originalData.length : 1}
              total={tableData.length}
              current={currentPage}
              pageSize={pageSize}
              pageSizeSelector="dropdown"
              pageSizeList={[10, 20, 50, 100]}
              onChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          </Card.Content>
        </Card>
      </Box>
    </div>
  );
};

export default BasicDetail;
