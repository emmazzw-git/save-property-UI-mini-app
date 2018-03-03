import {
  mapStateToProps
} from './PropertyListContainer'

describe('PropertyListContainer', () => {
  let combinedReducersState = {
    propertyListData: {
      results: [{id: 1}],
      saved: [{id: 2}]
    }
  }

  describe('mapStateToProps', () => {
    test('should return an object {branchData} with values from state.branchDetailsReducer', () => {
      expect(mapStateToProps(combinedReducersState)).toEqual(combinedReducersState.propertyListData)
    })
  })
})
