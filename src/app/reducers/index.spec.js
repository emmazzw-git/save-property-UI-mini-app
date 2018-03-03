import rootReducer from './index'

describe('Root Reducer', () => {
  test('should combine reducers', () => {
    expect(rootReducer).toBeDefined()
    expect(rootReducer).toBeInstanceOf(Function)
  })
})
