import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { setPokemons, startLoadingPokemons } from "../slices/pokemonSlice";
import { pokemonApi } from "../../API/pokemonApi";

interface IPokemon {
  id: number;
  name: string;
  weight: number;
  sprites: {
    front_default: string;
  };
  moves: {
    move: {
      name: string;
    };
  }[];
}

export const getPokemons = (
  page: number = 0
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(startLoadingPokemons());

      const pokemons: IPokemon[] = [];

      const { data } = await pokemonApi.get(
        `/pokemon?limit=10&offset=${page * 10}`
      );

      for (const pokemon of data.results) {
        const { data: pokemonDetails } = await pokemonApi.get<IPokemon>(
          pokemon.url
        );
        const { id, name, weight, sprites, moves } = pokemonDetails;
        pokemons.push({ id, name, weight, sprites, moves });
      }

      dispatch(setPokemons({ pokemons, page: page + 1 }));
    } catch (error) {
      console.error(error);
    }
  };
};
