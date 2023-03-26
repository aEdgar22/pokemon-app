import { Box, Modal, Stack, Typography } from "@mui/material";

interface IPokemonMoves {
  move: {
    name: string;
  };
}

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  img: string;
  weight: number;
  name: string;
  moves: IPokemonMoves[];
}

const ModalPokemon = ({
  img,
  closeModal,
  isOpen,
  weight,
  name,
  moves,
}: Props) => {
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "80%", sm: "80%", md: "60%", lg: "50%", xl: "20%" },
          bgcolor: "background.paper",
          borderRadius: "10px",
          boxShadow: "0px 4px 5px 2px #80808082",
          p: 2,
        }}
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
        >
          <Typography
            sx={{
              position: "absolute",
              bottom: "32%",
              right: "30px",
              color: "#FFF",
              backgroundColor: "#4682b4c9",
              width: "6.5rem",
              height: "2rem",
              textAlign: "center",
              borderRadius: "5px",
              paddingTop: "4px",
              fontFamily: "Poppins",
            }}
          >
            Weight: {weight}
          </Typography>
        </Box>
        <Box p={2}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "500", fontFamily: "Poppins" }}
          >
            {name.toUpperCase()}
          </Typography>
          <Stack direction="row" spacing={2}>
            {moves.slice(0, 2).map((move, index) => (
             <Typography variant="subtitle1"  sx={{ fontFamily: "Poppins" }} key={index}>
                # {move.move.name}{" "}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalPokemon;
