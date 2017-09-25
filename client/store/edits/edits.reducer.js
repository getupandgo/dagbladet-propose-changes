const initialState = [
  {
    articleUrl: 'https://dagbladet.no/first/68573788',
    originalText: 'Original articles text 1',
    userText: 'Text proposed by user'
  },
  {
    articleUrl: 'https://dagbladet.no/first/68573788',
    originalText: 'Original articles text 1',
    userText: 'Text proposed by user'
  }
]

export default function edits (state = initialState, action) {
  switch (action.type) {
    case 'DELETE_EDITS':
      console.log(state)
      return state.filter(edit => edit._id !== action.id)
    case 'LOAD_EDITS_SUCCESS':
      return action.edits ? action.edits : state
    case 'LOAD_EDITS_FAIL':
    default: return state
  }
}
