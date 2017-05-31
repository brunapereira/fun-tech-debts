import React from 'react' 
import { connect } from 'react-redux'
import { addCard } from '../actions'

const Quadrant = ({ name, key, addCard, cards }) => 
  <div className={"col-1-2 quadrant " + name } onClick={() => addCard(name)}>
    <div className="grid">
      { cards.map((card, index) =><div className="col-1-3"><div className="card" id={index}>card</div></div>) }
    </div>
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
