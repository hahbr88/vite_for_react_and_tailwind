import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key:     number;
  name:    string; //이름     : 홍길동
  birth:   string; //생년월일 : 1999.01.01(만25세)
  skGrade: string; //기술등급 : 특급
  role:    string; //주역할   : 개발
  skill:   string; //사용기술 : Java, C, ProC, 웹스퀘어
  updInfo: string; //최종수정 : 홍길동/2024.04.22
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '생년월일',
    dataIndex: 'birth',
    key: 'birth',
  },
  {
    title: '기술등급',
    key: 'skGrade',
    dataIndex: 'skGrade',
    render: ({color}, { skGrade }) => (
      <>
        let {color} = '';
        if(skGrade === '초급') {
          color = 'green'
        }
        else if(skGrade === '중급') {
          color = 'geekblue'
        }
        else if(skGrade === '고급') {
          color = 'gold'
        }
        else if(skGrade === '특급') {
          color = 'magenta'
        }
        return (
          <Tag color={color} key={skGrade}>
            {skGrade}
          </Tag>
        );
      </>
    ),
  },
  {
    title: '주역할',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: '사용기술',
    dataIndex: 'skill',
    key: 'skill',
  },
  {
    title: '최종수정',
    dataIndex: 'updInfo',
    key: 'updInfo',
  },
  {
    title: '',
    dataIndex: 'action',
    key: 'action',
  },
  /*
  {
    title: '사용기술',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  */
];




const data: DataType[] = [
  {
    key:     1,
    name:    '최진희',
    birth:   '1999.01.01(만26세)',
    skGrade:    '특급',
    role:    '개발',
    skill:   'Java, C, ProC, 웹스퀘어, JQuery, Oracle, mySQL, IBM DB2, Spring, BMX',
    updInfo: '홍길동/2024.04.22',
  },
  {
    key:     2,
    name:    '김민경',
    birth:   '1999.01.01(만26세)',
    skGrade:    '특급',
    role:    '개발',
    skill:   'Java, C, ProC, 웹스퀘어, JQuery, Oracle, mySQL, IBM DB2, Spring, BMX',
    updInfo: '홍길동/2024.04.22',
  },
  {
    key:     3,
    name:    '이의용',
    birth:   '1999.01.01(만26세)',
    skGrade:    '특급',
    role:    'PL',
    skill:   'Java, C, ProC, 웹스퀘어, JQuery, Oracle, mySQL, IBM DB2, Spring, BMX',
    updInfo: '홍길동/2024.04.22',
  },
  {
    key:     4,
    name:    '홍길동',
    birth:   '1999.01.01(만26세)',
    skGrade:    '초급',
    role:    '테스터',
    skill:   'Java, Oracle, Spring, BMX',
    updInfo: '홍길동/2024.04.22',
  },
  {
    key:     5,
    name:    '박경진',
    birth:   '1999.01.01(만26세)',
    skGrade:    '중급',
    role:    '개발',
    skill:   'Java, Oracle, Spring, BMX',
    updInfo: '홍길동/2024.04.22',
  },
  {
    key:     6,
    name:    '이승원',
    birth:   '1999.01.01(만26세)',
    skGrade:    '중급',
    role:    '개발',
    skill:   'Java, Oracle, Spring, BMX',
    updInfo: '홍길동/2024.04.22',
  },
  {
    key:     7,
    name:    '김영범',
    birth:   '1999.01.01(만26세)',
    skGrade:    '고급',
    role:    'PM',
    skill:   'Java, Oracle, Spring, BMX',
    updInfo: '홍길동/2024.04.22',
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;