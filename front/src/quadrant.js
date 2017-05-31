import React from 'react' 
import { connect } from 'react-redux'
import { addCard } from './actions'

const Quadrant = ({ name, addCard }) => 
  <div className={"col-1-2 quadrant " + name } onClick={() => addCard(name)} />

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  addCard: (name) => dispatch(addCard(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quadrant)
