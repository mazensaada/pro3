import React from "react";

const MovieList = ({ List, text }) => {
  console.log(List);
  return (
    <div className="main-container">
      {List?.filter((el) =>
        el.name.toLowerCase().includes(text.toLowerCase())
      ).map((el, i) => (
        <div>
          <div key={i} className="movie-card">
            <div className="movie-poster">
              <img src={el.posterurl} alt="poster" />
            </div>
            <div className="movie-details">
              <h1>{el.name}</h1>
              <p>{el.description}</p>
            </div>
            <div className="movie-rating">
              <p> Rating: {el.rating}/10</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
