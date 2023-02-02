export const phonesReducer = (state = [], action) => {
  const options = {
    "@phones/set": () => {
      return action.payload
    }
  }

  return options[action.type]
    ? options[action.type]()
    : state
}