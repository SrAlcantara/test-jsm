import React, { useEffect, useState } from "react";
// import { invoke } from "@forge/bridge";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // invoke("getText", { example: "my-invoke-variable" }).then(setData);
    console.log("Hello, world!");
  }, []);

  console.log("Hello, world!");

  return <div>{data ? data : "Hi TSM..."}</div>;
}

export default App;
