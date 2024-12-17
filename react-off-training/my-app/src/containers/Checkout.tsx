import { FormEvent, useEffect, useRef, useState } from "react";

function Checkout() {
  const [name, setName] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const saveData = (e: FormEvent) => {
    e.preventDefault(); // prevent form from reloading the page
    console.log("Data saved", name, emailRef.current?.value);
  };

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, [emailRef]);

  return (
    <form onSubmit={(e) => saveData(e)}>
      {/* Controlled Components */}
      <input
        type="text"
        placeholder="enter name"
        id="name"
        onChange={(e) => setName(e.target.value)}
      />
      {name === "" ? <small>Name is required</small> : null} {/* validation */}
      {/* ref: gets the DOM object reference */}
      <input type="text" placeholder="enter email" id="email" ref={emailRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Checkout;
