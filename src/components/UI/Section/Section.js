import styled from "styled-components";
import { COLORS, LAYOUT } from "../../../Constants";
import intro from "../../../assets/videos/intro.mp4";

const Div = styled.div`
  padding: ${LAYOUT.padding};
`;

const Title = styled.h2``;

const Video = styled.video`
  width: 50%;
  border-radius: ${LAYOUT.borderRadius};
`;

const Section = (props) => {
  return (
    <Div>
      <Title>{props.title}</Title>
      <Video controls src={intro} type="video/mp4" />
    </Div>
  );
};

export default Section;
