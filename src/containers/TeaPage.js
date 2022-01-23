import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import tea from "../assets/images/teaHeader.jpg";
import rec from "../assets/images/tea/rec.jpeg";
import des from "../assets/images/tea/des.jpeg";
import deg from "../assets/images/tea/deg.jpeg";

const Div = styled.div``;

const Header = styled.div`
  height: 360px;
  background-image: url(${tea});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 48px;
    padding: 24px;
    border-radius: 24px;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const TextContainer = styled.div`
  padding: 0 120px;
  padding-bottom: 64px;
  p,
  li {
    text-align: justify;
    margin: 16px 0;
    font-size: 16px;
  }
  ul {
    list-style-position: inside;
  }
  h2 {
    text-align: center;
    margin: 32px 0;
  }
  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;

const TeaPage = () => {
  return (
    <Div>
      <Switch>
        <Route path="/tea/inf">
          <Header>
            <h1>Infusiones</h1>
          </Header>
          <TextContainer>
            <h2>¡Aprenda todo sobre el té y las infusiones de hierbas!</h2>
            <p>
              La diferencia entre los "tés", y las “infusiones” radica en que,
              las infusiones de hierbas en realidad no se consideran tés
              científicamente en absoluto, ya que no contienen teina, que es una
              molécula exactamente igual a la cafeína que actúa como estimulante
              del sistema nervioso disminuyendo el sueño y reduciendo la
              sensación de fatiga.
            </p>
            <p>
              Y aunque a las infusiones se les puede llamar comúnmente como
              “Tes” realmente son “infusiones herbales”.{" "}
            </p>
            <p>
              El té propiamente dicho, es el que se prepara con las hojas de de
              la planta Camellia Sinensis, que comúnmente llamamos planta de té,
              de la que se derivan cinco tipos de tes distintos.
            </p>
            <p>
              La preparación y madurez de las hojas de té determinan tanto el
              sabor como el contenido nutricional de cada bebida:
            </p>
            <ul>
              <li>
                Las hojas que se utilizan para hacer té negro están marchitas y
                completamente oxidadas, lo que significa que se secan y
                modifican a través de una exposición prolongada al aire.
              </li>
              <li>
                El té verde pasa por el proceso de marchitamiento, pero no por
                oxidación, mientras que las hojas de té oolong se marchitan y
                oxidan, pero no en la extensión prolongada de las hojas de té
                negro.
              </li>
              <li>
                El té blanco es el brote de té joven y no se marchita ni se
                oxida.
              </li>
              <li>Finalmente, se fermentan las hojas de té Pu-erh.</li>
            </ul>
            <p>
              Y las infusiones; o comúnmente llamadas “tés herbales” incluyen
              los de manzanilla y menta, y gran variedad de plantas medicinales
              con diferentes valores nutricionales, y diferentes propiedades
              benéficas para nuestro organismo, como pueden ser propiedades;
              relajantes, antiespasmódicas, para fortalecer el sistema
              inmunológico, entre miles de propiedades que tienen cada una de
              ellas.
            </p>
          </TextContainer>
        </Route>
        <Route path="/tea/proc">
          <TextContainer>
            <h2 id="t2">Proceso</h2>
            <ul>
              <li>
                Recolección: las plantas que utilizamos en Manú son arrancadas a
                mano por todos nosotros que pertenecemos al equipo, cuidando y
                dando mantenimiento a las diferentes plantas. Y aunque tenemos
                una gran variedad de plantas, la mayoría son cuidadas y podadas
                por todos nosotros con mucho cariño y respeto. Para su
                producción no se utiliza ningún tipo de producto químico lo que
                hace que el producto recolectado sea orgánico.
              </li>
              <img src={rec} alt={rec}></img>
              <li>
                Pesaje: durante una jornada laboral típica de 8 horas en la
                finca, se recolecta en canastas, las diferentes plantas o flores
                que han sido podadas en el día, y se lleva para inspeccionarlas
                y pesarlas para asegurarse de que solo se elige producto verde
                de la más alta calidad y sin daños para procesarlas. Según la
                planta a podar una persona puede sacar hasta 200k de material
                verde por día.
              </li>
              <li>
                Transporte: Las plantas recién cosechadas se transportan
                directamente desde la finca a nuestro invernadero de secado, en
                el lugar, donde la inspección, clasificación y procesamiento de
                las plantas comienza de inmediato.
              </li>
              <li>
                Marchitamiento: las hojas de té recién arrancadas son frágiles y
                pueden romperse fácilmente. Entonces, como primer paso en el
                procesamiento, las hojas se colocan para que se sequen durante
                varias horas para que se "marchiten" y pierdan parte de su
                contenido de humedad. El marchitamiento suaviza las hojas de té,
                haciéndolas flexibles y flexibles para que no se desmoronen
                durante el resto de los pasos de procesamiento.
              </li>
              <li>
                Deshidratado: Con el deshidratado inicia el proceso de secado
                final. Una vez que la hoja esta lista, aplicamos calor a la
                plantas o flores para detener el proceso de oxidación y reducir
                aún más el contenido de humedad de la hoja para que tanto las
                hojas como las flores puedan almacenar sin estropearse. Para
                este fin hemos diseñado un invernadero que potencia la energía
                solar, alcanzando temperaturas de 500C, sin consumir ningún tipo
                de combustibles ni electricidad, lo que hace que mantengamos
                nuestro proceso verde, amigable con el ambiente.
              </li>
              <img src={des} alt={des}></img>
              <li>
                Clasificación: una vez que el producto ha sido deshidratado, se
                clasifican y empacan, según la presentación deseada por el
                cliente. Sin embargo, estos sistemas de clasificación no
                necesariamente determinan la calidad. La mejor medida de calidad
                es el sabor del té final.
              </li>
              <li>
                Degustación: antes de que cualquier planta de Manú viaje desde
                nuestra finca para llegar a su hogar, probamos cuidadosamente
                cada lote para asegurarnos de que sea de una calidad
                constantemente fresca y pura.
              </li>
              <img src={deg} alt={deg}></img>
            </ul>
          </TextContainer>
        </Route>
        <Route path="/tea/t3"></Route>
      </Switch>
    </Div>
  );
};

export default TeaPage;
