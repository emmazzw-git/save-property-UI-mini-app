import { ActionsObservable } from 'redux-observable'
import getPropertyListEpic from './propertyList.epic'
import { types } from '../../reducers/propertyList/propertyListReducer'

describe('propertyList.epic', () => {
  it('should return correct actions', function () {
    const action$ = ActionsObservable.of({
      type: types.FETCH_PROPERTY_LIST
    })

    const output$ = getPropertyListEpic(action$)
    output$.toArray().subscribe(actions => {
      expect(actions.length).toBe(1)
    })
  })
})
