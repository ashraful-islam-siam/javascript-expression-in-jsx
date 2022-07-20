import React from "react";
import ReactDOM from "react-dom";

const world = "Hello World"
const fName = "Ashraful";
const lName = "Islam";
const fullName = `${fName} ${lName}`

ReactDOM.render(<div>
  <h2>{world}!</h2>
  <h3>My name is {fName +  ' ' + lName} </h3>
  <h3>Hello, {`${fName} ${lName}`}</h3>
  <h2>You are joss, {fullName}</h2>
</div>, document.getElementById("root"));
