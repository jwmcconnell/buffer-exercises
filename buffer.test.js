const makeBuffer = require('./buffer');

describe('exercise 1', () => {
  it('creates a buffer of length 10', () => {
    const result = makeBuffer();
    expect(result).toHaveLength(10);
  });
});
