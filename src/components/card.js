import React, { Component } from 'react'

import './card.less'

class Card extends Component {
  constructor() {
    super()
    this.state = { isEditing: false, content: '' }
  }

  handleEdit() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleChange(e) {
    this.setState({ content: e.target.value })
  }

  render() {
    return (
      this.state.isEditing
      ? (
        <div className='col-1-3'>
          <div className={'card ' + this.props.quadrant}>
            <textarea value={this.state.content} onChange={this.handleChange.bind(this)}></textarea>
            <button className='done' onClick={this.handleEdit.bind(this)}>done</button>
          </div>
        </div>
      )
      : (
        <div className='col-1-3'>
          <div className={'card ' + this.props.quadrant}>
            <div className='content'>{this.state.content}</div>
            <a className='pencil' onClick={this.handleEdit.bind(this)}><i className='fa fa-pencil'></i></a>
          </div>
        </div>
      )
    )
  }
}

export default Card
