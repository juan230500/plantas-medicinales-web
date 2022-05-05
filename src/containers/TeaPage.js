import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import tea from "../assets/images/teaHeader.jpg";
import rec from "../assets/images/tea/rec.jpeg";
import des from "../assets/images/tea/des.jpeg";
import deg from "../assets/images/tea/deg.jpeg";

import { LAYOUT } from "../Constants";
import img1 from "../assets/images/Info/img1.jpeg";
import img2 from "../assets/images/Info/img2.jpeg";
import img3 from "../assets/images/Info/img3.jpeg";
import img4 from "../assets/images/Info/img4.jpeg";
//import img5 from "../assets/images/Info/img5.jpeg";
import intro from "../assets/videos/intro.mp4";

const Video = styled.video`
  width: 100%;
  height: 360px;
  display: block;
  margin: auto;
  border-radius: ${LAYOUT.borderRadius};

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AboutContainer = styled.div`
  padding: 32px 10%;
  p {
    text-align: justify;
  }
  ul,
  ol {
    overflow: hidden;
  }

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

const Img = styled.img`
  border-radius: ${LAYOUT.borderRadius};
  max-width: 300px;
  margin: 8px;
  box-sizing: border-box;
  float: ${(props) => (props.left ? "left" : "")};
  float: ${(props) => (props.right ? "right" : "")};

  @media (max-width: 768px) {
    float: none;
    margin: 0;
    max-width: 100%;
  }
`;

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
    <div>
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
        <Route path="/tea/about">
          <AboutContainer>
            <Video src={intro} controls></Video>
            <h1>Quienes somos</h1>
            <p>
              Manú es una empresa familiar liderada por una mujer. Nuestras
              plantaciones están ubicadas en Cartago y la finca principal está
              en Cot de Oreamuno. Allí se concentra la principal producción de
              Manzanilla y Romero, con una capacidad de producción de 45
              toneladas anuales de manzanilla fresca. Todo el proceso es
              amigable con el ambiente y totalmente orgánico.
            </p>
            <Img left src={img1}></Img>
            <p>
              Actualmente contamos con una colección de 26 especies de plantas
              medicinales en volúmenes menores, las cuales sirven para abastecer
              el mercado nacional.
            </p>
            <p>
              Esperamos que estos productos aporten bienestar a todos nuestros
              clientes. En el cuidado de su cuerpo, sanándolo y alimentándose
              con lo que la tierra nos da, esto y ser amigables con el medio
              ambiente, esa es nuestra preocupación diaria. Y por ese motivo
              constantemente estamos en formación y capacitación, para poder
              darles lo mejor.
            </p>

            <h1>Historia</h1>
            <p>
              Nuestra empresa nació en el 2018 por el deseo de una familia de
              tener su propio negocio, en un área productiva de tanta honra y
              tan gratificante como lo es la agricultura. Así este proyecto
              encabezado por Elsa Villalobos nuestra Gerente General,empezó a
              ver la luz.
            </p>
            <Img right src={img2}></Img>
            <p>
              La historia empezó con la investigación necesaria de la
              factibilidad de que en Costa Rica se pudiera cosechar y exportar
              toda la gama de plantas medicinales que el mercado nacional e
              internacional requiere.
            </p>
            <p>
              Al validar la factibilidad se comenzó la colección de diferentes
              especies de plantas medicinales, Y paralelo a esto la búsqueda de
              una finca donde poder sembrar en volumen, y la escogencia de una o
              dos especies que fueran bandera para poder canalizar nuestros
              esfuerzos económicos y físicos. En este punto se eligió la
              Manzanilla (Chamomile) y el Romero, estos por tener ya un mercado
              definido y una fuerte presencia en este, lo que nos ha ayudado a
              consolidar el mercado nacional. Aun así contamos con todas las
              demás especies de plantas medicinales pero en menor volumen.
            </p>
            <h1>Compromisos</h1>
            <ul>
              <li>Erradicar la pobreza a lo interno de nuestra empresa.</li>
              <li>
                Ser reconocidos por ser una de las mejores empresas para
                trabajar.
              </li>
              <li>100% reciclaje de los residuos desechados.</li>
              <li>
                Liderar marcas que hacen al mundo un mejor lugar donde vivir.
              </li>
              <li>Ser el referente de plantas medicinales en Costa Rica.</li>
            </ul>
            <h1>Plantas medicinales en Costa Rica</h1>
            <p>
              Costa Rica como un país que tiene una larga tradición en el
              consumo de plantas medicinales que provienen de grupos indígenas,
              afrocostarricenses y caucásicos, dispone de una oferta latente
              para plantas frescas o procesadas, sin embargo esta no se
              encuentra lo suficientemente desarrollada, el país tiene una
              participación del 0,1% de las exportaciones mundiales de plantas
              medicinales y un 0,05% del mercado mundial de productos
              herbales/tradicionales.
            </p>
            <Img left src={img3}></Img>
            <p>
              El Estado mediante la acción de ministerios, universidades y
              organismos internacionales, han buscado fomentar el desarrollo de
              una producción sostenible y rentable para las comunidades en
              especial las rurales.
            </p>
            <p>
              Los principales retos del sector productivo de plantas medicinales
              son:
            </p>
            <ol>
              <li>Acceso al financiamiento</li>
              <li>La carencia de visión comercial</li>
              <li>Falta de asociatividad consistente</li>
            </ol>
            <p>
              Paralelo a esto, en el país hay un considerable número de empresas
              fabricantes de productos a base de las plantas medicinales, los
              cuales han tenido una presencia cada vez mayor en el mercado
              nacional.
            </p>
            <p>
              Adicionalmente, en Costa Rica, el consumo de este tipo de
              productos apunta hacia un incremento sostenido de las ventas, en
              particular por personas jóvenes educadas que buscan alternativas a
              la medicina convencional, especialmente para tratar enfermedades
              comunes y como suplementos nutricionales. Este dinamismo, tiene un
              importante desafío para productores y fabricantes actuales y
              futuros.
            </p>

            <h1>Nuestra principal plantación</h1>
            <Img right src={img4}></Img>
            <p>
              Nuestra principal plantación está ubicada en Cot de Oreamuno de
              Cartago. Tercera provincia de Costa Rica, Cot es una zona rural
              que se encuentra a 5 kilómetros al noreste de la ciudad de
              Cartago, en las faldas del volcán Irazú.
            </p>
            <p>
              Los terrenos son quebrados pero muy fértiles en su origen
              volcánico y en ellos se cultivan variedad de legumbres y también
              hay actividad ganadera. El clima es frío y neblinoso.
            </p>
            <p>
              La finca está ubicada a 3 kilómetros al noreste del centro de Cot
              a una altitud de 2074 metros sobre el nivel del mar.La finca mide
              14.200 metros cuadrados, y está dedicada totalmente al cultivo de
              plantas medicinales, principalmente Manzanilla y Romero.
            </p>
          </AboutContainer>
        </Route>
      </Switch>
    </div>
  );
};

export default TeaPage;
