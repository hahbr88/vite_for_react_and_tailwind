/* eslint-disable react/prop-types */

//함수형 컴포넌트는 인자를 props 객체로만 받아와야 됨 (인자에 alias를 쓰지 않음)
function Box(props) {
   return (
      <div className="border border-gray-950">
         {props.value}
      </div>
   );
};

export default Box;