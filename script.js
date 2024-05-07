import React from "react";
import ReactDOM from "react-dom/client";
console.log(React);
const head1 = React.createElement("h1", { classname: "heading1" }, "this is 1");
const div1 = React.createElement("div", { classname: "container1" }, head1);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div1);
