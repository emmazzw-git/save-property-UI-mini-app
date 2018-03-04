import propertyListReducer, {
  types,
  fetchPropertyList,
  setPropertyList,
  addProperty,
  removeProperty
} from './propertyListReducer'

const initialState = {
  results: [],
  saved: []
}

describe('propertyListReducer', () => {
  describe('action.type === types.SET_PROPERTY_LIST', () => {
    test('should update state object when new state is supplied', () => {
      const state = { results: [], saved: [] }
      const stateAfter = {results: [{id: 1}], saved: [{id: 2}]}
      const action = { type: types.SET_PROPERTY_LIST, properties: stateAfter }
      expect(propertyListReducer(state, action)).toEqual({
        ...state,
        results: stateAfter.results,
        saved: stateAfter.saved
      })
    })
  })

  describe('action.type === types.ADD_PROPERTY', () => {
    test('should update state object when new state is supplied', () => {
      const state = { results: [{id: 1}, {id: 2}], saved: [{id: 1}] }
      const stateAfter = {id: 2}
      const action = { type: types.ADD_PROPERTY, property: stateAfter }
      expect(propertyListReducer(state, action)).toEqual({
        ...state,
        saved: state.results
      })
    })

    test('should not update state object when new state already exists', () => {
      const state = { results: [{id: 1}, {id: 2}], saved: [{id: 1}] }
      const stateAfter = {id: 1}
      const action = { type: types.ADD_PROPERTY, property: stateAfter }
      expect(propertyListReducer(state, action)).toEqual({
        ...state,
        saved: state.saved
      })
    })
  })

  describe('action.type === types.REMOVE_PROPERTY', () => {
    test('should update state object when new state is supplied', () => {
      const state = { results: [{id: 1}, {id: 2}], saved: [{id: 1}] }
      const stateAfter = {id: 1}
      const action = { type: types.REMOVE_PROPERTY, property: stateAfter }
      expect(propertyListReducer(state, action)).toEqual({
        ...state,
        saved: []
      })
    })
  })

  describe('action.type does not match any switch.case condition', () => {
    test('should return default state when no state is supplied and action.type does not match a switch.case condition', () => {
      expect(
        propertyListReducer(initialState, { type: 'DOES_NOT_MATCH' })
      ).toEqual({
        ...initialState
      })
    })

    test('should return supplied state when action.type does not match a switch.case condition', () => {
      const state = { test: 'test' }
      expect(propertyListReducer(state, { type: 'DOES_NOT_MATCH' })).toEqual(
        state
      )
    })

    test('should return default state when no action is supplied and no new state is supplied', () => {
      expect(propertyListReducer(undefined)).toEqual({ ...initialState })
    })

    test('should return default state when no action is supplied and new state is supplied', () => {
      const state = { test: 'test' }
      expect(propertyListReducer(state)).toBe(state)
    })
  })

  describe('actions', () => {
    describe('fetchPropertyList', () => {
      test('should return {type: FETCH_PROPERTY_LIST}', () => {
        expect(fetchPropertyList()).toEqual({
          type: 'FETCH_PROPERTY_LIST'
        })
      })
    })

    describe('setPropertyList', () => {
      const properties = {results: [{id: 1}], saved: [{id: 2}]}
      test('should return {type: SET_PROPERTY_LIST, properties: properties}', () => {
        expect(setPropertyList(properties)).toEqual({
          type: 'SET_PROPERTY_LIST',
          properties
        })
      })
    })

    describe('addProperty', () => {
      const property = {id: 1}
      test('should return {type: ADD_PROPERTY, property: property}', () => {
        expect(addProperty(property)).toEqual({
          type: 'ADD_PROPERTY',
          property
        })
      })
    })

    describe('removeProperty', () => {
      const property = {id: 1}
      test('should return {type: REMOVE_PROPERTY, property: property}', () => {
        expect(removeProperty(property)).toEqual({
          type: 'REMOVE_PROPERTY',
          property
        })
      })
    })
  })
})
