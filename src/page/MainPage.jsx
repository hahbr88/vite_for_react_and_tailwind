import { Button } from "antd";
import Counter from "../components/counter";
import { NavLink } from "react-router-dom";

function MainPage() {
  // const router = Router();
  // console.log(router.type);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex justify-center w-[200px] h-fit p-4 border border-solid border-cyan-600 rounded-md">
        <Counter />
      </div>
      <NavLink to={"/table"}>
        <Button>페이지 전환</Button>
      </NavLink>
    </div>
  );
}

export default MainPage;
