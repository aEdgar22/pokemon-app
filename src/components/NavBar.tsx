import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CatchingPokemonRoundedIcon from "@mui/icons-material/CatchingPokemonRounded";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../redux/slices/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { resetPokemon } from "../redux/slices/pokemonSlice";
import avatar from "../assets/avatar.jpg"


const settings = ["Home","Account", "Logout"];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(resetUser());
    dispatch(resetPokemon());

    navigate("/");
  };

  const handleNavMenu = (e: React.MouseEvent<HTMLSpanElement>) => {
    const currentText = e.currentTarget.innerText;
    if (currentText === "Account") {
      navigate("/user")
    } else if (currentText === "Logout") {
      handleLogout();
    }else if (currentText === "Home"){
      navigate("/dashboard")
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#ef5350",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-evenly" }}>
          <CatchingPokemonRoundedIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "poppins",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            POKEMONOMA
          </Typography>

          {/* responsive navbar */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "poppins",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            POKEMONOMA
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <span onClick={(e) => handleNavMenu(e)}>{setting}</span>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
