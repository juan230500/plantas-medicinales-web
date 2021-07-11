import styled from "styled-components";
import { COLORS } from "../../Constants";
import { Link } from "react-router-dom";
import logo from "../../assets/images/manu blanco.png";

const Div = styled.div`
  background-color: ${COLORS.primary};
  padding: 8px;
  display: flex;
  align-items: flex-end;
  gap: 48px;
  img {
    width: 200px;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-family: "Merienda", cursive;
  }

  a.logo {
    flex: 1;
  }
`;
const NavBar = (props) => {
  return (
    <Div>
      <Link className="logo" to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <Link to="/">Plantaciones</Link>
      <Link to="/">Té 101</Link>
      <Link to="/contact">Ventas al por mayor</Link>
      {/* <Link
        onClick={() =>
          window.open("http://manucomercial.minidux.com/", "_blank")
        }
      >
        Tienda
      </Link>
      <Link to="/about">Nuestra Empresa</Link>
      <Link to="/contact">Contacto</Link> */}
    </Div>
  );
};

export default NavBar;
