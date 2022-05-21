import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import FOTO2 from '../FOTO2.png';
import CardsHardSkills from  '../components/CardsHardSkills';
import { VscTools } from "react-icons/vsc";
import Footer from '../components/Footer';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';
import Contact from '../components/Contact';

export default function Home() {
  const { themePortfolio, setThemePortfolio } = useContext(PortfolioContext);

  useEffect(()=>{
    const themeActual = localStorage.getItem('theme');
    if (themeActual) {
      const theme = JSON.parse(themeActual);
      setThemePortfolio(theme)
    }
  },[setThemePortfolio])


  return (
    <body className={ themePortfolio ? "body-ligth" : "body-dark"}>
      <Header />
      <div className={ themePortfolio ? "body-home-ligth" : "body-home-dark"}>
        <div className={ themePortfolio ? "quem-sou-ligth" : "quem-sou-dark"}>
          <h1>Who I am ?!</h1>
          <p>
            Hello, my name is Matheus Luiz da Silva, I'm 26 years old, I'm from Brazil and I currently live in Waterford, Ireland.
            I'm a Full-stack Developer, I'm in career transition, motivated to use technology to positively impact people's lives.
          </p>
        </div>
        <div>
          <img src={FOTO2} alt="foto-perfil"/>
        </div>
      </div>
        <hr />
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
