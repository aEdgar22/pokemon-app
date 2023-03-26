import { useState, useEffect } from "react";
import { getPokemons } from "../../../redux/thunks/pokemonThunk";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import PokeCard from "./PokeCard";
import { GridContainer } from "./styledComponents/GridContainerCards";
import { IPokemons } from "../../../models/pokemons.model";

const PokeCardsLayout = () => {
  const dispatch = useAppDispatch();
  const { pokemons, isLoading } = useAppSelector(
    (state): IPokemons => state.pokemons
  );

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(getPokemons(page));
  }, [dispatch, page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "90vh",
        marginTop: "2rem",
        padding: "1rem",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mr: 2,
          textAlign: "center",
          fontFamily: "poppins",
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
          return <PokeCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </GridContainer>

      <Button
        variant="outlined"
        color="primary"
        sx={{ margin: "4rem" }}
        disabled={isLoading || page === 0}
        onClick={() => handlePageChange(page - 1)}
      >
       -1
      </Button>
        Page {page + 1}
      <Button
        variant="outlined"
        color="primary"
        sx={{ margin: "4rem" }}
        disabled={isLoading}
        onClick={() => handlePageChange(page + 1)}
      >
        +1
      </Button>
    </Container>
  );
};

export default PokeCardsLayout;
