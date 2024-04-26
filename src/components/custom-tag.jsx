/* eslint-disable react/prop-types */
import { Tag } from "antd";

const CustomTag = ({ skGrade }) => {
  let bgColor = "";
  switch (skGrade) {
    case "초급":
      bgColor = "green";
      break;
    case "중급":
      bgColor = "geekblue";
      break;
    case "고급":
      bgColor = "gold";
      break;
    case "특급":
      bgColor = "magenta";
      break;

    default:
      bgColor = "white";
      break;
  }

  return (
    <Tag color={bgColor} key={skGrade}>
      {skGrade}
    </Tag>
  );
};

export default CustomTag;
