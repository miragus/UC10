const USERS = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' }
  ];
  
  export const findUserById = (id) => {
    return USERS.find((user) => user.id === id);
  };
  
  export const showUserName = (userId) => {
    const userName = findUserById(userId).name;
    return userName;
  };

  