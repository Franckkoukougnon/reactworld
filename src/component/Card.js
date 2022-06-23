import React from "react";

const Card = ({ country }) => {
  return (
    <li className="card">
      <img
        src={country.flags.svg}
        alt={"drapeau " + country.translations.fra.common}
      />
      <div className="infos">
        <h2>{country.translations.fra.common}</h2>
        <h4> Capital : {country.capital}</h4>
        <p>Pop : {country.population.toLocaleString()}</p>
        <p>Lieu : {country.continents}</p>
      </div>
    </li>
  );
};

export default Card;
