import { connect } from 'react-redux'

import Root from '../components/Root'

import {
  fetchInfoIfNeeded
} from './reducer'

const mapStateToProps = (state, ownProps) => {
  return {
    infoTab: state.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    infoTab: {
      fetchInfo: () => dispatch(fetchInfoIfNeeded())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
