import SearchBox from "../components/SearchBox";
import CustomTable from "../components/CustomTable";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

function TablePage() {
  return (
    <div>
      <SearchBox />
      <CustomTable />
      <NavLink to={"/"}>
        <Button>메인으로</Button>
      </NavLink>
    </div>
  );
}

export default TablePage;
