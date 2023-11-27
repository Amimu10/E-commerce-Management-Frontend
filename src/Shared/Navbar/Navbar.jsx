import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


function Navbar() {
  const { user, logOut } = useAuth();
  // console.log(cart);
  const name = user?.displayName;
  const photo = user?.photoURL;

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const pages = (
    <>
      <li>
        <NavLink className="" to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/createShop">
          CREATE SHOP
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/watchDemo">
          WATCH DEMO
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/products">
          PRODUCTS
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/selling">
          SELLING
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/services">
          SERVICES
        </NavLink>
      </li>
    </>
  );

  const settings = (
    <>
      <li>
        <NavLink className="" to="/products">
          {name ? (
           <p>{name}</p> 
          ) : (
            <p>Profile</p>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink className="" to="/dashboard">
          Dashboard
        </NavLink>
      </li>
      {user ? (
        <li>
          <NavLink>
            <button className="" onClick={handleLogOut}>
              LOGOUT
            </button>
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink className="" to="/login">
            LOGIN
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <AppBar
      sx={{
        position: "fixed",
        left: 0,
        maxWidth: "1153px",
        margin: "auto",
        zIndex: 1000,
        backgroundColor: "black",
        opacity: 40,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <ul className="flex-col gap-5 p-5">{pages}</ul>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <ul className="flex gap-5 p-6">{pages}</ul>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {photo ? (
                  <Avatar src={photo} sx={{ width: 32, height: 32 }} />
                ) : (
                  <Avatar sx={{ width: 32, height: 32 }} />
                )}
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
              <ul className="p-5">{settings}</ul>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
