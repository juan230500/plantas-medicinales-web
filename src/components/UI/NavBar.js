import styled from "styled-components";
import { COLORS, LAYOUT } from "../../Constants";
import { NavLink } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";

const Div = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 16px;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${COLORS.white};
  box-shadow: ${LAYOUT.StdShadow};
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
`;

const MyLink = styled(NavLink)`
  text-decoration: none;
  color: ${COLORS.black};

  &.logo {
    font-size: 1.5rem;
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid green;
  }
`;

const NavBar = (props) => {
  return (
    <Div>
      <MyLink className="logo" to="/" exact>
        <FaLeaf></FaLeaf>
        Manú
      </MyLink>
      <Links>
        <MyLink to="/about">Acerca de</MyLink>
        <MyLink to="/contact">Contacto</MyLink>
      </Links>
    </Div>
  );
};

export default NavBar;
