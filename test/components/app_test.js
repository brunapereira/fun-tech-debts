import React from 'react' 
import { shallow } from 'enzyme'
import { expect } from 'chai'

import { App } from 'components/App.js' 

describe('App', () => {
  it('App has content', () => {
    const app = shallow(<App quadrants={[]}/>)
    expect(app.find('div')).to.exist
  })
})
