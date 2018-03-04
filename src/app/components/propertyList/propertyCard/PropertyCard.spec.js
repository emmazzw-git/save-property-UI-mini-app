import React from 'react'
import { shallow } from 'enzyme'
import PropertyCard from './PropertyCard'

describe('PropertyCard', () => {
  test('snapshot test', () => {
    const props = {
      propertyDetails: {
        price: '$726,500',
        agency: {
          brandingColors: {
            primary: '#ffe512'
          },
          logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
        },
        id: '1',
        mainImage: 'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'

      }
    }
    const component = shallow(<PropertyCard {...props} />)
    expect(component).toMatchSnapshot()
  })
})
