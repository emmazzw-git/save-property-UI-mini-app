'use strict'
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App', () => {
  test('snapshot test', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })
})
