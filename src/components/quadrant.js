import React from 'react' 
import { connect } from 'react-redux'
import { addCard } from '../actions'
import Card from './card'

import './quadrant.less'

const Quadrant = ({ name, addCard, cards, title }) => 
  <div className={"col-1-2 quadrant " + name }>
    <div className="grid">
      <h2>{title}</h2>
      <button onClick={() => addCard(name)}>+</button>
      { cards.map((card, index) => <Card id={index} quadrant={name} />) }
    </div>
  </div>

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state[ownProps.name].cards,
    title: state[ownProps.name].title
  }
}

const mapDispatchToProps = dispatch => ({
  addCard: (name) => dispatch(addCard(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quadrant)
