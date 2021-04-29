import { useState, useEffect } from 'react';

// // stub out fetch call because we have no back-end
// const fetch = () =>
//   Promise.resolve({
//     json: () => ({ name: 'Jane Smith', age: 51, address: '123 main st' }),
//   });

const User = ({ id }) => {
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch('/' + id);
    const user = await response.json();
    setUser(user);
  };

  // fetch user data
  useEffect(() => fetchUserData(id), [id]);

  if (!user) {
    return 'loading...';
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <strong>{user.age}</strong> years old
      <br />
      lives in {user.address}
    </details>
  );
};

export default User;
