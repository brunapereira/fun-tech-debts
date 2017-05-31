import React from 'react' 
import { connect } from 'react-redux'
import { addCard } from './actions'

const Quadrant = ({ name, addCard, cards }) => 
  <div className={"col-1-2 quadrant " + name } onClick={() => addCard(name)}>
  { cards.map((card) => <div>card</div>) }
  </div>

const mapStateToProps = (state, ownProps) => {
  return {
    cards: state[ownProps.name]
  }
}

const mapDispatchToProps = dispatch => ({
  addCard: (name) => dispatch(addCard(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quadrant)
