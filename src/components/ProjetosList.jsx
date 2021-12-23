import React, { useContext } from 'react';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function ProjetosList() {
    const { themePortfolio} = useContext(PortfolioContext);
    return (
        <div className={ themePortfolio ? "container-ligth" : "container-dark" }>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Projeto 1</h2>
                <p>Vem ver!</p>
              </div>
              
            </div>
            <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
              Aqui contém um projeto realizado na Trybe, no curso de desenvolvimento Web. Colocando em prática os conhecimentos adquiridos.
            </div> 
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Projeto 2</h2>
                <p>Vem ver!</p>
              </div>
            </div>
            <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
              Aqui contém um projeto realizado na Trybe, no curso de desenvolvimento Web. Colocando em prática os conhecimentos adquiridos.
            </div> 
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Projeto 3</h2>
                <p>Vem ver!</p>
              </div>
            </div>
            <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
              Aqui contém um projeto realizado na Trybe, no curso de desenvolvimento Web. Colocando em prática os conhecimentos adquiridos.
            </div> 
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Projeto 4</h2>
                <p>Vem ver!</p>
              </div>
            </div>
            <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
              Aqui contém um projeto realizado na Trybe, no curso de desenvolvimento Web. Colocando em prática os conhecimentos adquiridos.
            </div> 
          </div>

          <div className="card-container">
            <div className="card">
              <div className="card-wrapper">
                <h2>Projeto 5</h2>
                <p>Vem ver!</p>
              </div>
            </div>
            <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
              Aqui contém um projeto realizado na Trybe, no curso de desenvolvimento Web. Colocando em prática os conhecimentos adquiridos.
            </div> 
          </div>

        </div> 
    );
}
