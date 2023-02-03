import { Container, TextField } from "@mui/material"
import { useSelector } from "react-redux"

const filterByField = (field, search) => {
  return field.toLowerCase().includes(search.toLowerCase())
}

export const SearchPhoneInput = ({ onInput }) => {
  const phones = useSelector(state => state.phones)

  const handleInput = ({ target }) => {
    const filteredPhones = phones.filter(phone => {
      if (!target.value) return true
      const includeBrand = filterByField(phone.brand, target.value)
      const includeModel = filterByField(phone.model, target.value)

      return includeBrand || includeModel
    })

    onInput(filteredPhones)
  }

  return (
    <Container maxWidth="xl" style={{ display: "flex", justifyContent: "end" }}>
      <TextField
        size="small"
        style={{ margin: "1rem 2rem 1rem 0" }}
        onInput={handleInput}
        variant="outlined"
        label="Search..."
      />
    </Container>
  )
}
