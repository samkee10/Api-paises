import React, { useState, useEffect } from 'react';
import Buscador from './buscador';
import Ordenar from './ordenar';

function MiApi() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
        setIsLoading(false);
      });
  }, []);

  const handleOrdenarPaises = (paisesOrdenados) => {
    setFilteredData(paisesOrdenados);
  };

  return (
    <div>
      <Buscador paises={countries} setFilteredPaises={setFilteredData} />
      <Ordenar paises={filteredData} setOrderedPaises={handleOrdenarPaises} />
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div className="container">
          {filteredData.map((country) => (
            <div className="country-card" key={country.cca3}>
              <img src={country.flags.png} alt={`${country.name.common} Flag`} />
              <strong>Nombre:</strong> {country.name.common}<br />
              <strong>Capital:</strong> {country.capital}<br />
              <strong>Población:</strong> {country.population}<br />
              <strong>Región:</strong> {country.region}<br />
              <strong>Subregión:</strong> {country.subregion}<br />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MiApi;