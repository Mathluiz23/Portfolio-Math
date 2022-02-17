import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjetosList from '../components/ProjetosList';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function Projetos() {
  const { themePortfolio, setThemePortfolio } = useContext(PortfolioContext);

  useEffect(()=>{
    const themeActual = localStorage.getItem('theme');
    if (themeActual) {
      const theme = JSON.parse(themeActual);
      setThemePortfolio(theme)
    }
  },[setThemePortfolio])
  
    return (
        <>
          <body className={ themePortfolio ? "body-ligth" : "body-dark"}>
            <Header/>
            <ProjetosList/>
            <Footer/>
          </body>
        </>
    );
}
