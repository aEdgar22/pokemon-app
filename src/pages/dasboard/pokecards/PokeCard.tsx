import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import ModalPokemon from "../modal/ModalPokemon";

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

interface IPokemonDetails {
  name: string;
  weight: number;
  moves: IPokemonMoves[];
}

const initialPokemonDetails: IPokemonDetails = {
  name: "",
  weight: 0,
  moves: [],
};

const PokeCard = ({ pokemon }: { pokemon: IPokemon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState<IPokemonDetails>(
    initialPokemonDetails
  );

  const openModal = () => {
    setIsOpen(true);
    setPokemonDetails({
      name,
      weight,
      moves,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setPokemonDetails(initialPokemonDetails);
  };
  const { name, weight, sprites, moves } = pokemon;
  const img = sprites.front_default;
  return (
    <>
      <div onClick={openModal}>
        <Box
          sx={{
            boxShadow: "0px 4px 5px 2px #80808082",
            borderRadius: "10px",
            height: "auto",
            width: "100%",
            cursor: "pointer",
            position: "relative",
          }}
          data-cy="poke-card"
        >
          <Box
            sx={{
              backgroundImage: `url(${img})`,
              backgroundPosition: "center",
              height: "15rem",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              display: "flex",
              backgroundColor: "#80808038",
              borderRadius: "10px 10px  0 0 ",
              paddingBottom: "0.5rem",
            }}
            data-cy="poke-card"
          >
            <Typography
              sx={{
                position: "absolute",
                top: "55%",
                right: "8px",
                color: "#FFF",
                backgroundColor: "#4682b4c9",
                width: "6.5rem",
                height: "2rem",
                textAlign: "center",
                borderRadius: "5px",
                paddingTop: "4px",
                fontFamily: "Poppins",
              }}
              data-cy="poke-card"
            >
              Weight: {weight}
            </Typography>
          </Box>

          <Box p={2} data-cy="poke-card">
            <Typography
              variant="h5"
              sx={{ fontWeight: "500", fontFamily: "Poppins" }}
              data-cy="poke-card"
            >
              {name.toUpperCase()}
            </Typography>

            <span  data-cy="moves" >MOVES:</span>
            <Stack direction="row" spacing={2}  data-cy="poke-card">
              {moves.slice(0, 2).map((move, index) => (
                <Typography
                  key={index}
                  variant="subtitle2"
                  sx={{ fontFamily: "Poppins" }}
                  data-cy="poke-card"
                >
                  # {move.move.name}{" "}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>
      </div>

      <ModalPokemon
        img={img}
        name={name}
        moves={moves}
        weight={weight}
        isOpen={isOpen}
        closeModal={closeModal}
      />
    </>
  );
};

export default PokeCard;
