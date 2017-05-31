import React from 'react' 
import { connect } from 'react-redux'
import { addCard } from '../actions'

const Quadrant = ({ name, addCard, cards, title }) => 
  <div className={"col-1-2 quadrant " + name } onClick={() => addCard(name)}>
    <div className="grid">
      <p>{title}</p>
      { cards.map((card, index) =><div className="col-1-3"><div className="card" id={index}>card</div></div>) }
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
