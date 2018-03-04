import { connect } from 'react-redux'

import { fetchPropertyList, addProperty, removeProperty } from '../../reducers/propertyList/propertyListReducer'

import PropertyList from './PropertyList'

export const mapStateToProps = ({ propertyListData }) => {
  const {results, saved} = propertyListData
  return {results, saved}
}

export const mapDispatchToProps = dispatch => {
  return {
    fetchPropertyList: () => {
      dispatch(fetchPropertyList())
    },
    addProperty: (property) => {
      dispatch(addProperty(property))
    },
    removeProperty: (property) => {
      dispatch(removeProperty(property))
    }
  }
}

const PropertyListContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyList)

export default PropertyListContainer
