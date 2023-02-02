export const getSinglePhone = async (id) => {
  const res = await fetch("../../db/data.json")
  const data = await res.json()
  const phone = data.find(phone => phone.id === id)

  return phone
} 