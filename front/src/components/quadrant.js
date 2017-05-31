import React from 'react' 
import { connect } from 'react-redux'
import { addCard } from '../actions'
import Card from './card'

const Quadrant = ({ name, addCard, cards, title }) => 
  <div className={"col-1-2 quadrant " + name } onClick={() => addCard(name)}>
    <div className="grid">
      <h1>{title}</h1>
      { cards.map((card, index) => <Card id={index} />) }
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
