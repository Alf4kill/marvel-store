import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { faker } from "@faker-js/faker";

const ComicInfo = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(
        `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=b8a2229872d303038a60b421120a4cae&hash=63d13766d123315cc328f72c3e806949`
      );
      setItem(res.data.data.results[0]);
    };
    fetch();
  }, [setItem]);

  return (
    <ComicInfoContainer>
      <div className="title-section">
        <h1 className="list-title">Comic information</h1>
      </div>

      <div className="comic-info">
        {!item ? (
          "loading"
        ) : (
          <div>
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt="comic img"
            />
            <h3 className="comic-name">{`${item.title}`}</h3>
          </div>
        )}
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo autem
          laboriosam natus unde aliquam atque quisquam maiores tenetur quos, ex
          mollitia eum, quaerat repellat accusantium dolor voluptatem officia.
          Maiores, fugiat.
        </h3>
        <div className="comic-price">
          <h3 className="comic-price">
            Just for! {faker.commerce.price(10, 200, 0, "$")}
          </h3>
          <Link to="/cart">
            <button className="cart-button">ADD TO CART</button>
          </Link>
        </div>
      </div>
    </ComicInfoContainer>
  );
};

const ComicInfoContainer = styled.section`
  font-size: 1rem;
  font-weight: 400;
  padding-bottom: 25px;

  h3 {
    font-size: 0.9rem;
  }
  .title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90vw;
    margin: 0 auto;
  }
  .comic-info {
    text-align: center;
    width: 90vw;
    margin: 0 auto;
  }
  img {
    width: 15rem;
  }
  @media (min-width: 768px) {
    font-size: 120%;

    img {
      width: 20rem;
    }
  }
`;

export default ComicInfo;
