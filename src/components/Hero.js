import React from "react";
import styled from "styled-components";
import hero_backgroud from "../assets/hero_background.png";
import hero_text from "../assets/hero_text.png";
const Hero = () => {
  return (
    <HeroContainer>
      <div className="nav-center">
        <img src={hero_text} />
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
  img {
    height: 10rem;
  }
  @media (min-width: 425px) {
    img {
      height: 15rem;
    }
  }
  @media (min-width: 768px) {
    height: 20rem;
    img {
      height: 20rem;
    }
  }
`;
export default Hero;
