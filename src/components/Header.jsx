import React, { useContext } from 'react';
import { GiBedLamp } from 'react-icons/gi';
import '../css/App.css';
import '../css/header.css';
import PortfolioContext from '../context/PortfolioContext';

export default function Header() {
  const { setThemePortfolio, themePortfolio} = useContext(PortfolioContext);

  function handleButtonDark() {
    setThemePortfolio(!themePortfolio);
  };

  return (
    <header className={ themePortfolio ? "header-container-ligth" : "header-container-dark"}>
      <div className={themePortfolio ? "header-ligth" : "header-dark"}>
        <h1>Math</h1>
        <p>.</p>

        <button 
          className={themePortfolio ? "button-select-ligth" : "button-select-dark"}
          type='button'
          onClick={ () => handleButtonDark() }
        >
          <GiBedLamp size={20} />
        </button>

        <input type="checkbox" id="toggle"/>
          <label class="checkbox" for="toggle">
            <div class={themePortfolio ? "trace-ligth" : "trace-dark"}></div>
            <div class={themePortfolio ? "trace-ligth" : "trace-dark"}></div>
            <div class={themePortfolio ? "trace-ligth" : "trace-dark"}></div>
          </label>

        <div class="menu"></div>
          <nav class="menu-items">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/cv">My CV</a></li>
              <li><a href="https://open.spotify.com/playlist/6zXZJvi7PjF1bNBLc7jDST" target="blank">My playlist</a></li>
            </ul>
          </nav>
      </div>
    </header>
  );
}
