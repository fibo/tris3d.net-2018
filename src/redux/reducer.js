/* global fetch */

import initialState from './initialState'

const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE'
const FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST'
const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const checkStatus = response => {
  if (response.ok) {
    return response.json()
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function fetchInfo () {
  return dispatch => {
    dispatch({ type: FETCH_INFO_REQUEST })

    fetch('/info', { headers, method: 'GET' })
      .then(checkStatus)
      .then(data => { dispatch({ type: FETCH_INFO_SUCCESS, data }) })
      .catch(error => { dispatch({ type: FETCH_INFO_FAILURE, error }) })
  }
}

export function fetchInfoIfNeeded () {
  return (dispatch, getState) => {
    const state = getState()

    if (shouldFetchInfo(state)) {
      return dispatch(fetchInfo())
    }
  }
}

function shouldFetchInfo ({ info }) {
  return info === null
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO_FAILURE:
      return state

    case FETCH_INFO_REQUEST:
      return state

    case FETCH_INFO_SUCCESS:
      return Object.assign({}, state, { info: action.data })

    default: return state
  }
}
