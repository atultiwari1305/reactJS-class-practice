import React, { createContext, useRef } from 'react';
import UserList from './Components/UserList';
import UserProfile from './Components/UserProfile';

export const UserContext = createContext();

const users = [
  { id: 1, name: 'Atul', email: 'atul@gmail.com', phone: 'XXX-XXX-XXXX' },
  { id: 2, name: 'Raj', email: 'raj@gmail.com', phone: '91X1312XXX' },
  { id: 3, name: 'Manav', email: 'manav@gmail.com', phone: '7891235422' },
];

function App() {
  const selectedUserRef = useRef(null);

  const handleUserClick = (user) => {
    selectedUserRef.current = user;
    document.getElementById('userProfile').textContent = JSON.stringify(user, null, 2);
  };

  return (
    <UserContext.Provider value={selectedUserRef.current}>
      <div className="App">
        <h1>User List</h1>
        <UserList users={users} onUserClick={handleUserClick} />
        <UserProfile ref={selectedUserRef} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
