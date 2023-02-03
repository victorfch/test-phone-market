import { AppBar, Box, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { Cart } from "./Cart"

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          padding="1rem 2rem"
        >
          <Button color="inherit" component={Link} to={"/"}>
            Phone market
          </Button>
          <Button color="inherit" component="div">
            <Cart />
          </Button>
        </Box>
      </AppBar>
    </Box>
  )
}
