import { useEffect, useState } from "react";

function Demo() {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    console.log("effect function mounting");
  }, []);

  useEffect(() => {
    console.log("effect function in updating phrase");
  }, [count]);

  useEffect(() => {
    console.log("effect function try to unmounting");
    return () => {
      // returning a function will be considered as unmounting
      console.log("unmounted successfully");
    };
  }, []);
  return (
    <div>
      <h1>Demo Component</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Demo;
