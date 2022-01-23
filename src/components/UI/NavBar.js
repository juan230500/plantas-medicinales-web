import styled from "styled-components";
import { COLORS } from "../../Constants";
import { Link } from "react-router-dom";
import logo from "../../assets/images/manu blanco.png";
import { Dropdown } from "react-bootstrap";

const Div = styled.div`
  background-color: ${COLORS.primary};
  padding: 8px;
  display: flex;
  align-items: flex-end;
  gap: 48px;
  img {
    width: 200px;
  }

  a.logo {
    flex: 1;
  }

  @media (max-width: 768px) {
    gap: 8px;
    img {
      width: 96px;
    }
    a {
      font-size: 0.65rem;
    }
  }
`;

const StyledLink = styled(Link)`
  color: white;
  display: inline-flex;
  text-decoration: none;
  font-size: 1.5rem;

  &:hover {
    color: white;
  }
`;

const SpecialLink = styled(StyledLink)`
  display: flex;
  color: black;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  &:hover {
    color: black;
  }
`;

const NavBar = (props) => {
  return (
    <Div>
      <StyledLink accent className="logo" to="/">
        <img src={logo} alt="logo"></img>
      </StyledLink>
      <Dropdown>
        <Dropdown.Toggle variant="success">
          <StyledLink accent>Té 101</StyledLink>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <SpecialLink to="/tea/inf">Infusiones</SpecialLink>
          <SpecialLink to="/tea/proc">Proceso</SpecialLink>
        </Dropdown.Menu>
      </Dropdown>
      <StyledLink accent to="/about">
        Acerca de nosotros
      </StyledLink>
      <StyledLink accent to="/contact">
        Ventas al por mayor
      </StyledLink>
    </Div>
  );
};

export default NavBar;
