/* eslint-disable react/prop-types */
import "../App.css";

//함수형 컴포넌트로 적으면 랜더링이 안 되는 것 같음 -> 왜?
//function Button(onClick, children) {

//일급 함수를 이용하면 랜더링이 됨 -> 왜?
const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-[80px] h-[60px] bg-red-500 text-white rounded-full hover:bg-red-550">
      {children}
    </button>
  );
};

export default Button;
