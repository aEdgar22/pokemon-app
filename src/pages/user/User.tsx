import NavBar from "../../components/NavBar";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { useAppSelector } from "../../redux/hooks";
import imgAvatar from "../../assets/avatar.jpg";

const User = () => {
  const { email, name } = useAppSelector((state) => state.user);
  return (
    <>
      <NavBar />
      <Container
        sx={{
          marginTop: "4rem",
          display: "flex",
          columnGap: "4rem",
          flexDirection: { sm: "column", lg: "row" },
          alignItems: { sm: "center", lg: "center" },
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={imgAvatar}
          sx={{ width: "30%", height: "30%" }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
          <Typography variant="h3" sx={{ fontFamily: "poppins" }}>
            PROFILE:
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: "poppins" }}>
            - Name: {name}
          </Typography>
          <Typography variant="h4" sx={{ fontFamily: "poppins" }}>
            - Email: {email}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default User;
