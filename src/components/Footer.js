import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { link } from "../utils/constants";
const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer-center">
        <div className="footer-content">
          <div className="footer-col">
            <Link to="/">
              <img className="logo-nav" src={logo} alt="Marvel logo" />
            </Link>
            <p>
              {" "}
              Copyright &copy; <span> 2027 </span> by Marvel, Inc. All rights
              reserved.
            </p>
          </div>
          <div className="footer-col">
            <Link className="footer-link" to="">
              About Marvel
            </Link>
            <Link className="footer-link" to="">
              Help/FAQ
            </Link>
            <Link className="footer-link" to="">
              Carrer
            </Link>
            <Link className="footer-link" to="">
              Disney+
            </Link>
          </div>
          <div className="footer-col">
            {link.map((link) => {
              return (
                <Link className="footer-link" key={link.id} to={link.url}>
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
const FooterContainer = styled.footer`
  height: 15rem;
  align-items: center;
  background: #0f0f0f;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 400;

  .footer-center {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .footer-col {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.2;
  }

  .logo-nav {
    height: 2rem;
  }

  .footer-link:link,
  .footer-link:visited {
    text-decoration: none;
    color: #ffffff;
    transition: all 0.3s;
  }

  .footer-link:hover,
  .footer-link:active {
    color: #c0c0c0;
  }
  @media (min-width: 765px) {
    font-size: 1.2rem;
  }
`;

export default Footer;
