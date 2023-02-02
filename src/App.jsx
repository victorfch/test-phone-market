import { useState } from "react"
import reactLogo from "./assets/react.svg"
import { Header } from "./components/Header"
import { Navigation } from "./components/Navigation"
import { usePhones } from "./hooks/usePhones"

function App() {
  usePhones()
  return (
    <div>
      <Header />
      <Navigation />
    </div>
  )
}

export default App
