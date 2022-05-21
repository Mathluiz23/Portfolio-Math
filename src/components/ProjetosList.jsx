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
            <h2>Project 1</h2>
            <p>come see!</p>
          </div>     
        </div>
        <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
          Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into practice.
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-wrapper">
            <h2>Project 2</h2>
            <p>come see!</p>
          </div>
        </div>
        <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
          Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into pratice.
        </div> 
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-wrapper">
            <h2>Project 3</h2>
            <p>Come see!</p>
          </div>
        </div>
        <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
          Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into pratice.
        </div> 
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-wrapper">
            <h2>Project 4</h2>
            <p>Come see!</p>
          </div>
        </div>
        <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
          Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into pratice.
        </div> 
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-wrapper">
            <h2>Project 5</h2>
            <p>Come see!</p>
          </div>
        </div>
        <div className={ themePortfolio ? "card-text-ligth" : "card-text-dark"}>
          Here it contains a project carried out at Trybe, in the Web development course. Putting the acquired knowledge into pratice.
        </div> 
      </div>
    </div> 
  );
}
