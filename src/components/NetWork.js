import styled from "styled-components";
import { COLORS, LAYOUT } from "../Constants";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineShop,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Div = styled.div`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background-color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  color: ${COLORS.black};
  display: flex;
  box-shadow: ${LAYOUT.StdShadow};

  &:hover {
    background-color: ${COLORS.white};
    color: ${COLORS.primary};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const NetWork = (props) => {
  const iconStyle = { width: "80%", height: "80%", margin: "auto" };
  let icon = null;
  switch (props.name) {
    case "facebook":
      icon = <AiOutlineFacebook style={iconStyle}></AiOutlineFacebook>;
      break;

    case "instagram":
      icon = <AiOutlineInstagram style={iconStyle}></AiOutlineInstagram>;
      break;

    case "shop":
      icon = <AiOutlineShop style={iconStyle}></AiOutlineShop>;
      break;

    case "whatsapp":
      icon = <AiOutlineWhatsApp style={iconStyle}></AiOutlineWhatsApp>;
      break;

    default:
      break;
  }

  return (
    <Div
      onClick={() => {
        if (props.link) window.open(props.link, "_blank");
      }}
    >
      {icon}
    </Div>
  );
};

export default NetWork;
