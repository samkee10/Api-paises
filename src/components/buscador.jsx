import React, { useState, useEffect } from 'react';

function Buscador({ paises, setFilteredPaises }) {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
  
    const filteredPaises = paises.filter((pais) =>
      pais.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredPaises(filteredPaises);
  }, [searchTerm, paises, setFilteredPaises]);

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar por nombre de país"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Buscador;