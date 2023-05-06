import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Card, Table, Search } from '@alifd/next';
import styles from './index.module.css';

const FunctionDetail = (props) => {
  const [tableData1, setTableData1] = useState([]);
  const [originalData1, setOriginalData1] = useState([]);
  const [searchValue1, setSearchValue1] = useState('');
  const [loading1, setLoading1] = useState(false);

  const [tableData2, setTableData2] = useState([]);
  const [originalData2, setOriginalData2] = useState([]);
  const [searchValue2, setSearchValue2] = useState('');
  const [loading2, setLoading2] = useState(false);

  const [currentPage2, setCurrentPage2] = useState(1);
  const [pageSize2, setPageSize2] = useState(10);
  const [searchLength2, setSearchLength2] = useState(-1);

  useEffect(() => {
    async function fetchData() {
      const data1 = [];
      const response1 = await fetch('./Records-200/query_results_1.json');
      const json1 = await response1.json();
      const { records } = json1;
      const jsonData1 = Object.keys(records).map((key) => ({
        hashes: records[key].hashes,
        round: parseInt(key),
        query_latency: records[key].query_latency,
      }));
      data1.push(...jsonData1);
      setTableData1([]);
      setOriginalData1(data1);

      const data2 = [];
      const response2 = await fetch('./Records-200/query_results_1.json');
      const json2 = await response2.json();
      const { records: records2 } = json2;
      const jsonData2 = Object.keys(records2).map((key) => ({
        hashes: records2[key].hashes,
        round: parseInt(key),
        query_latency: records2[key].query_latency,
      }));
      data2.push(...jsonData2);
      setTableData2([]);
      setOriginalData2(data2);
    }
    fetchData();
  }, []);

  const onSearchClick1 = (value) => {
    // setIsSearchClicked(true);
    setSearchValue1(value);
    setLoading1(true);
    let filteredData1;
    if (value) {
      filteredData1 = originalData1.filter((data) => data.hashes.includes(value));
    }
    setTableData1(filteredData1);
    setLoading1(false);
  };

  const renderHashCell = (value, index, record) => {
    if (record.hashes.includes(searchValue1)) {
      return <div>[{searchValue1}]</div>;
    } else {
      return <div>[{value}]</div>;
    }
  };

  const onSearchClick2 = (value) => {
    setSearchValue2(value);
    setLoading2(true);
    let filteredData;
    if (!isNaN(parseInt(value))) {
      filteredData = originalData2.filter((data) => data.round === parseInt(value));
    } else {
      filteredData = originalData2.filter((data) => data.hashes.includes(value));
    }
    setTableData2(filteredData);
    setLoading2(false);
  };

  const onInputClear2 = () => {
    setSearchValue2('');
    setTableData2(originalData2);
  };

  return (
    <div>
      <Box spacing={20} margin={0}>
        <Card free>
          <Card.Header title="查询" />
          <Card.Divider />
          <Card.Content>
            <Box flex={1} display="flex" alignItems="center" justifyContent="center">
              <p> </p>
            </Box>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ marginLeft: '40px', marginRight: '70px' }}>
                <Search
                  type="primary"
                  hasIcon={false}
                  searchText="查询交易"
                  onSearch={onSearchClick1}
                  placeholder="请输入哈希值"
                />
                <p> </p>
                <Table
                  dataSource={tableData1}
                  hasBorder
                  className={styles.mainTable}
                  align="center"
                >
                  <Table.Column title="所在轮次" dataIndex="round" width={90} align="center" />
                  <Table.Column
                    title="交易哈希"
                    width={540}
                    align="center"
                    dataIndex="hashes"
                    cell={renderHashCell}
                  />
                  <Table.Column title="查询时延" dataIndex="query_latency" width={100} align="center" />
                </Table>
              </div>
              <div style={{ marginRight: '30px', marginLeft: '10px' }}>
                <Search
                  type="primary"
                  hasIcon={false}
                  searchText="查询消息"
                  onSearch={onSearchClick2}
                  placeholder="请输入轮次号"
                  onClear={onInputClear2}
                />
                <p> </p>
                <Table
                  dataSource={tableData2}
                  hasBorder
                  className={styles.mainTable}
                  align="center"
                >
                  <Table.Column title="所在轮次" dataIndex="round" width={90} align="center" />
                  <Table.Column
                    title="交易哈希"
                    width={540}
                    align="center"
                    dataIndex="hashes"
                    cell={(value, index, record) => (
                      <div>
                        {value.map((hash) => (
                          <div key={hash}>[{hash}]</div>
                        ))}
                      </div>
                    )}
                  />
                  <Table.Column title="查询时延" dataIndex="query_latency" width={100} align="center" />
                </Table>
              </div>
            </div>
          </Card.Content>
        </Card>
      </Box>
    </div>
  );
};

export default FunctionDetail;
