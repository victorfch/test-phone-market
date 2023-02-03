import {
  AppBar,
  Box,
  Breadcrumbs,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import { Link, useLocation, useParams } from "react-router-dom"
import { Cart } from "./Cart/Cart"

export const Header = () => {
  const location = useLocation()
  const { pathname } = location
  const id = pathname.split("/").pop()

  return (
    <>
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

      <Container>
        <nav>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" to={"/"}>
              Home
            </Link>

            {pathname !== "/" && (
              <Typography color="text.primary">Phone {id}</Typography>
            )}
          </Breadcrumbs>
        </nav>
      </Container>
    </>
  )
}
