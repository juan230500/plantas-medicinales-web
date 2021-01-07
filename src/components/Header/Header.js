import styled from "styled-components";
import flowers from "../../assets/images/flowers.svg";
import { COLORS, LAYOUT } from "../../Constants";

const Div = styled.div`
  padding: ${LAYOUT.padding};
  background-color: ${COLORS.primary};
  border-radius: ${LAYOUT.borderRadius};
  align-items: center;
  display: flex;
  gap: 16px;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 5rem;
  color: ${COLORS.black};
`;

const Img = styled.img`
  max-width: 50%;
`;

const Header = (props) => {
  return (
    <Div>
      <Img src={flowers} alt="flowers"></Img>
      <Title>Brindamos productos libres de químicos</Title>
    </Div>
  );
};

export default Header;
