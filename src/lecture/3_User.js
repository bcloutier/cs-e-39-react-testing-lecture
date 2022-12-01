import { useState, useEffect } from "react";

// // stub out fetch call because we have no back-end
// const fetch = () =>
//   Promise.resolve({
//     json: () => ({ name: "Jane Smith", age: 31, address: "123 main st" }),
//   });

const User = ({ id }) => {
  const [user, setUser] = useState(null);

  // fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch("/user/" + id);

      try {
        const user = await response.json();
        setUser(user);
      } catch (error) {
        setUser({ name: "Jane Doe", age: "Unknown", address: "Unknown" });
      }
    };

    fetchUserData(id);
  }, [id]);

  if (!user) {
    return "loading...";
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
