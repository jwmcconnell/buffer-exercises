const makeBuffer = require('./buffer');

describe('makeBuffer', () => {
  it('creates a buffer from a string', () => {
    const result = makeBuffer('Hi there!');
    expect(result).toHaveLength(9);
    expect(result.toString()).toEqual('Hi there!');
  });
});
