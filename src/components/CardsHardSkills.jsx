import React, { useContext } from 'react';
import { SiRedux, SiReact, SiMysql, SiTypescript} from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { GrDocker } from "react-icons/gr";
import { FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';

export default function CardHardSkills() {
  const { themePortfolio } = useContext(PortfolioContext);

  const myHardSkills = [
    { skill: 'JavaScript', document: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"},
    { skill: 'React', document: "https://pt-br.reactjs.org/docs/getting-started.html"},
    { skill: 'React Redux', document: "https://redux.js.org/"},
    { skill: 'Html 5', document: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element"},
    { skill: 'CSS 3', document: "https://developer.mozilla.org/pt-BR/docs/Web/CSS"},
    { skill: 'Hooks + Context', document: "https://pt-br.reactjs.org/docs/hooks-reference.html"},
    { skill: 'Node.js', document: "https://nodejs.org/en/"},
    { skill: 'Typescript', document: "https://www.typescriptlang.org/"},
    { skill: 'Git', document: "https://git-scm.com/docs/git/pt_BR"},
    { skill: 'GitHub', document: "https://docs.github.com/pt"},
    { skill: 'Docker', document: "https://docs.docker.com/"},
    { skill: 'MySql', document: "https://dev.mysql.com/doc/"},

  ];

  function getStackIcon(skill, size) {
    switch (skill) {
      case 'JavaScript':
        return <DiJavascript size={size}/>
      case 'React':
        return <SiReact size={size}/>
      case 'React Redux':
        return <SiRedux size={size}/>
      case 'Html 5':
        return <FaHtml5 size={size}/>
      case 'CSS 3':
        return <FaCss3Alt size={size}/>
      case 'Hooks + Context':
        return <SiReact size={size}/>
      case 'Node.js':
        return <FaNodeJs size={size}/>
      case 'Typescript':
        return <SiTypescript size={size}/>
      case 'Git':
        return <FaGitAlt size={size}/>
      case 'GitHub':
        return <FaGithub size={size}/>
      case 'Docker':
        return <GrDocker size={size}/>
      case 'MySql':
        return <SiMysql size={size}/>
      default:
        break;
    }
  }

  return (
    <>
      <div className='hardSkills-container'>
        { myHardSkills.map(({skill, document}) =>
        <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
          <a  href={document} target="blank">
            {getStackIcon(skill, 100)}
          </a>
          <h2>{skill}</h2>
        </div>
        )};
      </div>
    </>
  );
}
