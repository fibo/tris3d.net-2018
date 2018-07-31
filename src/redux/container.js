import { connect } from 'react-redux'

import Root from '../components/Root'

import {
  fetchInfoIfNeeded
} from './reducer'

const mapStateToProps = (state, ownProps) => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInfo: () => dispatch(fetchInfoIfNeeded())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
