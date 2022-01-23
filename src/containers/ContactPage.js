import { useState } from "react";
import styled from "styled-components";
import { COLORS, LAYOUT } from "../Constants";

import emailjs from "emailjs-com";

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
  padding: 16px;
  border-radius: ${LAYOUT.borderRadius};
  background-color: ${COLORS.white};
  box-shadow: ${LAYOUT.StdShadow};

  @media (max-width: 768px) {
    width: 80%;
  }
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
  margin: 8px 0;
  display: flex;
  flex-direction: column;
`;

const Note = styled.p`
  text-align: justify;
`;

const ContactPage = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    console.log(name, email, message);
    emailjs.init("user_FnLmUm6VqmWvPPa5JO9q3");
    emailjs
      .send("service_6mt7a1a", "template_asyp1ey", {
        from_name: name,
        message: email,
        email: message,
      })
      .then((e) => console.log(e));
    alert("Mensaje enviado correctamente");
    setMessage("");
  };

  return (
    <Div>
      <FormContainer>
        <Note>
          Sabemos que nuestros clientes mayoristas tienen necesidades especiales
          de productos y presentaciones por lo que nos gustaría atenderle
          personalemente. Por favor llene el siguiente formulario y le estaremos
          contactando lo más pronto posible
        </Note>
        <h1 style={{ textAlign: "center" }}>Formulario de contacto</h1>
        <form>
          <FormItem>
            <label>Tu nombre</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            ></input>
          </FormItem>
          <FormItem>
            <label>Tu correo</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            ></input>
          </FormItem>
          <FormItem>
            <label>Tu teléfono</label>
            <input value={null} onChange={(e) => {}} type="text"></input>
          </FormItem>
          <FormItem>
            <label>
              Cuentanos acerca de tu negocio y cómo podemos ayudarte
            </label>
            <textarea
              rows="7"
              style={{ resize: "vertical" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </FormItem>
        </form>
        <Button onClick={send}>Enviar</Button>
      </FormContainer>
    </Div>
  );
};

export default ContactPage;
