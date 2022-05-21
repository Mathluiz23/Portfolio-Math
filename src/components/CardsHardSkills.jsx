import React, { useContext } from 'react';
import { SiRedux, SiReact, SiMysql, SiTypescript} from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { GrDocker } from "react-icons/gr";
import { FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function CardHardSkills() {
  const { themePortfolio } = useContext(PortfolioContext);

  return (
    <>
      <div className='hardSkills-container'>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a  href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="blank"><DiJavascript size={100}/></a>
          <h2>JavaScript</h2>
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="blank"><SiReact size={100}/></a>
          <h2>React</h2>
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a href="https://redux.js.org/" target="blank"><SiRedux size={100}/></a>
          <h2>React Redux</h2>
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element" target="blank"><FaHtml5 size={100}/></a>
          <h2>Html 5</h2>  
        </div>
        
        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="blank"><FaCss3Alt size={100}/></a>
          <h2>CSS 3</h2>
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a  href="https://pt-br.reactjs.org/docs/hooks-reference.html" target="blank"><SiReact size={100}/></a>
          <h2>Hooks + Context</h2>
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a  href="https://nodejs.org/en/" target="blank"><FaNodeJs size={100}/></a>
          <h2>Node.js</h2>
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a  href="https://www.typescriptlang.org/" target="blank"><SiTypescript size={100}/></a>
          <h2>Typescript</h2>
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a href="https://git-scm.com/docs/git/pt_BR" target="blank"><FaGitAlt size={100}/></a>
          <h2>Git</h2>  
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a href="https://docs.github.com/pt" target="blank"><FaGithub size={100}/></a>
          <h2>GitHub</h2>  
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a href="https://docs.docker.com/" target="blank"><GrDocker size={100}/></a>
          <h2>Docker</h2>
        </div>

        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a href="https://dev.mysql.com/doc/" target="blank"><SiMysql size={100}/></a>
          <h2>MySQL</h2>
        </div>
      </div>
    </>
  );
}
