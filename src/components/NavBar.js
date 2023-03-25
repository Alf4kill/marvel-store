import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Cart } from "styled-icons/boxicons-solid";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img className="logo-nav" src={logo} alt="Marvel logo" />
          </Link>

          <Link to="/cart">
            <Cart className="cart" />
          </Link>
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
  .cart {
    height: 2rem;
    color: white;
  }
`;

export default Nav;
