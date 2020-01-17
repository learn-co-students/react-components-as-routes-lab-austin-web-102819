import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => (
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

export default Directors;
