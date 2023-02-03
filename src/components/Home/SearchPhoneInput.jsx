import { Container, TextField } from "@mui/material"

export const SearchPhoneInput = ({ phones }) => {
  const filteredPhones = phones.filter(phone => {
    if (!target.value) return true
    const includeBrand = phone.brand
      .toLowerCase()
      .includes(target.value.toLowerCase())
    const includeModel = phone.model
      .toLowerCase()
      .includes(target.value.toLowerCase())
    const match = includeBrand || includeModel
    return match
  })

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
