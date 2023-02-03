import { Box, Container, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { PhoneItem } from "../../components/PhoneItem"
import styles from "./home.module.css"

export const Home = () => {
  const phones = useSelector(state => state.phones)
  const filterPhones = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const handleInput = ({ target }) => {
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

    dispatch({ type: "@filter/set", payload: filteredPhones })
  }

  return (
    <div style={{ padding: "1rem 2rem" }}>
      <Container
        maxWidth="xl"
        style={{ display: "flex", justifyContent: "end" }}
      >
        <TextField
          size="small"
          style={{ margin: "1rem 2rem 1rem 0" }}
          onInput={handleInput}
          variant="outlined"
          label="Search..."
        />
      </Container>
      <Box
        maxWidth="100%"
        display="flex"
        flexDirection="column"
        marginBottom="2rem"
      >
        <div className={styles.gallery}>
          {filterPhones &&
            filterPhones.map(phone => (
              <PhoneItem key={phone.id} phone={phone} />
            ))}
        </div>
      </Box>
    </div>
  )
}
