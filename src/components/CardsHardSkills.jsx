import React, { useContext } from 'react';
import { SiReact } from "react-icons/si";

import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function CardHardSkills() {
  const { themePortfolio } = useContext(PortfolioContext);
  return (
    <>
      <div className='hardSkills-container'>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="blank"><SiReact size={100}/></a>
          <h2>React</h2>
        </div>
      </div>
    </>
  );
}
