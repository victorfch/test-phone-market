import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import { PhoneItem } from "./PhoneItem"
import styles from "./phoneList.module.css"

export const PhonesList = () => {
  const filterPhones = useSelector(state => state.filter)

  return (
    <Box
      maxWidth="100%"
      display="flex"
      flexDirection="column"
      marginBottom="2rem"
    >
      <div className={styles.gallery}>
        {filterPhones &&
          filterPhones.map(phone => <PhoneItem key={phone.id} phone={phone} />)}
      </div>
    </Box>
  )
}
