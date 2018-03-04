import React from 'react'
import { shallow } from 'enzyme'
import PropertyCard from './PropertyCard'

describe('PropertyCard', () => {
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
    },
    buttonClassName: 'addProperty',
    callBackFn: jest.fn()
  }

  test('snapshot test', () => {
    const component = shallow(<PropertyCard {...props} />)
    expect(component).toMatchSnapshot()
  })

  test('should set isVisible state to true when the mouse is hovering the property card', () => {
    const component = shallow(<PropertyCard {...props} />)
    component.instance().mouseEnter()
    expect(component.state().isVisible).toEqual(true)
  })

  test('should set isVisible state to false when the mouse loses hover of the property card', () => {
    const component = shallow(<PropertyCard {...props} />)
    component.instance().mouseLeave()
    expect(component.state().isVisible).toEqual(false)
  })

  test('should call props.callBackFn when click on the button', () => {
    const component = shallow(<PropertyCard {...props} />)
    component.instance().handleClick()
    expect(props.callBackFn).toHaveBeenCalledWith(props.propertyDetails)
  })
})
