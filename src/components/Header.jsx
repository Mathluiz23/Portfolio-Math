import React from 'react';
import { GiBedLamp } from "react-icons/gi";
import '../css/App.css';
import '../css/header.css';

export default function Header() {
  return (
    <header>
      <div>
        <h1>Math</h1>
        <p>.</p>
        <button 
          type='button'
        >
          <GiBedLamp size={20} />
        </button>
        <input type="checkbox" id="toggle"/>
          <label class="checkbox" for="toggle">
           
          </label>

        <div class="menu"></div>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projetos">Projetos</a></li>
              <li><a href="/curriculo">Currículo</a></li>
              <li><a href="https://open.spotify.com/playlist/6zXZJvi7PjF1bNBLc7jDST" target="blank">Minha playlist</a></li>
            </ul>
          </nav>
      </div>
    </header>
  );
}
