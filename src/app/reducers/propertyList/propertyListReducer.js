import { concat, remove } from 'lodash'
// Action Types
export const types = {
  FETCH_PROPERTY_LIST: 'FETCH_PROPERTY_LIST',
  SET_PROPERTY_LIST: 'SET_PROPERTY_LIST',
  ADD_PROPERTY: 'ADD_PROPERTY',
  REMOVE_PROPERTY: 'REMOVE_PROPERTY'
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
    case types.ADD_PROPERTY:
      return {
        ...state,
        saved: concat(
          remove(state.saved, (s) => s.id !== action.property.id),
          action.property
        )
      }
    case types.REMOVE_PROPERTY:
      return {
        ...state,
        saved: remove(state.saved, (s) => s.id !== action.property.id)
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

export function addProperty (property) {
  return { type: types.ADD_PROPERTY, property }
}

export function removeProperty (property) {
  return { type: types.REMOVE_PROPERTY, property }
}
