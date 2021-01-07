import styled from "styled-components";
import { COLORS } from "../Constants";

const Div = styled.div`
  display: flex;
  justify-content: center;
  color: ${COLORS.white};
`;

const Text = styled.p`
  color: ${COLORS.white};
  font-size: 20px;
`;

const Footer = (props) => {
  return (
    <Div>
      <Text>© 2021 Manú</Text>
    </Div>
  );
};

export default Footer;
