import { AddBox, AddShoppingCart } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { PhoneInformation } from "../../components/PhoneDetails/PhoneInformation"
import { useSinglePhone } from "../../hooks/useSinglePhone"

export const PhoneDetails = () => {
  const { id } = useParams()
  const { phone, loading } = useSinglePhone(id)
  const [color, setColor] = useState()
  const [storage, setStorage] = useState()
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const item = {
      id: id,
    }

    item.storageCode =
      phone.storage?.length === 1 ? phone.storage[0].value : storage

    item.colorCode = phone.color?.length === 1 ? phone.color[0].value : color

    dispatch({ type: "@cart/add", payload: item })
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

        <Box
          marginTop="1rem"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <select onChange={({ target }) => setStorage(target.value)}>
            {phone && phone.storage?.length > 1 && (
              <option selected disabled>
                Select storage
              </option>
            )}
            {phone &&
              phone.storage?.map(storage => (
                <option key={storage.value} value={storage.value}>
                  {storage.text}
                </option>
              ))}
          </select>

          <select onChange={({ target }) => setColor(target.value)}>
            {phone && phone.color?.length > 1 && (
              <option selected disabled>
                Select color
              </option>
            )}
            {phone &&
              phone.color?.map(color => (
                <option key={color.value} value={color.value}>
                  {color.text}
                </option>
              ))}
          </select>
        </Box>

        <Button
          style={{ marginTop: "10px" }}
          variant="contained"
          onClick={handleAddToCart}
        >
          <AddShoppingCart />
        </Button>
      </div>
    </Box>
  )
}
