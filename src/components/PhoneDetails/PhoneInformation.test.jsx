import { render, screen } from "@testing-library/react"
import { PhoneInformation } from "./PhoneInformation"

test("renders phone info", () => {
  const phone = {
    id: "002",
    img: "https://via.placeholder.com/200/000000/FFFFFF/?text=Apple",
    brand: "Apple",
    model: "iPhone 13",
    price: 800,
    cpu: "Chip A2",
    ram: "16",
    color: [
      { value: "1", text: "White" },
      { value: "3", text: "Red" },
    ],
    so: "IOS",
    resolution: "2.532 x 1.170 px",
    battery: "5000",
    camara: "32",
    storage: [{ value: "3", text: "256" }],
    size: "167.7 x 75.0 x 7.4 mm",
    weight: "150",
  }

  render(<PhoneInformation phone={phone} />)
  screen.findByText("camara: 32")
})
