import React, { useContext } from 'react';
import Header from '../components/Header';
import FOTO2 from '../FOTO2.png';
import CardsHardSkills from  '../components/CardsHardSkills';
import { VscTools } from "react-icons/vsc";
import Footer from '../components/Footer';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function Home() {
  const { themePortfolio } = useContext(PortfolioContext);
  console.log(themePortfolio);
    return (
        <body className={ themePortfolio ? "body-ligth" : "body-dark"}>
          <Header />
          <CardsHardSkills />
          <Footer/>
        </body>
    );
}
