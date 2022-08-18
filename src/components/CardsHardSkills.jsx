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
    { skill: 'JavaScript', doc: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript", icon:<DiJavascript size={100}/>},
    { skill: 'React', doc: "https://pt-br.reactjs.org/docs/getting-started.html", icon:<SiReact size={100}/>},
    { skill: 'React Redux', doc: "https://redux.js.org/", icon:<SiRedux size={100}/>},
    { skill: 'Html 5', doc: "https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element", icon:<FaHtml5 size={100}/>},
    { skill: 'CSS 3', doc: "https://developer.mozilla.org/pt-BR/docs/Web/CSS", icon:<FaCss3Alt size={100}/>},
    { skill: 'Hooks + Context', doc: "https://pt-br.reactjs.org/docs/hooks-reference.html", icon:<SiReact size={100}/>},
    { skill: 'Node.js', doc: "https://nodejs.org/en/", icon:<FaNodeJs size={100}/>},
    { skill: 'Typescript', doc: "https://www.typescriptlang.org/", icon:<SiTypescript size={100}/>},
    { skill: 'Git', doc: "https://git-scm.com/docs/git/pt_BR", icon:<FaGitAlt size={100}/>},
    { skill: 'GitHub', doc: "https://docs.github.com/pt", icon:<FaGithub size={100}/>},
    { skill: 'Docker', doc: "https://docs.docker.com/", icon:<GrDocker size={100}/>},
    { skill: 'MySql', doc: "https://dev.mysql.com/doc/", icon:<SiMysql size={100}/>},
  ];

  return (
    <>
      <div className='hardSkills-container'>
        { myHardSkills.map(({skill, doc, icon}) =>
          <div className={ themePortfolio ? "hardSkills-card-ligth" :"hardSkills-card-dark"}>
            <a  href={doc} target="blank">
              {icon}
            </a>
            <h2>{skill}</h2>
          </div>
        )};
      </div>
    </>
  );
}
