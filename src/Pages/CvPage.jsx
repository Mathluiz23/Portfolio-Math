import React, { useContext, useEffect } from 'react';
import Curriculo from '../components/Curriculo';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function CvPage() {
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
      <Header/>
      <Curriculo/>
      <Footer/>
    </body>
  );
}
