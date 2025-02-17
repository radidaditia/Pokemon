import pokemonJSON from "../../Data/pokemon.json";
import { useState } from "react";
import "./PokemonList.css";
import PokemonItem from "../PokemonItem/PokemonItem";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);
  const handleSearch = (e) => {
    let search = pokemons.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value);
    });
    setFilterPokemons(search);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="cari pokemon..."
        className="search"
        onChange={handleSearch}
      />

      <div className="list-pokemon">
        {filterPokemons.length == 0 ? (
          <div>PEKEMON TIDAK DITEMUKAN,HARAP MENGGUNAKAN HURUF KECIL</div>
        ) : (
          filterPokemons.map((item) => (
            <PokemonItem key={item.id} pokemon={item} />
          ))
        )}
      </div>
    </div>
  );
}

export default PokemonList;
