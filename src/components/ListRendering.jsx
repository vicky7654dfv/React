import React from "react";

export default function ListRendering() {
  const fruits = ["Apple", "Banana", "Orange"];

  const user = [
    { id: 1, name: "John", email: "John@mail" },
    { id: 2, name: "Vignesh", email: "John@mail" },
    { id: 3, name: "John", email: "John@mail" }
  ];
  return (
    <>
      <div>
        {fruits.map((ele, ind) => (
          <p key={ind}>{ele}</p>
        ))}
      </div>
      <ul>
        {user.map((user)=>(
            <li key={user.id}>
                {user.id}   &nbsp;    {user.name}
            </li>
        ))}
      </ul>
      <table>
        <thead>
            <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {user.length > 0 ? (
            user.map((user, ind) => (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <p>No Data Found</p>
          )}
        </tbody>
      </table>
    </>
  );
}
