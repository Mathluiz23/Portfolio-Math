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

  function getStackIcon(skill) {
    switch (skill) {
      case 'Javascript':
        return <DiJavascript/>
      case 'React':
        return <SiReact/>
      case 'React Redux':
        return <SiRedux/>
      case 'Html 5':
        return <FaHtml5/>
      case 'CSS 3':
        return <FaCss3Alt/>
      case 'Hooks + Context':
        return <SiReact/>
      case 'Node.js':
        return <FaNodeJs/>
      case 'Typescript':
        return <SiTypescript/>
      case 'Git':
        return <FaGitAlt/>
      case 'GitHub':
        return <FaGithub/>
      case 'Docker':
        return <GrDocker/>
      case 'MySql':
        return <SiMysql/>
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
            <DiJavascript size={100}/>
            {getStackIcon(skill)}
          </a>
          <h2>{skill}</h2>
        </div>
        )};
      </div>
    </>
  );
}
