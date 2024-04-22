import React from 'react';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';

const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

function SearchBox() {
  return (
    <Space direction="vertical">
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
    </Space>
  );
};

export default SearchBox;