import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div>

      <Header title="My News Feed" date="September.18th / 2023" />

      <Main>

        <Article
          news="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          author="By: Steve Hanely"
          content="Tesla's Giga Shanghai is expanding and will soon be able to manufacture more than 1 million cars a year."
          placeHolder="https://cleantechnica.com/files/2021/10/Tesla-China-Sales-e1642076454693.jpeg"
          url="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
        />

        <Article
          news="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
          author="By: Milenio Digital"
          content="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. 
          ?La verdadera deuda nacional, incluidos los derechos no financiados, es de al menos 60 billones de dólares, 
          aproximadamente tres veces el tamaño de toda la economía de ..."
          placeHolder="https://www.milenio.com/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg"
          url="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares"
        />

        <Article
          news="Tesla recall for heater and defroster systems issued by Transport Canada"
          author="By: Maria Merano"
          content="Transport Canada issued a recall for the Tesla Model 3, Model Y, and Model S on February 3, 2022, the agency told Teslarati recently. 
          The recall was issued after the agency discovered an issue with the heat system in certain Tesla vehicles. 
          Transport Canada reported that a little over ..."
          placeHolder="https://www.teslarati.com/wp-content/uploads/2020/11/tesla-model-3-heat-pump-refresh-1024x512.jpeg"
          url="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
        />

        <Article
          news="China representó la mitad de las ventas globales de coches eléctricos en 2021"
          author="By: Newsroom Infobae"
          content="Shanghái (China), 14 feb La mitad de las ventas de vehículos eléctricos registradas en 2021 a nivel mundial se efectuaron en China, 
          según datos publicados hoy por la consultora Canalys. En total, según las estimaciones de Canalys, se vendieron 6,5 millones de este tipo de vehículos 
          -incluyendo los totalmente eléctricos ..."
          placeHolder="https://placehold.co/600x400?text=News+Story"
          url="https://www.infobae.com/america/agencias/2022/02/14/china-represento-la-mitad-de-las-ventas-globales-de-coches-electricos-en-2021-2/"
        />

      </Main>

    </div>
  )
}

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <p className="date">{props.date}</p>
    </div>
  );
}

function Main(props) {
  return (
    <div className="main">
      <ul className="news">{props.children}</ul>
    </div>
  );
}

function Article(props) {
  return (
    <div className="container">
      
      <div className="left">
        <h2 className="header-article">
          <a href={props.url}>{props.news}</a>
        </h2>
        <p>{props.content}</p>
        <span>{props.author}</span>
      </div>
      <div className="right">
        <div className="img">
          <img className="img-box"src={props.placeHolder} alt="" />
        </div>
      </div>
    </div>
  );
}




const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
