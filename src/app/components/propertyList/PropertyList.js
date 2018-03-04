import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PropertyCard from './propertyCard/PropertyCard'
import './PropertyList.css'

export class PropertyList extends Component {
  componentDidMount () {
    this.props.fetchPropertyList()
  }

  render () {
    const { results = [], saved = [] } = this.props
    return (
      <div className='propertyListContainer'>
        <div className='col'>
          <div>Results</div>
          {results.map(result => <PropertyCard propertyDetails={result} key={result.id} />)}
        </div>
        <div className='col'>
          <div>Saved Properties</div>
          {saved.map(s => <PropertyCard propertyDetails={s} key={s.id} />)}
        </div>
      </div>
    )
  }
}

PropertyList.propTypes = {
  results: PropTypes.array,
  saved: PropTypes.array,
  fetchPropertyList: PropTypes.func
}

export default PropertyList
