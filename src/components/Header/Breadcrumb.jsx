import { Breadcrumbs, Container, Typography } from "@mui/material"
import { Link, useLocation } from "react-router-dom"

export const Breadcrumb = () => {
  const location = useLocation()
  const { pathname } = location
  const id = pathname.split("/").pop()

  return (
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
  )
}
