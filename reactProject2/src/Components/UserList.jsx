import React from 'react';

function UserList({ users, onUserClick }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => onUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
