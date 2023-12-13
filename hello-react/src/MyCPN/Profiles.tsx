import { useState } from "react";

const user = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Chuck Norris" },
  { id: 3, name: "Jane Doe" },
  { id: 4, name: "Foo Bar" },
  { id: 5, name: "Alice Bob" },
];

const defaultuser = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Chuck Norris" },
];

export default function Pf() {
  const [users, setUsers] = useState(defaultuser);

  function toc() {
    setUsers([]);
  }

  return (
    <>
      <div>
        {user.map((user) => {
          return (
            <p key={user.id} onClick={toc}>
              {user.name}
            </p>
          );
        })}
      </div>
      {/* <button onClick={() => toc}></button> */}
    </>
  );
}
