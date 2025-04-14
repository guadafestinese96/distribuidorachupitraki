import logoWp from "../../assets/whatsappLogo.png";
import logoIg from "../../assets/instagramLogo.png";
import logoMap from "../../assets/map.png";
import "./Footer.css";
import email from "../../assets/logoEmail.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const phoneNumber = "5491150057994";
  const mensaje = "Hola Distribuidora Chupitraki! Te quiero consultar por ";
  return (
    <div className="footerContainer">
      <div className="textContainer">
        <p className="text">+54 9 1150057994</p>
        <p className="text">@distribuidora_chupitraki</p>
        <p className="text">Barracas, CABA</p>
      </div>

      <div className="iconsFooter">
        <NavLink
          to={`https://wa.me/${phoneNumber}?text=${mensaje}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logoWp} alt="logoWp" className="logosFooter" />
        </NavLink>

        <a
          href="https://www.instagram.com/distribuidora_chupitraki/"
          target="_blank"
        >
          <img src={logoIg} alt="logoIg" className="logosFooter" />
        </a>

        <a
          href="https://www.google.com/maps/place/Molina+Ciudad/@-34.639592,-58.3716869,17z/data=!3m1!4b1!4m6!3m5!1s0x95a334b3769ee71b:0x411eb49c905570f!8m2!3d-34.6395964!4d-58.369112!16s%2Fg%2F11clsddnnf?entry=ttu"
          target="_blank"
        >
          <img src={logoMap} alt="logoMap" className="logosFooter" />
        </a>

        <div className="contactFooter">
          <NavLink to="/form">
            <img src={email} alt="email" className="logosFooterEmail" />
          </NavLink>
        </div>
      </div>

      <div className="footerContent">
        &copy; 2024 Guadalupe Festinese. Todos los derechos reservados.
        <div>
          Contacto:{" "}
          <a
            href="mailto:festinese.guadalupe@gmail.com"
            className="datosContacto"
          >
            festinese.guadalupe@gmail.com
          </a>
        </div>
        <div>
          Whatsapp:{" "}
          <a
            href="https://api.whatsapp.com/send/?phone=1161950112&text&type=phone_number&app_absent=0"
            target="_blank"
            className="datosContacto"
          >
            {" "}
            +54 9 1161950112
          </a>
        </div>
      </div>
    </div>
  );
}
