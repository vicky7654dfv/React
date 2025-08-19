import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [user, setUser] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoding(false);
      });
  }, []);
  console.log(user);

  return (
    <div>
      <h1>User List</h1>
      {loding ? (
        <p>Loading user...</p>
      ) : (
        <ul>
          {user.map((user) => (
            <Link to={`/About/${user.id}`} key={user.id}>
              <li key={user.id}>
                {user.name} -&nbsp; {user.email}- &nbsp;{user.phone}- &nbsp; {user.username} 
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}