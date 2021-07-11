import styled from "styled-components";

import { COLORS } from "../Constants";

import Section from "../components/UI/Section";
import NetWork from "../components/NetWork";
import Benefit from "../components/Benefit";
import Footer from "../components/Footer";

import flores from "../assets/images/flowers.jpeg";
import hojas from "../assets/images/hojas.png";
import productos from "../assets/images/productos.jpg";
import categoria1 from "../assets/images/categoria1.png";
import categoria2 from "../assets/images/categoria2.png";
import categoria3 from "../assets/images/categoria3.png";
import categoria4 from "../assets/images/categoria4.png";

const Div = styled.div``;

const Benefits = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Products = styled.div`
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    height: 240px;
  }
`;

const BgImg = styled.img`
  top: 0;
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  filter: contrast(50%);
`;

const ProductsTitle = styled.div`
  font-family: "Merienda", cursive;
  text-align: center;
  color: ${COLORS.white};
  font-size: 3rem;
  padding: 8px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Leaf1 = styled.img`
  left: -45px;
  top: -35px;
  position: absolute;
  width: 75px;
`;

const Networks = styled.div`
  display: flex;
  justify-content: center;
  gap: 240px;
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  top: -64px;
  a {
    display: inline-block;
    flex: 1;
    margin: 0 16px;
  }

  a img {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const LandingPage = (props) => {
  return (
    <Div>
      <Products>
        <BgImg src={productos} alt="test"></BgImg>
        <ProductsTitle>
          Disfruta el poder de las plantas ...
          <Leaf1 src={hojas}></Leaf1>
        </ProductsTitle>
      </Products>
      <Categories>
        <a
          href="https://manucomercial.minidux.com/categories/1/especies"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="category" src={categoria1}></img>
        </a>
        <a
          href="https://manucomercial.minidux.com/categories/2/plantas-medicinales"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="category" src={categoria2}></img>
        </a>
        <a
          href="https://manucomercial.minidux.com/categories/6/accesorios"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="category" src={categoria3}></img>
        </a>
        <a
          href="https://manucomercial.minidux.com/categories/5/paquetes-especiales"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="category" src={categoria4}></img>
        </a>
      </Categories>

      <Section title="Se trata de algo más que plantas">
        <Benefits>
          <Benefit
            title="Por el medio ambiente"
            text="Para el cultivo de las plantas usamos prácticas amigables con el ambiente donde se eliminia el uso de productos químicos y s ereduce la erosión del suelo"
            icon="recycle"
          ></Benefit>
          <Benefit
            title="Para la gente"
            text="Al ser una empresa 100% costarricense, todo el beneficio económico se queda en el país empleando fuerza laboral en territorios rurales"
            icon="heart"
          ></Benefit>
          <Benefit
            title="Para le gusto"
            text="Debido a que somos productores nuestras plantas llegan directamente de la finca a sus tazas, garantizando la frescura y el sabor"
            icon="tea"
          ></Benefit>
        </Benefits>
      </Section>
      <Img src={flores}></Img>
      <Section title="Redes">
        <Networks>
          <NetWork
            link="http://manucomercial.minidux.com/"
            name="shop"
          ></NetWork>
          <NetWork
            link="https://wa.me/message/NELG6KHNH7UZO1"
            name="whatsapp"
          ></NetWork>
          <NetWork
            link="https://www.facebook.com/Manucousings/?ti=as"
            name="facebook"
          ></NetWork>
          <NetWork
            link="https://www.instagram.com/manucomercial/"
            name="instagram"
          ></NetWork>
        </Networks>
      </Section>

      <Section accent>
        <Footer></Footer>
      </Section>
    </Div>
  );
};

export default LandingPage;
