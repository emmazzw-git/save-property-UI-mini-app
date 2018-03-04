import { connect } from 'react-redux'

import { fetchPropertyList } from '../../reducers/propertyList/propertyListReducer'

import PropertyList from './PropertyList'

export const mapStateToProps = ({ propertyListData }) => {
  const {results, saved} = propertyListData
  return {results, saved}
}

export const mapDispatchToProps = dispatch => {
  return {
    fetchPropertyList: () => {
      dispatch(fetchPropertyList())
    }
  }
}

const PropertyListContainer = connect(mapStateToProps, mapDispatchToProps)(PropertyList)

export default PropertyListContainer
