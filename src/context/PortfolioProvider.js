import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';


export default function PortfolioProvider({ children }) {
    const [themePortfolio, setThemePortfolio] = useState(false);

    const initialContex = {
       themePortfolio,
       setThemePortfolio,
      };

    return (
        <PortfolioContext.Provider value={ initialContex }>
          { children }
        </PortfolioContext.Provider>
        /* deixando as propriedades do value disponivel para os outros componentes terem acesso */
      /* children se refere que qualquer componente filho deste todoProvider será renderizado aqui */
      );
}

PortfolioProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
