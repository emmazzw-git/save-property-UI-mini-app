import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
          {results.map(result => <div>{result.id}</div>)}
        </div>
        <div className='col'>
          {saved.map(s => <div>{s.id}</div>)}
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
