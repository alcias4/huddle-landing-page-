import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

export function Footer() {
  const icon = ["location.svg", "phone.svg", "email.svg"];
  const p = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero, voluptate quod ducimus reiciendis, iure nihil mollitia ut aspernatur veniam sapiente hic.",
    "+1-543-123-4567",
    "example@fylo.com",
  ];

  const page = [
    "About Us",
    "What We Do",
    "FAQ",
    "Career",
    "Blog",
    "Contact Us",
  ];
  return (
    <div className="footer">
      <section>
        <h2>Ready To Build Your Community?</h2>
        <button>Get Started Fer Free</button>
      </section>
      <div className="infoFooter">
        <img className="fotLogo" src="/images/logo2.svg" alt="logo2" />
        <div>
          {icon.map((e, i) => {
            return (
              <section key={i} className="iconFooter">
                <img src={"./images/" + e} />
                <p>{p[i]}</p>
              </section>
            );
          })}
        </div>
        <div className="listFooter">
          {page.map((e, i) => {
            return <label key={i + 10}>{e}</label>;
          })}
        </div>
        <div className="iconSocial">
          <FontAwesomeIcon className="ic" icon={faFacebookF} />
          <FontAwesomeIcon className="ic" icon={faTwitter} />
          <FontAwesomeIcon className="ic" icon={faInstagram} />
        </div>
        <p className="copy">
          &copy; Copyright 2018 Hunddle. All rights reserved.
        </p>
      </div>
    </div>
  );
}
