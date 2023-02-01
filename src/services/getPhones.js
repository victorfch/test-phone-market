
export const getPhones = async () => {
  const res = await fetch("../../db/data.json")
  const data = await res.json()
  return data
}