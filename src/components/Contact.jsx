import React, { useContext } from "react";
import '../css/contact.css'
import PortfolioContext from '../context/PortfolioContext';
import { HiOutlineMail } from 'react-icons/hi';
import { FaMapMarkerAlt } from 'react-icons/fa'; 
import { RiWhatsappFill } from 'react-icons/ri'; 
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';


export default function Contact() {
  const { themePortfolio } = useContext(PortfolioContext);
  return (
    <>
      <div className={ themePortfolio ? "entre-em-contato-ligth" :"entre-em-contato-dark"}>
        <h1>Contact me</h1>
        <h1 className="title-contato">!</h1>
      </div>

      <div className="contact-me">
        <div className={ themePortfolio ? "contato-ligth" :"contato-dark"}>
          <div className={ themePortfolio ? "social-contact-ligth" : "social-contact-dark"}>
            <div className="contact">
              <a href="https://web.whatsapp.com/send?phone=353832072425" target="blank"><RiWhatsappFill size={40}/></a>
              <h3>Send me a whatsapp</h3>
            </div>

            <div className="contact">
              <a href="mailto:mathluizs23@gmail.com" target="blank"><HiOutlineMail size={40}/></a>
              <h3>mathluizs23@gmail.com</h3>
            </div>
          </div>
        </div>

        <div className={ themePortfolio ? "contact-local-ligth" : "contact-local-dark"}>
          <div className="contact">
            <a href="a" target="blank"><FaMapMarkerAlt size={40}/></a>
            <h3>Waterford - IE</h3>
          </div>
          <div className="contact">
            <a href="https://web.whatsapp.com/send?phone=5551981386882" target="blank"><BsFillTelephoneFill size={35}/></a>
            <h3>(+353)83207-2425</h3>
          </div>
          <div className="contact">
            <a href="a" target="blank"><BsTelegram size={40}/></a>
            <h3>Telegram</h3>
          </div>
        </div>
      </div>
    </>
  );
}
