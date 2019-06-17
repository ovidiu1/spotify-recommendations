const genres = (state = [], action) => {
  switch (action.type) {
    case 'SELECTED_GENRE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state
  }
}
  export default genres
