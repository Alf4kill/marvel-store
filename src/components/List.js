import React, { useState, useEffect } from "react";
import styled from "styled-components";
import hero_text from "../assets/hero_text.png";
import axios from "axios";
import Comic from "./Comic";
const List = () => {
  const [url, setUrl] = useState(
    "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=929b0b518c9fea232b7c1fe217e2b5a6&hash=36b04c609b16c3e1caf0d5556d1c762e"
  );
  const [item, setItem] = useState();
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    };
    fetch();
  }, [url]);

  return (
    <ListContainer>
      <div className="list-center">
        <div className="title-section">
          <h1 className="list-title">
            The best comic from your favorites superheroes !
          </h1>
        </div>
        <div className="comic-list">
          {!item ? <p>Loading !</p> : <Comic data={item} />}
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
    grid-gap: 1rem;
  }
  @media (min-width: 765px) {
    font-size: 120%;

    .comic-list {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (min-width: 1500px) {
  
      .comic-list {
        grid-template-columns: repeat(5, 1fr);
      }
  }
`;
export default List;
