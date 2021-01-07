import styled from "styled-components";
import Footer from "../components/Footer";
import { COLORS, LAYOUT } from "../Constants";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 650px;
  background-color: ${COLORS.primary};
  color: ${COLORS.black};
`;

const FormContainer = styled.div`
  width: 50%;
  border-radius: ${LAYOUT.borderRadius};
  background-color: ${COLORS.white};
`;

const Button = styled.button`
  border: none;
  background-color: ${COLORS.primary};
  border-radius: ${LAYOUT.borderRadius};
  text-transform: uppercase;
  font-weight: bold;
  padding: 16px;
  margin: 8px;
  float: right;
  color: ${COLORS.black};
`;

const FormItem = styled.div`
  margin: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const ContactPage = (props) => {
  return (
    <Div>
      <h1>Envianos tu mensaje</h1>
      <FormContainer>
        <form>
          <FormItem>
            <label>Nombre</label>
            <input type="text"></input>
          </FormItem>
          <FormItem>
            <label>Correo</label>
            <input type="text"></input>
          </FormItem>
          <FormItem>
            <label>Mensaje</label>
            <textarea></textarea>
          </FormItem>
        </form>
        <Button onClick={() => console.log("lol")}>Enviar</Button>
      </FormContainer>
    </Div>
  );
};

export default ContactPage;
