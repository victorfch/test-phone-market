import { AddShoppingCart } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import { useState } from "react"
import { SelectPreferences } from "./SelectPreferences"

export const PhoneActions = ({ addToCart, phone }) => {
  const [color, setColor] = useState()
  const [storage, setStorage] = useState()

  const handleAddToCart = () => {
    const item = {
      id: phone.id,
    }

    item.storageCode =
      phone.storage?.length === 1 ? phone.storage[0].value : storage
    item.colorCode = phone.color?.length === 1 ? phone.color[0].value : color
    addToCart(item)
  }

  return (
    <>
      <Box
        marginTop="1rem"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <SelectPreferences
          updateValue={setStorage}
          phone={phone}
          field="storage"
        />

        <SelectPreferences updateValue={setColor} phone={phone} field="color" />
      </Box>

      <Button
        style={{ marginTop: "10px" }}
        variant="contained"
        onClick={handleAddToCart}
      >
        <AddShoppingCart />
      </Button>
    </>
  )
}
