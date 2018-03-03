import React from 'react'
import { shallow } from 'enzyme'
import PropertyList from './PropertyList'

describe('PropertyList', () => {
  test('snapshot test', () => {
    const props = {results: [], saved: [], fetchPropertyList: jest.fn()}
    const component = shallow(<PropertyList {...props} />)
    expect(component).toMatchSnapshot()
  })
})
