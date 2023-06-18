import React, { useEffect, useState } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const apiData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching users");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
        setError("Error fetching users");
      });
  };

  useEffect(() => {
    apiData("");
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((data, id) => (
          <li key={id}>{data.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
