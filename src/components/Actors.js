import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(d => (
        <div>
          <p>{d.name}</p>
          <p>
            <ul>
              {d.movies.map(m => (
                <li>{m}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Actors;
