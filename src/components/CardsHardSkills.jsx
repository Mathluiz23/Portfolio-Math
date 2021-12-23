import React, { useContext } from 'react';

import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function CardHardSkills() {
  const { themePortfolio } = useContext(PortfolioContext);
  return (
    <>
      <div className='hardSkills-container'>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <h2>React</h2>
        </div>
      </div>
    </>
  );
}
