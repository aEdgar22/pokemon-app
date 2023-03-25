
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
  
  const PokeCard = ({ pokemon }: { pokemon: IPokemon }) => {
    const { id, name, weight, sprites, moves } = pokemon;
    const img = sprites.front_default;
    return (
      <div>
        <h4>{name}</h4>
        <span>{weight}</span>
        <img src={img} alt="pokemon img" width="50%" />
        <ul>
          {moves.slice(0, 2).map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PokeCard;