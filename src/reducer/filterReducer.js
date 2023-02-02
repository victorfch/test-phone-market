export const filterReducer = (state = [], action) => {
  const options = {
    "@filter/set": () => {
      console.log("me han llamado")
      return action.payload
    }
  }

  return options[action.type]
    ? options[action.type]()
    : state
}