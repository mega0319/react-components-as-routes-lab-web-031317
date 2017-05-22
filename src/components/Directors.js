import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let allDirectors = directors.map((director, index) => (
      <div key={index}>
          <h3>Name: {director.name}</h3>
          <p>Movies:</p>
          <ul>
              {director.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
              ))}
          </ul>
      </div>
  ))
  return (
    <div>
      <h1>Directors Page</h1>
      {allDirectors}
    </div>
  );
};

export default Directors
