import React, { useContext } from 'react';
import Header from '../components/Header';
import FOTO2 from '../FOTO2.png';
import CardsHardSkills from  '../components/CardsHardSkills';
import { VscTools } from "react-icons/vsc";
import Footer from '../components/Footer';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';
import Contact from '../components/Contact';

export default function Home() {
  const { themePortfolio } = useContext(PortfolioContext);
  console.log(themePortfolio);
    return (
        <body className={ themePortfolio ? "body-ligth" : "body-dark"}>
          <Header />
          <div className={ themePortfolio ? "body-home-ligth" : "body-home-dark"}>
            <div className={ themePortfolio ? "quem-sou-ligth" : "quem-sou-dark"}>
              <h1>Who I am ?!</h1>
              <p>Olá , me chamo Matheus Luiz da Silva, tenho 26 anos e sou de São Leopoldo RS.Estudande de Desenvolvimento Web Full-Stack.
                <br/>Sou um profissional em transição de carreira, cada dia mais dedicado, apaixonado, motivado com a área de tecnologia e desenvolvimento, buscando contribuir positivamente na vida das pessoas.
              </p>
            </div>
            <div>
              <img src={FOTO2} alt="foto-perfil"/>
            </div>
          </div>
            <hr />
            <br/>
            <br/>
          <div className={themePortfolio ? "hardskills-ligth" : "hardskills-dark"}>
            <h1>Hard Skills</h1>
            <a href="a"><VscTools size={50}/></a>
          </div>
          <CardsHardSkills />
           <hr/>
           <br/>
           <br/>
           <Contact/>
           <br/>
          <Footer/>
        </body>
    );
}
