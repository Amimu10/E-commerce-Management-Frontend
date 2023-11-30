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
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import { FaShoppingCart } from "react-icons/fa"; 
import logo from "../../assets/home/logo.png"; 
function Navbar() {
  const { user, logOut } = useAuth();
  const [cart] = useCart(); 
  console.log(cart);
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
      {
        user ? 
        <li>
        <NavLink to="/dashboard/cart"> 
          <button className=""> 
         <div className="flex gap-[1px] items-center"> 
         <FaShoppingCart /> 
            <span className="badge badge-secondary">+{cart.length}</span>
         </div>   
          </button>   
        </NavLink>
      </li>
      : 
      null
      }
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
        // right: 0,
        maxWidth: "1152px", 
        margin: "auto",
        zIndex: 1000,
        // backgroundColor: "rgba(0, 0, 0, 0.4)",
        backgroundColor: "white", 
        // opacity: 40,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img className="w-[120px] "  src={logo} alt="" />
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
       
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="pink"
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <ul className="flex gap-5 p-6 text-pink-700">{pages}</ul>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton className="bg-pink-700" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {
                  name && <p className="text-base font-inter text-semibold mr-6">{user?.displayName}</p>
                } 
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
              <ul className="p-5 font-cinzel text-semibold text-pink-600">{settings}</ul>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
