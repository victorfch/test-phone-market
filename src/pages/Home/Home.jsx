import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PhoneItem } from "../../components/PhoneItem"
import styles from "./home.module.css"

export const Home = () => {
  const phones = useSelector(state => state.phones)
  const filterPhones = useSelector(state => state.filter)
  const dispatch = useDispatch()
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    const filteredPhones = phones.filter(
      phone =>
        phone.brand.toLowerCase().includes(value) ||
        phone.model.toLowerCase().includes(value)
    )

    dispatch({ type: "@filter/set", payload: filteredPhones })
    setValue("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onInput={({ target }) => setValue(target.value)}
          type="text"
        />
      </form>
      <div className={styles.gallery}>
        {filterPhones &&
          filterPhones.map(phone => <PhoneItem key={phone.id} phone={phone} />)}
      </div>
    </div>
  )
}
