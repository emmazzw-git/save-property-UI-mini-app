import React, { Component } from 'react'
import PropTypes from 'prop-types'

import PropertyCard from './propertyCard/PropertyCard'
import './PropertyList.css'

export class PropertyList extends Component {
  constructor (props) {
    super(props)
    this.addProperty = this.addProperty.bind(this)
    this.removeProperty = this.removeProperty.bind(this)
  }
  componentDidMount () {
    this.props.fetchPropertyList()
  }

  addProperty (property) {
    this.props.addProperty(property)
  }

  removeProperty (property) {
    this.props.removeProperty(property)
  }

  render () {
    const { results, saved } = this.props
    return (
      <div className='propertyListContainer'>
        <div className='col'>
          <div>Results</div>
          {results.map(result =>
            <PropertyCard
              key={result.id}
              propertyDetails={result}
              buttonText={'Add property'}
              buttonClassName={'addProperty'}
              callBackFn={this.addProperty}
            />)}
        </div>
        <div className='col'>
          <div>Saved Properties</div>
          {saved.map(s =>
            <PropertyCard
              key={s.id}
              propertyDetails={s}
              buttonText={'Remove property'}
              buttonClassName={'removeProperty'}
              callBackFn={this.removeProperty}
            />)}
        </div>
      </div>
    )
  }
}

PropertyList.propTypes = {
  results: PropTypes.array,
  saved: PropTypes.array,
  fetchPropertyList: PropTypes.func,
  addProperty: PropTypes.func,
  removeProperty: PropTypes.func
}

PropertyList.defaultProps = {
  results: [],
  saved: []
}

export default PropertyList
