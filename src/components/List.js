import React from "react";
import styled from "styled-components";
import hero_text from "../assets/hero_text.png";

const List = () => {
  return (
    <ListContainer>
      <div className="list-center">
        <div className="title-section">
          <h1 className="list-title">
            The best comic for your favorites superheroes
          </h1>
        </div>
        <div className="comic-list">
          <div className="comic">
            <img src={hero_text} />
            <h3 className="comic-name">Hero</h3>
            <h3 className="comic-price">$34</h3>
          </div>
        </div>
      </div>
    </ListContainer>
  );
};

const ListContainer = styled.section`
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 25px;

  .list-center {
    width: 90vw;
    margin: 0 auto;
  }
  .title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin: 0 auto;
  }

  .comic-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.5rem;
  }

  .comic {
    box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
    border-radius: 12px;
    transition: all 0.4s;
  }
  img {
    width: 100%;
  }
`;
export default List;
