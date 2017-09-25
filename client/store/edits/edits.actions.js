import request from 'superagent'

export const LOAD_EDITS_SUCCESS = 'LOAD_EDITS_SUCCESS'
export const LOAD_EDITS_FAIL = 'LOAD_EDITS_FAIL'
export const DELETE_EDITS = 'DELETE_EDITS'

export function loadEdits () {
  return dispatch => {
    return request
      .get('http://localhost:3000/api/edit')
      .then(result => dispatch({type: LOAD_EDITS_SUCCESS, edits: result.body}))
      .catch(err => dispatch({type: LOAD_EDITS_FAIL, err}))
  }
}

export function deleteEdits (id) {
  return dispatch => {
    dispatch({type: DELETE_EDITS, id})
  }
}
