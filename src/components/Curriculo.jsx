import React, { useContext, useEffect } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function Curriculo() {
  const { setThemePortfolio } = useContext(PortfolioContext);

  useEffect(()=>{
    const themeActual = localStorage.getItem('theme');
    if (themeActual) {
      const theme = JSON.parse(themeActual);
      setThemePortfolio(theme)
    }
  },[setThemePortfolio])
  
  return (
    <>
      <div className="curriculo">
        <h1>Page under construction, come back later. Thank you!</h1>
      </div>
    </>
  );
}