import React, { useState } from 'react';
import { Table, Button } from 'antd';

let handleEditRow = () => {};

const columns = [
   {
     title: 'Name',
     dataIndex: 'name',
     key: 'name',
   },
   {
     title: 'Age',
     dataIndex: 'age',
     key: 'age',
   },
   {
     title: 'Address',
     dataIndex: 'address',
     key: 'address',
   },
   {
     title: 'Action',
     key: 'action',
     render: (_, record) => (
       <Button onClick={() => handleEditRow(record)}>Edit</Button>
     ),
   },
];

const ExampleTable = () => {
  const [data, setData] = useState([
   { key: 1, name: 'John Doe', age: 32, address: 'New York' },
   { key: 2, name: 'Jane Doe', age: 28, address: 'London' },
   { key: 3, name: 'Jim Green', age: 45, address: 'Sidney' },
 ]);

  handleEditRow = (record) => {
    const newData = data.map((item) => {
      if (item.key === record.key) {
        // Modify the desired field(s) in the selected row
        return { ...item, name: '홍길동' };
      }
      return item;
    });
    setData(newData);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="key"
    />
  );
};

export default ExampleTable;
