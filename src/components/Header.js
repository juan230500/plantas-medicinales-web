import styled from "styled-components";

import { COLORS, LAYOUT } from "../Constants";

const Div = styled.div`
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 400px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const Title = styled.h1`
  text-align: center;
  flex: 1;
  font-size: 3rem;
  line-height: 5rem;
  color: ${COLORS.black};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const Header = (props) => {
  return (
    <Div>
      <Title>La mejor manzanilla de Costa Rica</Title>
    </Div>
  );
};

export default Header;
