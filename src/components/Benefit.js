import styled from "styled-components";
import { COLORS } from "../Constants";
import { GiTreeBranch } from "react-icons/gi";
import { FaBoxes } from "react-icons/fa";
import cr_flag from "../assets/images/cr_flag.png";

const Div = styled.div`
  align-self: stretch;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${COLORS.black};
  flex: 1;
`;

const IconCircle = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid ${COLORS.primary};
  color: ${COLORS.primary};
  display: flex;
`;

const Benefit = (props) => {
  const iconStyle = { width: "60%", height: "60%", margin: "auto" };
  let icon = null;

  switch (props.icon) {
    case "natural":
      icon = <GiTreeBranch style={iconStyle}></GiTreeBranch>;
      break;

    case "boxes":
      icon = <FaBoxes style={iconStyle}></FaBoxes>;
      break;

    case "flag":
      icon = (
        <img
          src={cr_flag}
          alt="Costa Rica"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        ></img>
      );
      break;

    default:
      break;
  }

  return (
    <Div last={props.last}>
      <IconCircle>{icon}</IconCircle>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </Div>
  );
};

export default Benefit;
