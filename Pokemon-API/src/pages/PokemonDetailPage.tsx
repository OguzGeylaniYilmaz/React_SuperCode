import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Pokemon } from "../types/Pokemon";
import Navbar from "../components/Navbar";

const PokemonDetailPage: React.FC = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [evolutionName, setEvolutionName] = useState<string>("");
  const [evolutionImage, setEvolutionImage] = useState<string>("");

  useEffect(() => {
    async function fetchPokemon() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setPokemon(response.data);

      // Fetch species data
      const speciesRes = await axios.get(response.data.species.url);
      const evolutionUrl = speciesRes.data.evolution_chain.url;

      // Fetch evolution chain
      const evolutionRes = await axios.get(evolutionUrl);
      const chain = evolutionRes.data.chain;

      let evoName = "";
      if (
        chain.species.name === response.data.name &&
        chain.evolves_to.length > 0
      ) {
        evoName = chain.evolves_to[0].species.name;
      } else if (
        chain.evolves_to[0]?.species.name === response.data.name &&
        chain.evolves_to[0].evolves_to.length > 0
      ) {
        evoName = chain.evolves_to[0].evolves_to[0].species.name;
      }

      if (evoName) {
        setEvolutionName(evoName);
        const evoData = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${evoName}`
        );
        setEvolutionImage(evoData.data.sprites.front_default);
      }
    }
    fetchPokemon();
  }, [id]);

  if (!pokemon) return <p className="p-4">Loading...</p>;

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="mx-auto"
        />
        <h1 className="text-3xl text-center capitalize mt-4 font-bold">
          {pokemon.name}
        </h1>
        <div className="flex justify-center gap-2 mt-2">
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="bg-gray-300 px-2 py-1 rounded-full text-sm capitalize"
            >
              {t.type.name}
            </span>
          ))}
        </div>

        {evolutionName && (
          <div className="mt-8 text-center">
            <h2 className="text-xl font-semibold mb-2">Evolution</h2>
            <img src={evolutionImage} alt={evolutionName} className="mx-auto" />
            <p className="capitalize mt-2">{evolutionName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonDetailPage;
