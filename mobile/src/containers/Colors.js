import React, { Component } from 'react'
import { connect } from 'react-redux'
import { search, updateQuery } from '../actions'
import Colors from '../components/Colors'

class ColorsContainer extends Component {
    render () {
        return <Colors {...this.props} />
    }
}

const mapStateToProps = state => {
    return {
        colors: state.colors
    }
}

export default connect(mapStateToProps, { search, updateQuery })(ColorsContainer)
