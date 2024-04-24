import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import dateUtil from "../common/dateUtil";
import stringUtil from "../common/stringUtil";

interface DataType {
  key: number;
  name: string; //이름     : 홍길동
  birth: string; //생년월일 : 1999.01.01(만25세)
  skGrade: string; //기술등급 : 특급
  role: string; //주역할   : 개발
  skill: string; //사용기술 : Java, C, ProC, 웹스퀘어
  updInfo: string; //최종수정 : 홍길동/2024.04.22
}

// Arrow Function의 매개변수 <-- DataType 객체를 구조 분해 할당한 변수
function CustomTag({ skGrade }) {
  const [color, setColor] = useState("");
  useEffect(() => {
    if (skGrade === "초급") {
      setColor("green");
    } else if (skGrade === "중급") {
      setColor("geekblue");
    } else if (skGrade === "고급") {
      setColor("gold");
    } else if (skGrade === "특급") {
      setColor("magenta");
    }
  }, [skGrade]);
  return (
    <Tag color={color} key={skGrade}>
      {skGrade}
    </Tag>
  );
}

const ageCalculator = (date) => {
  const birthStr = dateUtil.getFormattedDate(date, "-");
  const now = new Date();
  const nowDate = `${now.getFullYear()}${
    now.getMonth() + 1 > 10 ? now.getMonth() + 1 : `0${now.getMonth() + 1}`
  }${now.getDate()}`;
  const age = dateUtil.calcAgeBirth(date, nowDate);

  return `${birthStr} 만${age}세`;
};

// 테이블의 컬럼 정의(by. antd Table Component)
// - ["column"] : 테이블의 열을 나타내며, "이름"과 "키" 등의 속성을 가짐
// column 정의
// - title: 열의 제목
// - dataIndex: 열 데이터의 키
// - key: 열의 고유 키
// - render: 열 데이터를 어떻게 렌더링할지를 정의
const columns: TableProps<DataType>["columns"] = [
  {
    title: "이름",
    dataIndex: "name",
    key: "name",
    //render: (text) => <a>{text}</a>,
  },
  {
    title: "생년월일",
    dataIndex: "birth",
    key: "birth",
    render: (text) => ageCalculator(text),
  },
  {
    title: "기술등급",
    dataIndex: "skGrade",
    key: "skGrade",
    render: (text) => <CustomTag skGrade={text} />,
  },
  {
    title: "주역할",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "사용기술",
    dataIndex: "skill",
    key: "skill",
  },
  {
    title: "최종수정",
    dataIndex: "updInfo",
    key: "updInfo",
  },
  {
    title: "",
    key: "updInfo",
    render: (
      text,
      record,
      index // (_) : 자리 표시자 변수(사용되지 않는 매개변수 나타냄)
    ) => <div>asd</div>,
    // render: function(text, record, index) => {}
    // - text: 데이터
    // - record: 전체 행 데이터
    // - index : 행 인덱스
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

// 실제 데이터
const data: DataType[] = [
  {
    key: 1,
    name: "최진희",
    birth: "19990101",
    skGrade: "특급",
    role: "개발",
    skill:
      "Java, C, ProC, 웹스퀘어, JQuery, Oracle, mySQL, IBM DB2, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 2,
    name: "김민경",
    birth: "19990101",
    skGrade: "특급",
    role: "개발",
    skill:
      "Java, C, ProC, 웹스퀘어, JQuery, Oracle, mySQL, IBM DB2, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 3,
    name: "이의용",
    birth: "19990101",
    skGrade: "특급",
    role: "PL",
    skill:
      "Java, C, ProC, 웹스퀘어, JQuery, Oracle, mySQL, IBM DB2, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 4,
    name: "홍길동",
    birth: "19990101",
    skGrade: "초급",
    role: "테스터",
    skill: "Java, Oracle, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 5,
    name: "박경진",
    birth: "19990101",
    skGrade: "중급",
    role: "개발",
    skill: "Java, Oracle, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 6,
    name: "이승원",
    birth: "19990101",
    skGrade: "중급",
    role: "개발",
    skill: "Java, Oracle, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 7,
    name: "김영범",
    birth: "19990101",
    skGrade: "고급",
    role: "PM",
    skill: "Java, Oracle, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
];

const CustomTable: React.FC = () => (
  <Table columns={columns} dataSource={data} />
);

export default CustomTable;
