export const filterReducer = (state = [], action) => {
  const options = {
    "@filter/set": () => {
      return action.payload
    }
  }

  return options[action.type]
    ? options[action.type]()
    : state
}