import { FooterStyle } from "./style";
import {
  InstagramLogo,
  WhatsappLogo,
  EnvelopeSimple,
  Phone,
  MapPinLine,
} from "phosphor-react";

export function Footer() {
  return (
    <FooterStyle>
      <div className="misson flow">
        <h3>Nossa missão</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          voluptatum?
        </p>
      </div>
      <div className="locale flow">
        <div className="flex align-center">
          <MapPinLine size={20} />
          <h3>Onde estamos</h3>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1837.380351729739!2d-42.856827324345204!3d-22.922195525823383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99f2a8c308b4a3%3A0x15fdb19c0200bfac!2sR.%20Irineu%20Ferreira%20Pinto%2C%2016%20-%20Itapeba%2C%20Maric%C3%A1%20-%20RJ%2C%2024914-345!5e0!3m2!1spt-BR!2sbr!4v1663885382360!5m2!1spt-BR!2sbr"
          width="400"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <nav className="contacts flow">
        <h3>Nossos contatos</h3>
        <ul role="list">
          <li>
            <a href="tel:55021972944994">
              <Phone size={32} />
              (021) 97294-4994
            </a>
          </li>
          <li>
            <a href="mailto:deprintcomunicacao@gmail.com?subject=Orçamento&body=Olá! Gostaria de fazer um orçamento.">
              <EnvelopeSimple size={32} />
              deprintcomunicacao@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/deprintimpressos/"
              target="_blank"
            >
              <InstagramLogo size={32} />
              /deprintimpressos
            </a>
          </li>
          <li>
            <a href="https://wa.me/55021972944994?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento.">
              <WhatsappLogo size={32} />
              (021) 97294-4994
            </a>
          </li>
        </ul>
      </nav>
    </FooterStyle>
  );
}
