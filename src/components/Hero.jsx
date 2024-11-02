import React from "react";
import alican from "../media/alican.jpg";
import instagram from "../media/instagram.png";
import googleMaps from "../media/google-maps.png";
import eksisozluk from "../media/eksisozluk.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import "../css/hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="heroPic">
        <img className="alicanPhoto" src={alican} alt="" />
      </div>
      <div className="heroText">
        <h1 className="heroTitle">Dijital Almanca Dil Okulu</h1>
        <p className="heroDescription">
          DERS KAÇIRMA VE ZAMAN SINIRIN OLMADAN ALMANYA'DA GEÇERLİ BİR SERTİFİKA
          SINAVINI GEÇENE KADAR KISA SÜREDE ONLINE ALMANCA ÖĞREN
        </p>
        <div className="socialMedia">
          <a href="#">
            <img className="socialIcon" src={instagram} alt="" />
          </a>
          <a href="#">
            <img className="socialIcon" src={googleMaps} alt="" />
          </a>
          <a href="#">
            <img className="socialIcon" src={eksisozluk} alt="" />
          </a>
        </div>
        <a
          className="ucretsiz-gorusme"
          target="blank"
          href="https://api.whatsapp.com/send/?phone=491782483080&text=Merhaba%2C+%C3%BCcretsiz+%C3%B6ng%C3%B6r%C3%BC%C5%9Fme+i%C3%A7in+randevu+alabilir+miyim%3F&type=phone_number&app_absent=0"
        >
          <FaWhatsapp className="whatsapp" />
          ÜCRETSİZ ÖN GÖRÜŞME İÇİN RANDEVU AL
        </a>
      </div>
    </div>
  );
}

export default Hero;
