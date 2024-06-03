import React, { useRef, useState } from 'react';
import { Table, Tooltip } from 'antd';

// 예제 데이터와 컬럼 정의
const columnsSm = [
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
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
];

const TooltipContent = ({ record }) => (
  <div>
    <p>{record.name}</p>
    <p>{record.age}</p>
    <p>{record.address}</p>
  </div>
);

// const App3 = () => {
//   const [tooltipVisible, setTooltipVisible] = useState(false);
//   const [tooltipContent, setTooltipContent] = useState(null);

//   const handleClickRow = (record) => {
//     setTooltipContent(record);
//     setTooltipVisible(true);
//   };

//   return (
//     <div className='relative'>
//       <Tooltip
//         title={tooltipContent && <TooltipContent record={tooltipContent} />}
//         visible={tooltipVisible}
//         onVisibleChange={setTooltipVisible}
//         trigger="click"
//         className='absolute transform -translate-x-56 bottom-0 right-0'
//       />
//       <Table
//         columns={columnsSm}
//         dataSource={data}
//         pagination={false}
//         onRow={(record) => ({
//           onClick: () => handleClickRow(record),
//         })}
//         className="border border-gray-100"
//         size="small"
//       />
//     </div>
//   );
// };

const App3 = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const tableRef = useRef(null);

  const handleClickRow = (record, e) => {
    const tableRect = tableRef.current.getBoundingClientRect();
    const rowRect = e.currentTarget.getBoundingClientRect();
    setTooltipContent(record);
    setTooltipPosition({
      top: rowRect.top - tableRect.top - 40, // 40은 Tooltip 높이를 고려한 값
      left: rowRect.left - tableRect.left,
    });
    setTooltipVisible(true);
  };

  return (
    <div ref={tableRef} style={{ position: 'relative' }}>
      {tooltipVisible && (
        <Tooltip
          title={tooltipContent && <TooltipContent record={tooltipContent} />}
          visible={tooltipVisible}
          onVisibleChange={setTooltipVisible}
          trigger="click"
          placement="top"
        >
          <div style={{ position: 'absolute', top: tooltipPosition.top, left: tooltipPosition.left, transform: 'translateY(-100%)' }}>
            {tooltipContent && <TooltipContent record={tooltipContent} />}
          </div>
        </Tooltip>
      )}
      <Table
        columns={columnsSm}
        dataSource={data}
        pagination={false}
        onRow={(record) => ({
          onClick: (e) => handleClickRow(record, e),
        })}
        className="border border-gray-100"
        size="small"
      />
    </div>
  );
};

export default App3;
