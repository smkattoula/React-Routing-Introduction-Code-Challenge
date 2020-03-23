import React from "react";
import { Link } from "react-router-dom";

const TVshows = () => {
  return (
    <>
      <h1>Tvshows</h1>
      <ul>
        <li>
          <a href="https://www.imdb.com/title/tt0206512/" target="_blank">
            Spongebob
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0115157/" target="_blank">
            Dexter's Laboratory
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0244926/" target="_blank">
            Rocket Power
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0320808/" target="_blank">
            The Adventures of Jimmy Neutron: Boy Genius
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0101188/" target="_blank">
            Rugrats
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0115200/" target="_blank">
            Hey Arnold!
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0214341/" target="_blank">
            Dragon Ball Z
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0363328/" target="_blank">
            Drake & Josh
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0154061/" target="_blank">
            CatDog
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0220880/" target="_blank">
            Courage the Cowardly Dog
          </a>
        </li>
      </ul>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default TVshows;
