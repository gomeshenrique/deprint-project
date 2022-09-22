import { FooterStyle } from "./style";
import { InstagramLogo, WhatsappLogo } from "phosphor-react";

export function Footer() {
  return (
    <FooterStyle>
      <nav className="social-links">
        <ul role="list">
          <li>
            <a
              href="https://www.instagram.com/deprintimpressos/"
              target="_blank"
            >
              <InstagramLogo size={32} />
            </a>
          </li>
          <li>
            <WhatsappLogo size={32} />
          </li>
        </ul>
      </nav>
    </FooterStyle>
  );
}
