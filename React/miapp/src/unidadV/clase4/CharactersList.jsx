import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CharactersList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let url ='https://rickandmortyapi.com/api/character'
      const response = await axios.get(url);
      setCharacters(response.data.results);
      console.log(response.data.results);
    }
    fetchData();
  }, []);

  return (
    <ul>
      {characters.map(character => (
        <li key={character.id}>{character.name}</li>
      ))}
    </ul>
  );
}

export default CharactersList;
