import React from "react";
import styled from "styled-components";
import hero_backgroud from "../assets/hero_background.png";
const Hero = () => {
  return (
    <HeroContainer>
      <div className="nav-center">
        <h1>
          <span>Welcomes Heroes to the Marvel Store!</span>
        </h1>
      </div>
    </HeroContainer>
  );
};
const HeroContainer = styled.section`
  display: flex;
  height: 15rem;
  align-items: center;
  justify-content: center;
  background-image: url(${hero_backgroud});

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin: 0 auto;
  }
  h1 {
    font-size: 0.9rem;
  }
  h1 span {
    background-color: #f0f0f0;
  }

  @media (min-width: 425px) {
    h1 {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
export default Hero;
