import request from 'superagent'

export const LOAD_PARAGRAPHS_SUCCESS = 'LOAD_PARAGRAPHS_SUCCESS'
export const LOAD_PARAGRAPHS_FAIL = 'LOAD_PARAGRAPHS_FAIL'

export function loadParagraphs (articleUrl) {
  return dispatch => {
    return request
      .get('http://localhost:3000/api/article')
      .query(`url=${articleUrl}`)
      .then(res => dispatch({type: LOAD_PARAGRAPHS_SUCCESS, paragraphs: res.body.result.value}))
      .catch(err => dispatch({type: LOAD_PARAGRAPHS_FAIL, err}))
  }
}
