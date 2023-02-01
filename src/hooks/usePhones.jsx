import { useEffect, useState } from "react"
import { getPhones } from "../services/getPhones"

export const usePhones = () => {
  const [phones, setPhones] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getPhones().then(data => {
      setPhones(data)
      setLoading(false)
    })
  }, [])

  return { phones, loading }
}
