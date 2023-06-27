
const {default: TestRunner} = require('jest-runner')

const addFive=require('./addFive')

test('should first', () => {
    expect(addFive(1)).toBe(6)

     })
// above codes for the test