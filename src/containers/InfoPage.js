import styled from "styled-components";
import { LAYOUT } from "../Constants";
import img1 from "../assets/images/Info/img1.jpeg";
import img2 from "../assets/images/Info/img2.jpeg";
import img3 from "../assets/images/Info/img3.jpeg";
import img4 from "../assets/images/Info/img4.jpeg";
import img5 from "../assets/images/Info/img5.jpeg";

const Div = styled.div`
  padding: 32px 10%;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }

  p {
    text-align: justify;
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

const InfoPage = (props) => {
  return (
    <Div>
      <section>
        <h1>Quienes somos</h1>
        <p>
          Manú es una empresa familiar liderada por una mujer. Nuestras
          plantaciones están ubicadas en Cartago y la finca principal está en
          Cot de Oreamuno. Allí se concentra la principal producción de
          Manzanilla y Romero, con una capacidad de producción de 45 toneladas
          anuales de manzanilla fresca. Todo el proceso es amigable con el
          ambiente y totalmente orgánico.
        </p>
        <Img left src={img1}></Img>
        <p>
          Actualmente contamos con una colección de 26 especies de plantas
          medicinales en volúmenes menores, las cuales sirven para abastecer el
          mercado nacional.
        </p>
        <p>
          Esperamos que estos productos aporten bienestar a todos nuestros
          clientes. En el cuidado de su cuerpo, sanándolo y alimentándose con lo
          que la tierra nos da, esto y ser amigables con el medio ambiente, esa
          es nuestra preocupación diaria. Y por ese motivo constantemente
          estamos en formación y capacitación, para poder darles lo mejor.
        </p>
      </section>

      <section>
        <h1>Historia</h1>
        <p>
          Nuestra empresa nació en el 2018 por el deseo de una familia de tener
          su propio negocio, en un área productiva de tanta honra y tan
          gratificante como lo es la agricultura. Así este proyecto encabezado
          por Elsa Villalobos nuestra Gerente General,empezó a ver la luz.
        </p>
        <Img right src={img2}></Img>
        <p>
          La historia empezó con la investigación necesaria de la factibilidad
          de que en Costa Rica se pudiera cosechar y exportar toda la gama de
          plantas medicinales que el mercado nacional e internacional requiere.
        </p>
        <p>
          Al validar la factibilidad se comenzó la colección de diferentes
          especies de plantas medicinales, Y paralelo a esto la búsqueda de una
          finca donde poder sembrar en volumen, y la escogencia de una o dos
          especies que fueran bandera para poder canalizar nuestros esfuerzos
          económicos y físicos. En este punto se eligió la Manzanilla
          (Chamomile) y el Romero, estos por tener ya un mercado definido y una
          fuerte presencia en este, lo que nos ha ayudado a consolidar el
          mercado nacional. Aun así contamos con todas las demás especies de
          plantas medicinales pero en menor volumen.
        </p>
      </section>

      <h1>Compromisos</h1>

      <ul>
        <li>Erradicar la pobreza a lo interno de nuestra empresa.</li>
        <li>
          Ser reconocidos por ser una de las mejores empresas para trabajar.
        </li>
        <li>100% reciclaje de los residuos desechados.</li>
        <li>Liderar marcas que hacen al mundo un mejor lugar donde vivir.</li>
        <li>Ser el referente de plantas medicinales en Costa Rica.</li>
      </ul>
      <h1>Plantas medicinales en Costa Rica</h1>
      <p>
        Costa Rica como un país que tiene una larga tradición en el consumo de
        plantas medicinales que provienen de grupos indígenas,
        afrocostarricenses y caucásicos, dispone de una oferta latente para
        plantas frescas o procesadas, sin embargo esta no se encuentra lo
        suficientemente desarrollada, el país tiene una participación del 0,1%
        de las exportaciones mundiales de plantas medicinales y un 0,05% del
        mercado mundial de productos herbales/tradicionales.
      </p>
      <Img left src={img3}></Img>
      <p>
        El Estado mediante la acción de ministerios, universidades y organismos
        internacionales, han buscado fomentar el desarrollo de una producción
        sostenible y rentable para las comunidades en especial las rurales.
      </p>
      <p>
        Los principales retos del sector productivo de plantas medicinales son:
      </p>
      <ol>
        <li>Acceso al financiamiento</li>
        <li>La carencia de visión comercial</li>
        <li>Falta de asociatividad consistente</li>
      </ol>
      <p>
        Paralelo a esto, en el país hay un considerable número de empresas
        fabricantes de productos a base de las plantas medicinales, los cuales
        han tenido una presencia cada vez mayor en el mercado nacional.
      </p>
      <p>
        Adicionalmente, en Costa Rica, el consumo de este tipo de productos
        apunta hacia un incremento sostenido de las ventas, en particular por
        personas jóvenes educadas que buscan alternativas a la medicina
        convencional, especialmente para tratar enfermedades comunes y como
        suplementos nutricionales. Este dinamismo, tiene un importante desafío
        para productores y fabricantes actuales y futuros.
      </p>

      <h1>Nuestra principal plantación</h1>
      <Img right src={img4}></Img>
      <p>
        Nuestra principal plantación está ubicada en Cot de Oreamuno de Cartago.
        Tercera provincia de Costa Rica, Cot es una zona rural que se encuentra
        a 5 kilómetros al noreste de la ciudad de Cartago, en las faldas del
        volcán Irazú.
      </p>
      <p>
        Los terrenos son quebrados pero muy fértiles en su origen volcánico y en
        ellos se cultivan variedad de legumbres y también hay actividad
        ganadera. El clima es frío y neblinoso.
      </p>
      <p>
        La finca está ubicada a 3 kilómetros al noreste del centro de Cot a una
        altitud de 2074 metros sobre el nivel del mar.La finca mide 14.200
        metros cuadrados, y está dedicada totalmente al cultivo de plantas
        medicinales, principalmente Manzanilla y Romero.
      </p>
    </Div>
  );
};

export default InfoPage;
