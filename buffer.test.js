const makeBuffer = require('./buffer');

describe('makeBuffer', () => {
  it('makes a buffer from an array of hex codes', () => {
    const smile = makeBuffer([0xF0, 0x9F, 0x98, 0x81]);
    expect(smile).toHaveLength(4);
    expect(smile.toString()).toEqual('😁');
  });
});
