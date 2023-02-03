import { Box } from "@mui/material"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { PhoneActions } from "../../components/PhoneDetails/PhoneActions"
import { PhoneInformation } from "../../components/PhoneDetails/PhoneInformation"
import { useSinglePhone } from "../../hooks/useSinglePhone"

export const PhoneDetails = () => {
  const { id } = useParams()
  const { phone, loading } = useSinglePhone(id)
  const dispatch = useDispatch()

  const handleAddToCart = cartItem => {
    dispatch({ type: "@cart/add", payload: cartItem })
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Box display="flex" justifyContent="space-around" marginTop="2rem">
      <div width="100%">
        <img src={phone.img} alt={`${phone.brand} ${phone.model}`} />
      </div>
      <div>
        <PhoneInformation phone={phone} />
        <PhoneActions addToCart={handleAddToCart} phone={phone} />
      </div>
    </Box>
  )
}
