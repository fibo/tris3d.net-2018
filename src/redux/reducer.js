/* global fetch */

import initialState from './initialState'

// const FETCH_INFO_FAILURE = 'FETCH_INFO_FAILURE'
// const FETCH_INFO_REQUEST = 'FETCH_INFO_REQUEST'
// const FETCH_INFO_SUCCESS = 'FETCH_INFO_SUCCESS'

const NUM_USERS_ONLINE_CHANGED = 'NUM_USERS_ONLINE_CHANGED'

// const headers = {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json'
// }

// const checkStatus = response => {
//   if (response.ok) {
//     return response.json()
//   } else {
//     const error = new Error(response.statusText)
//     error.response = response
//     throw error
//   }
// }

// function fetchInfo () {
//   return dispatch => {
//     dispatch({ type: FETCH_INFO_REQUEST })

//     fetch('/info', { headers, method: 'GET' })
//       .then(checkStatus)
//       .then(data => { dispatch({ type: FETCH_INFO_SUCCESS, data }) })
//       .catch(error => { dispatch({ type: FETCH_INFO_FAILURE, error }) })
//   }
// }

// export function fetchInfoIfNeeded () {
//   return (dispatch, getState) => {
//     const state = getState()

//     if (shouldFetchInfo(state)) {
//       return dispatch(fetchInfo())
//     }
//   }
// }

export function numUsersOnlineChanged (numUsersOnline) {
  return (dispatch) => {
    return dispatch({
      type: NUM_USERS_ONLINE_CHANGED,
      numUsersOnline
    })
  }
}

// function shouldFetchInfo ({ info }) {
//   return info === null
// }

export default function reducer (state = initialState, action) {
  switch (action.type) {
    // case FETCH_INFO_FAILURE:
    //   return state

    // case FETCH_INFO_REQUEST:
    //   return state

    // case FETCH_INFO_SUCCESS:
    //   return Object.assign({}, state, { info: action.data })

    case NUM_USERS_ONLINE_CHANGED:
      return Object.assign({}, state, {
        info: Object.assign({}, state.info, {
          numUsersOnline: action.numUsersOnline
        })
      })

    default: return state
  }
}
