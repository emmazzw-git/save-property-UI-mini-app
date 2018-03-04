import React from 'react'
import { shallow } from 'enzyme'
import PropertyList from './PropertyList'

describe('PropertyList', () => {
  test('snapshot test with no property details', () => {
    const props = {results: [], saved: [], fetchPropertyList: jest.fn()}
    const component = shallow(<PropertyList {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('snapshot test with property details returned', () => {
    const props = {results: [{id: '1'}], saved: [{id: '2'}], fetchPropertyList: jest.fn()}
    const component = shallow(<PropertyList {...props} />)
    expect(component).toMatchSnapshot()
  })
})
