import React, { Component } from 'react'

import './card.less'

class Card extends Component {
  constructor() {
    super()
    this.state = { isEditing: false }
  }

  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  render() {
    return (
      this.state.isEditing
      ? (
        <div className='col-1-3'>
          <div className={'card ' + this.props.quadrant}>
            <textarea></textarea>
            <button className='done' onClick={this.handleEdit.bind(this)}>done</button>
          </div>
        </div>
      )
      : (
        <div className='col-1-3'>
          <div className={'card ' + this.props.quadrant}>
            <a className='pencil' onClick={this.handleEdit.bind(this)}><i className='fa fa-pencil'></i></a>
          </div>
        </div>
      )
    )
  }
}

export default Card
