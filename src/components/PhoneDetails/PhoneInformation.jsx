import { Box } from "@mui/material"

export const PhoneInformation = ({ phone }) => {
  const keys = Object.keys(phone)

  return (
    <Box display="flex" flexDirection="column" gap="10px">
      {keys.map((key, id) => {
        if (!["id", "img", "storage", "color"].includes(key) && phone[key])
          return (
            <div key={id}>
              <span style={{ fontWeight: "bold" }}>{key}: </span>
              {phone[key]}
            </div>
          )
      })}
    </Box>
  )
}
