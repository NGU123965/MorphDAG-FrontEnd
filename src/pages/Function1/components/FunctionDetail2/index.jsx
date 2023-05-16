import * as React from 'react';
import { useState, useEffect } from 'react';
import { Box, Card, Table, Search, Tag } from '@alifd/next';
import styles from './index.module.css';

const FunctionDetail2 = (props) => {
  const [tableData2, setTableData2] = useState([]);
  const [originalData2, setOriginalData2] = useState([]);
  const [searchValue2, setSearchValue2] = useState('');
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    async function fetchData() {
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

  const renderLevel = (text, index) => {
    return (
      <span key={text + index.toString()}>
        <Tag size="small" color={'blue'}>
          {text}
        </Tag>
      </span>
    );
  };

  return (
    <div>
      <Box spacing={20} margin={0}>
        <Card free>
          <Card.Header title="交易查询二" />
          <Card.Divider />
          <Card.Content>
            <Box flex={1} display="flex" alignItems="center" justifyContent="center">
              <p> </p>
            </Box>
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
                <Table.Column title="查询时延" dataIndex="query_latency" width={100} align="center" cell={renderLevel} />
              </Table>
            </div>
          </Card.Content>
        </Card>
      </Box>
    </div>
  );
};

export default FunctionDetail2;
