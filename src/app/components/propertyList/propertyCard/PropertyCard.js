import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './PropertyCard.css'

export class PropertyCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isVisible: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }

  mouseEnter () {
    this.setState({isVisible: true})
  }

  mouseLeave () {
    this.setState({isVisible: false})
  }

  handleClick () {
    const { callBackFn, propertyDetails } = this.props
    callBackFn(propertyDetails)
  }

  render () {
    const {isVisible} = this.state
    const { id, price, mainImage, agency } = this.props.propertyDetails
    const { buttonText, buttonClassName } = this.props
    const { brandingColors, logo } = agency
    const buttonStyle = classNames(
      'propertySelectionOptionButton',
      `${buttonClassName}`
    )
    return (
      <div className='propertyCardContainer'
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        key={id}>
        <div className='propertyCardHeader' style={{ backgroundColor: brandingColors.primary }}>
          <img className='logo' src={logo} alt='logoImage' />
        </div>
        <div><img className='propertyImage' src={mainImage} alt='propertyImage' /></div>
        <div>{price}</div>
        {
          isVisible ? (
            <button className={buttonStyle} onClick={this.handleClick}>
              {buttonText}
            </button>) : null
        }
      </div>
    )
  }
}

PropertyCard.propTypes = {
  propertyDetails: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.string,
    mainImage: PropTypes.string,
    agency: PropTypes.shape({
      brandingColors: PropTypes.shape({
        primary: PropTypes.string
      }),
      logo: PropTypes.string
    })
  }),
  buttonClassName: PropTypes.string,
  callBackFn: PropTypes.func
}

export default PropertyCard
