import { connect } from 'react-redux'

import Root from '../components/Root'

const mapStateToProps = (state, ownProps) => {
  return {
    infoTab: state.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
