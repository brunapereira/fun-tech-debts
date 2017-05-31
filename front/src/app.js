import React from 'react'
import ReactDOM from 'react-dom'
import Quadrant from './quadrant' 

const quadrants = [ 
  { name: 'AA' },
  { name: 'AB' },
  { name: 'BA' },
  { name: 'BB' }
]

export default (props) => (<div> 
  { quadrants.map((quadrant) => <Quadrant {...quadrant}/>)  }
 </div>)
