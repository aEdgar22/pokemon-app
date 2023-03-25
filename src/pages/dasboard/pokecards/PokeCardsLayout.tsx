import { useEffect } from "react";
import { getPokemons } from "../../../redux/thunks/pokemonThunk";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import PokeCard from "./PokeCard";
import { GridContainer } from "./styledComponents/GridContainerCards";
import { IPokemons } from "../../../models/pokemons.model";
type Props = {};

const PokeCardsLayout = (props: Props) => {
  const dispatch = useAppDispatch();
  const { pokemons } = useAppSelector((state): IPokemons => state.pokemons);
  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        border: "1px solid red",
        height: "80vh",
        marginTop: "2rem",
        padding: "1rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mr: 2,
          textAlign: "center",
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        POCKET MONSTERS
      </Typography>

      <GridContainer>
        {pokemons.map((pokemon) => {
          return (
            <PokeCard key={pokemon.id} pokemon={pokemon}  />
          );
        })}
      </GridContainer>

      {/*  {
              pokemons.map((pokemon, index) => {
                return <PokeCard key={index} pokemon={pokemon} />
              })
            } */}
    </Container>
  );
};

export default PokeCardsLayout;
