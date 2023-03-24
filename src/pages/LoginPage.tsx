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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useEffect, useState } from "react";
import userData from "../user.data.json";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/slices/userSlice";

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
  const dispatch = useAppDispatch()

  const formSubmitHandler: SubmitHandler<IFromInputs> = ({
    email,
    password,
  }: IFromInputs) => {
    const user = userData.users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      const token = user.token;
      localStorage.setItem("token", token);
      dispatch(setUser({
        id: user.id,
        email: user.email,
        name: user.name
      }))
      navigate("/dashboard");
    } else {
      alert("Email o contraseña incorrectos");
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
    <Container
      sx={{
        my: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Login</h1>
      <Stack width="40%" direction={"column"} spacing={2}>
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
          <Button type="submit" variant="outlined">
            Submit
          </Button>
        </form>
      </Stack>
    </Container>
  );
};

export default LoginPage;
