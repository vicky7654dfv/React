import React, { useEffect, useState } from "react";

export default function ApiUseEffect() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email} - {user.phone} - {user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
