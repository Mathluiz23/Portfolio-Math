import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjetosList from '../components/ProjetosList';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function Projetos() {
  const { themePortfolio } = useContext(PortfolioContext);
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
