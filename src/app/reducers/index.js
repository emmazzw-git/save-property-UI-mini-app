import { combineReducers } from 'redux'

import propertyListData from './propertyList/propertyListReducer'

const rootReducer = combineReducers({
  propertyListData
})

export default rootReducer
