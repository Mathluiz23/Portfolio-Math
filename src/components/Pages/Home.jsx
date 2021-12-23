import React, { useContext } from 'react';
import '../css/App.css';

export default function Home() {
  const { themePortfolio } = useContext(PortfolioContext);
  console.log(themePortfolio);
    return (
        <body>
     
        </body>
    );
}
