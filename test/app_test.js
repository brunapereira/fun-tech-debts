import React from 'react' 
import { shallow } from 'enzyme'
import { expect } from 'chai'

import App from '../src/App.js' 

describe('App', () => {
  it('App has content', () => {
    const app = shallow(<App/>)
    expect(app.find('div')).to.have.length(1)
  })
})
