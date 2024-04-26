import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import type { TableProps } from "antd";
import dateUtil from "../common/dateUtil";
import stringUtil from "../common/stringUtil";
import CustomTag from './custom-tag';

interface DataType {
  key: number;
  name: string; //이름     : 홍길동
  birth: string; //생년월일 : 1999.01.01(만25세)
  skGrade: string; //기술등급 : 특급
  role: string; //주역할   : 개발
  skill: string; //사용기술 : Java, C, ProC, 웹스퀘어
  updInfo: string; //최종수정 : 홍길동/2024.04.22
}

/* ------------------------------------------------------------------------------ 
 리액트의 함수는 (일반함수, 컴포넌트, Hook)으로 나뉜다.
 - 일반함수 : params 특정 데이터 타입의 변수
             return 특정 데이터 타입의 값
 - 컴포넌트 : params props(객체)
             return jsx
           : 내장 컴포넌트(i.e. h1, div, etc.)와 같은 기능을 제공
           : 내장 컴포넌트와 구분하기 위해 컴포넌트명은 대문자로 시작
 - Hook    : params 초기값
             return 배열[value, call-back function]
           : 콜백 함수의 결과는 value에 할당됨
           : React에서 상태 변화를 감지하기 위해 사용하는 함수
           : [참고] custom-hook은 Hook으로 구현한 일반함수 또는 컴포넌트 또는 hook
------------------------------------------------------------------------------ */

// 컴포넌트의 props는 객체다. <-- DataType 객체를 구조 분해 할당한 변수
// function CustomTag({ skGrade }) {
//   const [color, setColor] = useState("");
//   useEffect(() => {
//     if (skGrade === "초급") {
//       setColor("green");
//     } else if (skGrade === "중급") {
//       setColor("geekblue");
//     } else if (skGrade === "고급") {
//       setColor("gold");
//     } else if (skGrade === "특급") {
//       setColor("magenta");
//     }
//   }, [skGrade]);
//   return (
//     <Tag color={color} key={skGrade}>
//       {skGrade}
//     </Tag>
//   );
// }

// 일반 함수의 매개변수는 일반 변수를 쓴다.
const calcAgeColumns = (birth) => {
  if (stringUtil.isEmpty(birth)) {
    return "-";
  }
  // 오늘 날짜 구하기
  const todayObj = dateUtil.getSysdateObject();
  const todayStr = String(Object.values(todayObj));
  // 만 나이 구하기
  const age = dateUtil.calcAgeBirth(birth, todayStr);
  const result = dateUtil.getFormattedDate(birth, ".");

  return `${result} (만${age}세)`;
};

/*
function CustomBirth({birth}) {
  const [contents, setContents] = useState("");
  useEffect(() => {
    if(stringUtil.isEmpty(birth)) {
      setContents("-");
    } else {
      setContents(() => {
        const {formattedBirth, age} = getAgeInfo(birth);
        return (`${formattedBirth} (만${age}세)`);
      });
    }
  }, [birth]);

  return (<p>{contents}</p>);
}
*/

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
  },
  {
    title: "생년월일",
    dataIndex: "birth",
    key: "birth",
    //일반함수 매개변수는 변수! 선언한 매개변수 타입에 맞게 넣어주면 된다.
    render: (text) => calcAgeColumns(text),
  },
  {
    title: "기술등급",
    dataIndex: "skGrade",
    key: "skGrade",
    //컴포넌트 매개변수는 객체! {}를 사용하면 객체가 된다.
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
    dataIndex: "updInfo",
    key: "updInfo",
    render: (text, record, index) => (
      <div>
        {text} <a style={{ color: "blue" }}>{Object.values(record)}</a> {index}
      </div>
    ),
    /* ----------------------------------------------------------------------------- 
    render: function(text, record, index) => {}     (뇌피셜)
    - text: string   <-- 데이터
    - record: object <-- antd의 Table 컴포넌트에서 dataSource property를 row 단위로 가져옴 (그게 일반적으로, object)
                         : 일반적으로 dataSource에 배열을 넣기 때문에, record로 값을 가져올 때 dataSource의 인덱스 단위로 가져옴
                           위 예제에서 dataSource의 props는 data: DataType[] 였기 때문에, record에는 DataType 객체가 들어옴
                         object에 접근할 땐 키값으로 접근해야 됨. (i.e. record['birth'] 또는 record.birth)
                         : 그렇지 않고, 객체를 그대로 꺼내쓰면(i.e. <>{record}</>) 오류발생(Objects are not valid as a React child)
    - index: number <-- 행 인덱스
    *(_) : 자리 표시자 변수(사용되지 않는 매개변수 나타냄, i.e. """render: (_, _, index) => {}""")
     ----------------------------------------------------------------------------- */
  },
];

// 실제 데이터
const data: DataType[] = [
  {
    key: 1,
    name: "최진희",
    birth: "20161123",
    skGrade: "특급",
    role: "개발",
    skill:
      "Java, C, ProC, 웹스퀘어, JQuery, Oracle, mySQL, IBM DB2, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 2,
    name: "김민경",
    birth: "20200426",
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
    birth: "19320801",
    skGrade: "초급",
    role: "테스터",
    skill: "Java, Oracle, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 5,
    name: "박경진",
    birth: "19930408",
    skGrade: "중급",
    role: "개발",
    skill: "Java, Oracle, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 6,
    name: "이승원",
    birth: "20150503",
    skGrade: "중급",
    role: "개발",
    skill: "Java, Oracle, Spring, BMX",
    updInfo: "홍길동/2024.04.22",
  },
  {
    key: 7,
    name: "김영범",
    birth: "19970316",
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
