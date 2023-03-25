interface IPokemonSprites {
    front_default: string;
  }

  interface IPokemonMoves {
    move: {
      name: string;
    };
  }
  interface IPokemon {
    id: number;
    name: string;
    weight: number;
    url: string;
    sprites: IPokemonSprites;
    moves: IPokemonMoves[];
  }

export interface IPokemons{
    page: number,
    pokemons: IPokemon[],
    isLoading: boolean
}