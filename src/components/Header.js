import styled from "styled-components";

import { COLORS } from "../Constants";
import flowers from "../assets/images/flowers.jpeg";
import header_image from "../assets/images/header_image.svg";
import logo from "../assets/images/manu.png";

const Img = styled.img`
  width: 20%;
`;

const Header = (props) => {
  return (
    <div>
      <Img src={logo}></Img>
    </div>
  );
};

export default Header;
