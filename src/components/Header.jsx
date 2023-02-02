import { Link } from "react-router-dom"
import { Cart } from "./Cart/Cart"

export const Header = () => {
  return (
    <header>
      <Link
        style={{
          color: "blue",
          textDecoration: "none",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
        to={"/"}
      >
        Phone market
      </Link>
      <Cart />
    </header>
  )
}
