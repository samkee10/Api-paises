import React, { useState } from 'react';

function Ordenar({ paises, setOrderedPaises }) {
  const [orden] = useState('asc'); 

  const ordenarPaises = (campo) => {
    const paisesOrdenados = [...paises]; 

    if (campo === 'nombre') {
      paisesOrdenados.sort((a, b) => {
        if (orden === 'asc') {
          return a.name.common.localeCompare(b.name.common);
        } else {
          return b.name.common.localeCompare(a.name.common);
        }
      });
    } else if (campo === 'poblacion') {
      paisesOrdenados.sort((a, b) => {
        if (orden === 'asc') {
          return a.population - b.population;
        } else {
          return b.population - a.population;
        }
      });
    }

    setOrderedPaises(paisesOrdenados);
  };

  return (
    <div className="ordenar">
      <button onClick={() => ordenarPaises('nombre')}>Ordenar por nombre</button>
      <button onClick={() => ordenarPaises('poblacion')}>Ordenar por población</button>
    </div>
  );
}

export default Ordenar;