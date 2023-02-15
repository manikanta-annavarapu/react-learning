import React from "react";

//below is one way of destructuring the object properties
const Wishes = ({ name, partOfDay }) => {
  return (
    <>
      <h1>
        Good {partOfDay}, {name}
      </h1>
    </>
  );
};

//another way of destructing is by destructuring inside the function
export const Wish = (props) => {
  const { name, partOfDay } = props;
  return (
    <>
      <h1>
        Good {partOfDay}, {name}
      </h1>
    </>
  );
};

export default Wishes;
