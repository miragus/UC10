import { showUserName } from "../integracao";

describe('Integration between showUserName() and findUserById()', () => {
  it('should return the correct user name', () => {
    const name1 = showUserName(1);
    expect(name1).toEqual('John');

    const name2 = showUserName(2);
    expect(name2).toEqual('Jane');

    const name3 = showUserName(3);
    expect(name3).toEqual('Joe');
  });
});

