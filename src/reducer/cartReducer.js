export const cartReducer = (state = [], action) => {
  const options = {
    "@cart/add": () => {
      return [
        ...state,
        action.payload
      ]
    }
  }

  return options[action.type]
    ? options[action.type]()
    : state
}