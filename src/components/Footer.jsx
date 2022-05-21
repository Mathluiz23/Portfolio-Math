import React, { useContext } from 'react';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook} from 'react-icons/bs';
import { FcFlashOn } from 'react-icons/fc';
import PortfolioContext from '../context/PortfolioContext';
import '../css/App.css';
import '../css/footer.css';


export default function Footer() {
  const { themePortfolio } = useContext(PortfolioContext);
  return (
    <>
      <div className={ themePortfolio ? "footer-ligth" : "footer-dark"}>
        <div className={ themePortfolio ? "info-footer-ligth" : "info-footer-dark"}>
          <h5>©2021</h5>
          <h3>Matheus Luiz da Silva
            <a href="a"><FcFlashOn size={30}/></a>
          </h3>
        </div>
        <div className={ themePortfolio ? "social-media-ligth" : "social-media-dark"}>
          <a  href="https://www.linkedin.com/in/matheus-luiz-dev-web-trybe/" target="blank"><BsLinkedin size={40}/></a>
          <a href="https://github.com/Mathluiz23" target="blank"><BsGithub size={40}/></a>
          <a href="https://www.instagram.com/mathluiz23/" target="blank"><BsInstagram size={40}/></a>
          <a href="https://pt-br.facebook.com/matheus.silva.9674227" target="blank"><BsFacebook size={40}/></a>
        </div>
      </div>
    </>
  );
}
