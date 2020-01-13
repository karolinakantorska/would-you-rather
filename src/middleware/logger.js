const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('the action is' , action)
    console.log('The new state', store.getState())
  console.groupEnd()
}

export default logger
