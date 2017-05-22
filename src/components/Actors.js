import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let allActors = actors.map((actor, index) => (
      <div className="actor" key={index}>
          <h3>Name: {actor.name}</h3>
          <p>Movies:</p>
          <ul>
              {actor.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
              ))}
          </ul>
      </div>
  ))
  return (
    <div>
      <h1>Actors Page</h1>
      {allActors}
    </div>
  );
};

export default Actors;
