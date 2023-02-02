import { useSelector } from "react-redux"
import styles from "./cart.module.css"

export const Cart = () => {
  const cartItems = useSelector(state => state.cart)

  return (
    <div className={styles.cart}>
      <div className={styles.cart_len}>{cartItems.length}</div>
      <div className="cart_title">Cart</div>
    </div>
  )
}
