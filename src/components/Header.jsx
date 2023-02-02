import { Link, useLocation, useParams } from "react-router-dom"
import { Cart } from "./Cart/Cart"

export const Header = () => {
  const location = useLocation()
  const { pathname } = location
  const id = pathname.split("/").pop()

  return (
    <>
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
      <nav>
        <Link to={"/"}>Home</Link>
        {pathname !== "/" && (
          <>
            {" "}
            &gt; <span>Phone {id}</span>
          </>
        )}
      </nav>
    </>
  )
}
