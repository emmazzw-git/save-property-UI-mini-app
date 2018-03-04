import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './PropertyCard.css'

export class PropertyCard extends Component {
  render () {
    const { id, price, mainImage, agency } = this.props.propertyDetails
    const { brandingColors, logo } = agency
    return (
      <div className='propertyCardContainer' key={id}>
        <div className='propertyCardHeader' style={{ backgroundColor: brandingColors.primary }}>
          <img className='logo' src={logo} alt='logoImage' />
        </div>
        <div className='propertyCardBody'>
          <img className='propertyImage' src={mainImage} alt='propertyImage' />
        </div>
        <div className='propertyCardFooter'>
          {price}
        </div>
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
  })
}

export default PropertyCard
