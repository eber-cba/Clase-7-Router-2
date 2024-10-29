import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function Personaje() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        setCharacter(response.data);
        setError(null); // Resetea el error si se obtiene el personaje
      })
      .catch(() => {
        setCharacter(null);
        setError("No se encontró ningún personaje con este ID");
      });
  }, [id]);

  return (
    <div className="d-flex justify-content-center mt-5">
      {character ? (
        <div style={{ width: "18rem" }}>
          <img src={character.image} alt={`Imagen de ${character.name}`} />
          <div>
            <h1>{character.name}</h1>
            <h2>
              <strong>Estado:</strong> {character.status} <br />
              <strong>Especie:</strong> {character.species} <br />
              <strong>Género:</strong> {character.gender}
            </h2>
          </div>
        </div>
      ) : (
        <p>{error || "Cargando personaje..."}</p>
      )}
    </div>
  );
}
