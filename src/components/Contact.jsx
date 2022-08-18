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

  const contact = [
    { 
      text: 'Send me a whatsapp',
      icon: <RiWhatsappFill size={40}/>,
      link: "https://web.whatsapp.com/send?phone=353832072425"
    },
    { 
      text: 'mathluizs23@gmail.com',
      icon: <HiOutlineMail size={40}/>,
      link: "mailto:mathluizs23@gmail.com"
    },
  ];

  const infoContact = [
    { 
      text: 'Waterford - IE',
      icon: <FaMapMarkerAlt size={40}/>, 
      link: "",
    },
    { 
      text: '(+353)83207-2425', 
      icon: <BsFillTelephoneFill size={40}/>, 
      link: "https://web.whatsapp.com/send?phone=353832072425"},
    { 
      text: 'Telegram',
      icon: <BsTelegram size={40}/>,
      link: ""
    },
  ];

  return (
    <>
      <div className={ themePortfolio ? "entre-em-contato-ligth" :"entre-em-contato-dark"}>
        <h1>Contact me</h1>
        <h1 className="title-contato">!</h1>
      </div>
      <div className="contact-me">
        <div className={ themePortfolio ? "contato-ligth" :"contato-dark"}>
          <div className={ themePortfolio ? "social-contact-ligth" : "social-contact-dark"}>
            {contact.map(({icon, text, link}) =>
              <div className="contact">
                <a href={link} target="blank">{icon}</a>
                <h3>{text}</h3>
              </div>
            )}
          </div>
        </div>

        <div className={ themePortfolio ? "contact-local-ligth" : "contact-local-dark"}>
        {infoContact.map(({text, icon, link}) =>
            <div className="contact">
              <a href={link} target="blank">{icon}</a>
              <h3>{text}</h3>
            </div>
        )}
        </div>
      </div>
    </>
  );
}
