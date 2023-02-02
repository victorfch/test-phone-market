import { useEffect, useState } from "react"
import { getSinglePhone } from "../services/getSinglePhone"

export const useSinglePhone = id => {
  const [phone, setPhone] = useState({})
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getSinglePhone(id).then(phone => {
      setPhone(phone)
      setLoading(false)
    })
  }, [id])

  return { phone, loading }
}
