import {
  mapStateToProps,
  mapDispatchToProps
} from './PropertyListContainer'
import { types } from '../../reducers/propertyList/propertyListReducer'

describe('PropertyListContainer', () => {
  let combinedReducersState = {
    propertyListData: {
      results: [{id: '1'}],
      saved: [{id: '2'}]
    }
  }

  describe('mapStateToProps', () => {
    test('should return an object {branchData} with values from state.branchDetailsReducer', () => {
      expect(mapStateToProps(combinedReducersState)).toEqual(combinedReducersState.propertyListData)
    })
  })

  describe('mapDispatchToProps', () => {
    test('should return an object with the function fetchPropertyList as a property', () => {
      let dispatch = jest.fn()
      const dispatchToProps = mapDispatchToProps(dispatch)
      dispatchToProps.fetchPropertyList()
      expect(dispatch).toHaveBeenCalledWith({
        type: types.FETCH_PROPERTY_LIST
      })
    })

    test('should return an object with the function addProperty as a property', () => {
      const property = {id: 1}
      let dispatch = jest.fn()
      const dispatchToProps = mapDispatchToProps(dispatch)
      dispatchToProps.addProperty(property)
      expect(dispatch).toHaveBeenCalledWith({
        type: types.ADD_PROPERTY,
        property
      })
    })

    test('should return an object with the function removeProperty as a property', () => {
      const property = {id: 1}
      let dispatch = jest.fn()
      const dispatchToProps = mapDispatchToProps(dispatch)
      dispatchToProps.removeProperty(property)
      expect(dispatch).toHaveBeenCalledWith({
        type: types.REMOVE_PROPERTY,
        property
      })
    })
  })
})
