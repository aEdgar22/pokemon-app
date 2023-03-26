import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Container,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, Widgets } from "@mui/icons-material";
import { useEffect, useState } from "react";
import userData from "../../user.data.json";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import pikachuGif from "../../assets/pikachu.gif";
import { StyledLoginCard } from "./styledComponent/LoginStyled";
import { ButtonLogin } from "./styledComponent/ButtonLogin";
import { ImageStyled } from "../dasboard/pokecards/styledComponents/ImageStyled";
interface IFromInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
});

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFromInputs>({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formSubmitHandler: SubmitHandler<IFromInputs> = ({
    email,
    password,
  }: IFromInputs) => {
    const user = userData.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      const token = user.token;
      Swal.fire("Success", "Welcome back!", "success");
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");
    } else {
      Swal.fire("Error", "Invalid email or password", "error");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard"); // Redirigir al dashboard si ya hay un token guardado
    }
  }, [navigate]);
  return (
    <Box
      display={"flex"}
      columnGap={"2rem"}
      width={"100%"}
      justifyContent={"space-evenly"}
      alignItems={"center"}
      mt={"8rem"}
      sx={{
        
        marginTop: {sm:"0"}
      }}
    >
      <ImageStyled src={pikachuGif} alt="GIF animado" />

      <StyledLoginCard>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: "#232323c4",
            fontFamily:"poppins"
          }}
        >
          Welcome back!
        </Typography>
        <Stack width="80%" direction={"column"} spacing={2}>
          <form onSubmit={handleSubmit(formSubmitHandler)}>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="email"
                  label="Email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email ? errors.email?.message : ""}
                  fullWidth
                  margin="normal"
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type={showPassword ? "text" : "password"}
                  label="Password"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password ? errors.password?.message : ""}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword}>
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
            <ButtonLogin type="submit" variant="outlined">
              SUBMIT
            </ButtonLogin>
          </form>
        </Stack>
      </StyledLoginCard>
    </Box>
  );
};

export default LoginPage;
