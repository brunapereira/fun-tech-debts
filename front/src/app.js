import React from 'react'
import ReactDOM from 'react-dom'
import Quadrant from './quadrant' 
import Header from './header' 

const quadrants = [ 
  { name: 'AA' },
  { name: 'AB' },
  { name: 'BA' },
  { name: 'BB' }
]

export default (props) => 
  <div className="wrapper" >
    <Header />
    <div className='grid board' > 
      { quadrants.map((quadrant) => <Quadrant {...quadrant}/>)  }
    </div>
  </div>
