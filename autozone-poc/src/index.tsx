import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { OtherHeading}  from  "./examples/typescript/function";

ReactDOM.render(
    //<Hello compiler="TypeScript demo" framework="React" />,
    <OtherHeading name="Lydia" color="red" height={100}/>,
    document.getElementById("example")
);