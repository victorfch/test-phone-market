import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPhones } from "../services/getPhones"

export const usePhones = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const phones = useSelector(state => state.phones)

  useEffect(() => {
    getPhones().then(data => {
      dispatch({ type: "@phones/set", payload: data })
      dispatch({ type: "@filter/set", payload: data })
      setLoading(false)
    })
  }, [])
}
