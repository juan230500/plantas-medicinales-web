import styled from "styled-components";
import flowers from "../assets/images/flowers.jpeg";
import { COLORS } from "../Constants";

import Header from "../components/Header";
import Section from "../components/UI/Section";
import NetWork from "../components/NetWork";
import Benefit from "../components/Benefit";
import Footer from "../components/Footer";

const Div = styled.div``;

const NetWorks = styled.div`
  display: flex;
  justify-content: center;
  gap: 36px;
`;

const Benefits = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Line = styled.div`
  border-right: 4px solid ${COLORS.black};
  height: 100px;
  margin: 0 32px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LandingPage = (props) => {
  return (
    <Div>
      <Section bgimg={flowers}>
        <Header></Header>
      </Section>
      <Section accent title="Nuestras redes">
        <NetWorks>
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
        </NetWorks>
      </Section>
      <Section title="Ventajas">
        <Benefits>
          <Benefit
            title="Natural"
            text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            icon="natural"
          ></Benefit>
          <Line></Line>
          <Benefit
            title="Venta por lotes"
            text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "
            icon="boxes"
          ></Benefit>
          <Line></Line>
          <Benefit
            title="Hecho en Costa Rica"
            text="lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            icon="flag"
          ></Benefit>
        </Benefits>
      </Section>
      <Section accent>
        <Footer></Footer>
      </Section>
    </Div>
  );
};

export default LandingPage;
