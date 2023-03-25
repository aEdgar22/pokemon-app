import { createSlice } from "@reduxjs/toolkit";
import { IPokemons } from "../../models/pokemons.model";

export const emptyPokemonData: IPokemons = {
  page: 0,
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: emptyPokemonData,
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons
    },
    resetPokemon: () => {
      return emptyPokemonData
    }
  },
});

export const { startLoadingPokemons, setPokemons, resetPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
