import { Box, Container, TextField } from "@mui/material"
import { useDispatch } from "react-redux"
import { PhonesList } from "../../components/Home/PhonesList"
import { SearchPhoneInput } from "../../components/Home/SearchPhoneInput"

export const Home = () => {
  const dispatch = useDispatch()

  const handleInput = filteredPhones => {
    dispatch({ type: "@filter/set", payload: filteredPhones })
  }

  return (
    <div style={{ padding: "1rem 2rem" }}>
      <SearchPhoneInput onInput={handleInput} />
      <PhonesList />
    </div>
  )
}
