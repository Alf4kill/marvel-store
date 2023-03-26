import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Comic from "./Comic";
const List = () => {
  const [url, setUrl] = useState(
    "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b8a2229872d303038a60b421120a4cae&hash=63d13766d123315cc328f72c3e806949"
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
