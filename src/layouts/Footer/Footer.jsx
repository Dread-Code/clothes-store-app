import React from 'react'
import FacebookIcon from '../../assets/icons/icon-facebook.svg'
import InstagramIcon from '../../assets/icons/icon-instagram.svg'
import TwitterIcon from '../../assets/icons/icon-twitter.svg'
import YoutubeICon from '../../assets/icons/icon-youtube.svg'
import './Footer.scss'

const Footer = () => (
  <footer className="footer-container">
    <div className="information-container">
      <div className="politics">
        <h4>POLÍTICA</h4>
        <ul>
          <li>Políticas de privacidad</li>
          <li>Políticas de cambio</li>
          <li>Políticas de envío</li>
          <li>Términos y condiciones</li>
          <li>Responsabilidad social</li>
        </ul>
      </div>
      <div className="about-us">
        <h4>SOBRE NOSOTROS</h4>
        <ul>
          <li>Encuentra tu tienda</li>
          <li>Contáctanos</li>
          <li>Trabaja con nosotros</li>
        </ul>
      </div>
      <div className="social">
        <h4>SIGUENOS EN:</h4>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <YoutubeICon />
        </div>
      </div>
    </div>
    <div className="copyrigth-container">
      <hr />
      <span className="copyrigth">© Copyright Colombia. Todos los derechos reservados</span>
    </div>
  </footer>
)

export default Footer
