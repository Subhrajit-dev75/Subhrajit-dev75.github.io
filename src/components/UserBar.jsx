import React from 'react';

const UserBar = ({ user }) => {
  // Display nothing if no user is logged in.
  if (!user) return null;

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-900 py-2 px-4">
      <span className="text-gray-800 dark:text-gray-100">
        Welcome, {user.displayName || user.email}
      </span>
    </div>
  );
};

export default UserBar;

