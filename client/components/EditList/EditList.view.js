import React from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import {loadEdits, deleteEdits} from '../../store/edits/edits.actions'
import Edit from '../Edit/Edit.view'

class EditList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}

    this.onAcceptClick = this.onAcceptClick.bind(this)
    this.onRejectClick = this.onRejectClick.bind(this)
  }
  render () {
    return <ul>
      {
        this.props.edits.map(edit =>
          <Edit
            key={edit._id}
            originalText={edit.originalText}
            userText={edit.userText}
            onAcceptClick={this.onAcceptClick}
            onRejectClick={this.onRejectClick}
            id={edit._id}
          />
        )
      }
    </ul>
  }
  componentDidMount () {
    console.log(this.props)
    this.props.loadEdits()
      .then((hui) => console.log(hui))
      .catch(err => console.error(err))
  }
  onAcceptClick (id) {
    return request
      .patch(`http://localhost:3000/api/edit/${id}`)
      .then(() => this.props.deleteEdits(id))
  }
  onRejectClick (id) {
    return request
      .delete(`http://localhost:3000/api/edit/${id}`)
      .then(() => this.props.deleteEdits(id))
  }
}

const mapStateToProps = state => {
  const {edits} = state
  return ({
    edits: edits
  })
}

export default connect(mapStateToProps, {loadEdits, deleteEdits})(EditList)
