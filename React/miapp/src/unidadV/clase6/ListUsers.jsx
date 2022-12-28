import React from 'react';

export default function UserList({ children }) {
  return (
    <ul>
      {React.Children.map(children, child => (
        <li>
          {child}
        </li>
      ))}
    </ul>
  );
}

