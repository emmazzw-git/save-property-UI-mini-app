import rootEpic from './index'

describe('Root Epic', () => {
  test('should combine epics', () => {
    expect(rootEpic).toBeDefined()
    expect(rootEpic).toBeInstanceOf(Function)
  })
})
