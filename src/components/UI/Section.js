import styled from "styled-components";
import { COLORS } from "../../Constants";

const Div = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) =>
    props.accent ? COLORS.primary : "transparent"};
  padding: 32px 10%;
  min-height: 200px;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const BottonLine = styled.div`
  border-bottom: 4px solid
    ${(props) => (props.accent ? COLORS.black : COLORS.primary)};
  margin: 0px auto 16px auto;
  width: 42px;
`;

const Title = styled.h2`
  font-size: 16px;
  color: ${COLORS.black};
  margin: 0;
`;

const Img = styled.img`
  opacity: 0.3;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Section = (props) => {
  return (
    <Div accent={props.accent}>
      <Img src={props.bgimg}></Img>
      {props.title ? (
        <TitleContainer>
          <Title>{props.title.toUpperCase()}</Title>
          <BottonLine accent={props.accent}></BottonLine>
        </TitleContainer>
      ) : null}

      {props.children}
    </Div>
  );
};

export default Section;
