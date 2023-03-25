import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { CartOutline } from "react-ionicons";

const Nav = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img className="logo-nav" src={logo} alt="Marvel logo" />
          </Link>

          <ul className="nav-links">
            <Link to="/chart">
              <CartOutline
                color={"#ffffff"}
                title={CartOutline}
                height="2.2rem"
                width="2.2rem"
              />
            </Link>
          </ul>
        </div>
      </div>
    </NavContainer>
  );
};
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f0f;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-links {
    display: flex;
  }
  .logo-nav {
    height: 2rem;
  }
`;
export default Nav;
