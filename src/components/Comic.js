import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { useNavigate } from "react-router-dom";

const Comic = ({ data }) => {
  let navigate = useNavigate();
  return data
    ? data.map((item) => {
        return (
          <ComicContainer key={item.id} onClick={() => navigate(`/${item.id}`)}>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
            <div className="comic-info">
              <h3 className="comic-name">{`${item.title}`}</h3>
              <h3 className="comic-price">
                {faker.finance.amount(10, 100, 2, "$")}
              </h3>
            </div>
          </ComicContainer>
        );
      })
    : "";
};

const ComicContainer = styled.div`
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 12px;
  transition: all 0.4s;
  img {
    width: 100%;
    height: 10rem;
  }
  .comic-info {
    padding: 1rem;
  }
  @media (min-width: 765px) {
    font-size: 80%;

    img {
      height: 15rem;
    }
  }
  @media (min-width: 1024px) {
    img {
      height: 20rem;
    }
  }
  @media (min-width: 1500px) {
    
  }
  }
`;

export default Comic;
