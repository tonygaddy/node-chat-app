const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    let from = 'from';
    let text = 'text';
    let message = generateMessage(from, text);
    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
    
    // let res = generateMessage('from', 'text');
    // expect(res.from).toBe('from');
    // expect(res.text).toBe('text');
    // expect
    // expect(res.createdAt).toBeA('number');
  });
});
