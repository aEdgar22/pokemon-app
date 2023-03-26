import { useState, useEffect } from "react";
import { getPokemons } from "../../../redux/thunks/pokemonThunk";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Box, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import PokeCard from "./PokeCard";
import { GridContainer } from "./styledComponents/GridContainerCards";
import { IPokemons } from "../../../models/pokemons.model";
import ButtonStyled from "./styledComponents/Button";
import LazyLoad from "react-lazyload";
import pikachuGif from "../../../assets/pikachu.gif";

const PokeCardsLayout = () => {
  const dispatch = useAppDispatch();
  const { pokemons, isLoading } = useAppSelector(
    (state): IPokemons => state.pokemons
  );

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

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
        height: "100%",
        marginTop: "2rem",
        padding: "1rem",
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
          }}
        >
         <img src={pikachuGif} alt="pikachu" />
        </Box>
      ) : (
        <Typography
          variant="h4"
          sx={{
            mr: 2,
            textAlign: "center",
            fontFamily: "poppins",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
            fontSize: "2rem",
            color: "#FFCB05",
            textShadow: "2px 2px #4682b4c9",
          }}
        >
          ¡POCKET MONSTERS!
        </Typography>
      )}
      {!loading && (
        <>
          <GridContainer>
            {pokemons.map((pokemon) => {
              return (
                <LazyLoad
                  key={pokemon.id}
                  height={200}
                  once
                  placeholder={<h1>Cargando...</h1>}
                >
                  <PokeCard pokemon={pokemon} />
                </LazyLoad>
              );
            })}
          </GridContainer>
          <Box
            margin={"2rem"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            columnGap={"2rem"}
          >
            <ButtonStyled
              disabled={loading || page === 0}
              onClick={() => handlePageChange(page - 1)}
            >
              Before
            </ButtonStyled>
            Page {page + 1}
            <ButtonStyled
              disabled={loading}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </ButtonStyled>
          </Box>
        </>
      )}
    </Container>
  );
};

export default PokeCardsLayout;
