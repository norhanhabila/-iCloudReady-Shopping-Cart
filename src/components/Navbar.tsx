import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Cart from "./Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar>
      <Toolbar>
        <Container>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" flexDirection={"column"}>
              <Typography>Welcome to iCloudReady!</Typography>
              <Typography>You have started your 30 day trial</Typography>
            </Box>
            <Box display="flex" flexDirection={"column"}>
              <Typography>Our architects are here to help</Typography>
              <Typography>Book a free session</Typography>
            </Box>
            <Box display="flex">
              <Button onClick={() => setOpen(true)}>
                <ShoppingCartOutlined />
              </Button>
              <Cart open={open} setOpen={setOpen} />
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
