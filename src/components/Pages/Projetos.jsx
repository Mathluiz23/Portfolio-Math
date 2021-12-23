import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';


export default function Projetos() {
  const { themePortfolio } = useContext(PortfolioContext);
    return (
        <>
          <body className={ themePortfolio ? "body-ligth" : "body-dark"}>
           
          </body>
        </>
    );
}
