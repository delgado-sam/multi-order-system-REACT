import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#333", padding: "10px 0" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <RestaurantMenuIcon
              sx={{ fontSize: 40, color: "#fff", cursor: "pointer" }}
            />
          </Link>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button
            color="inherit"
            component={Link}
            to="/orders"
            sx={{ color: "#fff", fontSize: "18px" }}
          >
            Orders
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/account"
            sx={{ color: "#fff", fontSize: "18px" }}
          >
            Account
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
