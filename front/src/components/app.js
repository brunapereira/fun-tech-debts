import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import Quadrant from './quadrant' 
import Header from './header' 

const App = ({ quadrants }) => 
  <div className="wrapper" >
    <Header />
    <div className='grid board' > 
      { Object.keys(quadrants).map((quadrant) => <Quadrant name={quadrant} />)  }
    </div>
  </div>

const mapStateToProps = (state) => {
  return { quadrants: state }
}

export default connect(mapStateToProps)(App)

