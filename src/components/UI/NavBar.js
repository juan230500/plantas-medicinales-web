import styled from "styled-components";
import { COLORS } from "../../Constants";
import { Link } from "react-router-dom";
import logo from "../../assets/images/manu blanco.png";
import { Dropdown } from "react-bootstrap";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import LinkGroup from "./LinkGroup";

const Div = styled.div`
  background-color: ${COLORS.primary};
  padding: 8px;
  padding-right: 96px;
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

const NavBar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;

  const handleClose = () => {
    setAnchorEl();
  };

  return (
    <Div>
      <StyledLink accent className="logo" to="/">
        <img src={logo} alt="logo"></img>
      </StyledLink>
      <LinkGroup
        title="Productos"
        links={[
          { to: "/", name: "Infusiones" },
          { to: "/", name: "Té" },
        ]}
      ></LinkGroup>
      <LinkGroup
        title="Accesorios"
        links={[
          { to: "/", name: "Tazas" },
          { to: "/", name: "Botelas" },
          { to: "/", name: "Infusores" },
          { to: "/", name: "Bolsas" },
          // { to: "/", name: "Jabones" },
          // { to: "/", name: "Velas" },
          // { to: "/", name: "Aroma ambiental" },
          // { to: "/", name: "Fumables" },
        ]}
      ></LinkGroup>
      <LinkGroup
        title="Blog"
        links={[
          { to: "/tea/about", name: "Acerca de nosotros" },
          { to: "/tea/inf", name: "Infusiones" },
          { to: "/tea/proc", name: "Proceso" },
        ]}
      ></LinkGroup>
      <LinkGroup
        title="Ofertas"
        links={[
          { to: "/contact", name: "Ventas al por mayor" },
          { to: "/", name: "Cajas de regalo" },
        ]}
      ></LinkGroup>
    </Div>
  );
};

export default NavBar;
