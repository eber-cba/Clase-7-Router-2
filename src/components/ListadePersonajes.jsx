import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ListaPersonajes() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        setCharacters(response.data.results);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/personajes/${id}`);
  };

  return (
    <div className="mt-5">
      <div>
        {characters.map((character) => (
          <div key={character.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <div
              onClick={() => handleCardClick(character.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                variant="top"
                src={character.image}
                alt={`Imagen de ${character.name}`}
              />
              <div>
                <h1>{character.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
