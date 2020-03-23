import React from "react";
import { Link } from "react-router-dom";
const Movies = () => {
  return (
    <>
      <h1>Movies</h1>
      <ul>
        <li>
          <a href="https://www.imdb.com/title/tt0119190/" target="_blank">
            George of the Jungle
          </a>
        </li>
        <li>
          <a href="https://www.imdb.com/title/tt0099785/" target="_blank">
            Home Alone
          </a>
        </li>
        <li>
          <a
            href="https://www.imdb.com/title/tt0111070/?ref_=nv_sr_srsg_0"
            target="_blank"
          >
            The Santa Clause
          </a>
        </li>
        <li>
          <a
            href="https://www.imdb.com/title/tt0107290/?ref_=nv_sr_srsg_0"
            target="_blank"
          >
            Jurassic Park
          </a>
        </li>
        <li>
          <a
            href="https://www.imdb.com/title/tt0097576/?ref_=nv_sr_srsg_0"
            target="_blank"
          >
            Indiana Jones
          </a>
        </li>
        <li>
          <a
            href="https://www.imdb.com/title/tt0076759/?ref_=nv_sr_srsg_6"
            target="_blank"
          >
            Star Wars
          </a>
        </li>
        <li>
          <a
            href="https://www.imdb.com/title/tt0345950/?ref_=fn_al_tt_4"
            target="_blank"
          >
            The SpongeBob Movie
          </a>
        </li>
        <li>
          <a
            href="https://www.imdb.com/title/tt0178952/?ref_=nv_sr_srsg_10"
            target="_blank"
          >
            Toy Story
          </a>
        </li>
        <li>
          <a
            href="https://www.imdb.com/title/tt0117705/?ref_=nv_sr_srsg_0"
            target="_blank"
          >
            Space Jam
          </a>
        </li>
        <li>
          <a
            href="https://www.imdb.com/title/tt0119137/?ref_=nv_sr_srsg_0"
            target="_blank"
          >
            Flubber
          </a>
        </li>
      </ul>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default Movies;
