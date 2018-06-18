const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should generate location message object', () => {
    let from = 'from';
    let lat = 35;
    let lng = -80;
    let url = 'https://www.google.com/maps?q=35,-80';

    let locationMessage = generateLocationMessage(from, lat, lng);

    expect(locationMessage).toInclude({
      from,
      url
    });
    expect(locationMessage.createdAt).toBeA('number');
  });
});
