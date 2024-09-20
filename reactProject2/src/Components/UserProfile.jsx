import React from 'react';

const UserProfile = React.forwardRef((props, ref) => {
  return (
    <div>
      <h2>User Profile</h2>
      <pre id="userProfile">Select a user to see the details.</pre>
    </div>
  );
});

export default UserProfile;
