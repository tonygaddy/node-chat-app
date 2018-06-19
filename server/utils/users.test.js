const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'

    }, {
      id: '2',
      name: 'Jen',
      room: 'React Course'

    }, {
      id: '3',
      name: 'Julie',
      room: 'Node Course'

    }];
  });

  it('should add new user', () => {
    let users = new Users();
    let user = {
      id: '123',
      name: 'Tony',
      room: 'The Office Fans'
    };
    let resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    let removed = users.removeUser('2');
    expect(removed.id).toBe('2');

  });

  it('should not remove a user', () => {
    let removed = users.removeUser('4');
    expect(removed).toNotExist();
  });

  it('should find user', () => {
    let found = users.getUser('1');
    expect(found.name).toBe('Mike');
  });

  it('should not find a user', () => {
    let found = users.getUser('4');
    expect(found).toNotExist();
  });

  it('should return names for the Node Course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for the Node Course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
