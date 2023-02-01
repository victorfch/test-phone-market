import { PhoneItem } from "../components/PhoneItem"
import { usePhones } from "../hooks/usePhones"
import styles from "./home.module.css"
export const Home = () => {
  const { phones, loading } = usePhones()
  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div className={styles.gallery}>
        {phones.map(phone => (
          <PhoneItem key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  )
}
