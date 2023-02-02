import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { PhoneDetails } from "../pages/PhoneDetails/PhoneDetails"

export const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phone/:id" element={<PhoneDetails />} />
    </Routes>
  )
}
