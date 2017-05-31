import React from 'react' 

const handleClick = name => {
  console.log('funciona', name)  
}

export default ({ name }) => 
  <div className={"col-1-2 quadrant " + name } onClick={handleClick.bind(this, name)}>
  </div>
