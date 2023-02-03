import { ShoppingBag, ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useSelector } from "react-redux"

export const Cart = () => {
  const cartItems = useSelector(state => state.cart)

  return (
    <Badge badgeContent={cartItems.length} color="error">
      <ShoppingCart color="inherit" />
    </Badge>
  )
}
