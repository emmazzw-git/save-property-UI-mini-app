import { combineEpics } from 'redux-observable'

import getPropertyListEpic from './propertyList/propertyList.epic'

export const rootEpic = combineEpics(
  getPropertyListEpic
)

export default rootEpic
