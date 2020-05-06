import React from "react";
import "./global.css";
import { Header, Container, Picture, Vendedores, Footer } from "./styles";
import { FiPhoneCall,FiMail } from 'react-icons/fi'
import headerbg from "./assets/headerbg.png";
import anthony from "./assets/anthony.jpg";
import valeria from "./assets/valeria.jpg";
import alexandre from "./assets/alexandre.jpg";
function App() {
  return (
    <>
      <Header>
        <img src={headerbg} alt="mask" />
        <h1 id="usemascara">
          {" "}
          <i>#UseMascara</i>{" "}
        </h1>
      </Header>
      <Container>
        <p className="container-title">Mascáras Descartáveis com elástico</p>
        <ul>
          <li>Fabricada em tecido não tecido 100% polipropileno</li>
          <li>Costuras reforçadas</li>
          <li>TNT 40 gramas com nasal</li>
          <li>Não estéril</li>
          <li>Tres pregas horizontais</li>
          <li>Disponível na cor branca</li>
          <li>Descartável e de uso único</li>
        </ul>
        <p className="container-title">Contém 10 unidades, Tamanho único</p>
        <p className="preco">R$ 29,90</p>
        <p className="carlone">CARLONE</p>
      </Container>
      <Picture>
        <img src={anthony} alt="" />
      </Picture>
      <Vendedores>
        <div className="vendedor">
          <img src={valeria} alt="Vendedora valeria" />
          <p className="nomeVendedor">Valéria</p>
          <p className="vendenasregioes">Vende nas regiões:</p>
          <p className="regioes">
            Vila Matilde, Patriarca, Arthur Alvim, Itaquera, Vila Talarico, Vila Ré e proximidades
          </p>
          <p className="contato">Contato:</p>
          <p className="whatsapp"><FiPhoneCall/> Whatsapp: <a href="tel:11993757641"> (11)99375-7641</a></p>
          <p className="email"><FiMail /> E-mail: <a href="mailto:valerianfreire2020@gmail.com">valerianfreire2020@gmail.com</a></p>
        </div>

        <div className="vendedor">
          <img src={alexandre} alt="Vendedor Alexandre" />
          <p className="nomeVendedor">Alexandre</p>
          <p className="vendenasregioes">Vende nas regiões:</p>
          <p className="regioes">
            Tatuapé, Vila Formosa, Vila Carrão, Belém, Moóca, Vila Prudente e proximidades.
          </p>
          <p className="contato">Contato:</p>
          <p className="whatsapp"> <FiPhoneCall/> Whatsapp: <a href="tel:1197442-6119"> (11)97442-6119</a></p>
          <p className="email"><FiMail /> E-mail: <a href="mailto:alexpellegrino10@hotmail.com">alexpellegrino10@hotmail.com</a></p>
        </div>
      </Vendedores>
      <Footer >
        <p className="footer">By: Alexandre Pellegrino</p>
        
        <p className="footer">#staysafe</p>
      </Footer>
    </>
  );
}

export default App;
