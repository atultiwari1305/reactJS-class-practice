import React, { useState, useEffect } from 'react';

// Component for displaying users with search and sorting functionality
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Error fetching user data');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Search handler
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Sorting handler
  const handleSort = (field) => {
    const sortedUsers = [...users].sort((a, b) => {
      const fieldA = a[field].toLowerCase();
      const fieldB = b[field].toLowerCase();

      if (sortOrder === 'asc') {
        return fieldA > fieldB ? 1 : -1;
      } else {
        return fieldA < fieldB ? 1 : -1;
      }
    });

    setUsers(sortedUsers);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Filtered users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm) ||
    user.email.toLowerCase().includes(searchTerm) ||
    user.username.toLowerCase().includes(searchTerm)
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name, username, or email"
        value={searchTerm}
        onChange={handleSearch}
        style={{ marginBottom: '10px' }}
      />
      <div>
        <button onClick={() => handleSort('name')}>Sort by Name</button>
        <button onClick={() => handleSort('username')}>Sort by Username</button>
        <button onClick={() => handleSort('email')}>Sort by Email</button>
      </div>
      {/* User list */}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <h4>{user.name}</h4>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
