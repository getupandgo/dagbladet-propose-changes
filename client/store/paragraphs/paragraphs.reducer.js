const initialState = {
  title: 'Sample article',
  paragraphs: [
    'first paragraph'
  ]
}

export default function paragraphs (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PARAGRAPHS_SUCCESS':
      return action.paragraphs ? action.paragraphs : state
    case 'LOAD_PARAGRAPHS_FAIL':
    default: return state
  }
}
