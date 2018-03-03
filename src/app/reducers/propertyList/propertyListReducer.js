// Action Types
export const types = {
  FETCH_PROPERTY_LIST: 'FETCH_PROPERTY_LIST',
  SET_PROPERTY_LIST: 'SET_PROPERTY_LIST'
}

const initialState = {
  results: [],
  saved: []
}

// Reducer
export default function propertyListReducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_PROPERTY_LIST:
      return {
        ...state,
        results: action.properties.results,
        saved: action.properties.saved
      }
    default:
      return state
  }
}

// Action
export function fetchPropertyList () {
  return { type: types.FETCH_PROPERTY_LIST }
}

export function setPropertyList (properties) {
  return { type: types.SET_PROPERTY_LIST, properties }
}
