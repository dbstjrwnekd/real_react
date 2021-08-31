import React, { useState } from "react";
import Counter from "./Counter";
import Profile from "./Profile";

function App() {
  const [userId, setUserId] = useState(0);
  function onClick() {
    setUserId((id) => id + 1);
  }
  return (
    <React.Fragment>
      <Counter />
      <Profile userId={userId} />
      <button onClick={onClick}>userId 증가</button>
    </React.Fragment>
  );

  //return ["this", <p key={1}>히히</p>, "array"];
}

export default App;
