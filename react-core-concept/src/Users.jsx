/**
 *
 * 1. Api : url: https://jsonplaceholder.typicode.com/users
 */

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => console.log(data));

// const loadData = async() => {
//     const res = await fetch ("https://jsonplaceholder.typicode.com/users");
//     const data = res.json();
//     return data;
// }

import { use } from "react";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);

  console.log(users);

  return (
    <div className="card">
      <h3>Users: {users.length}</h3>
    </div>
  );
}
