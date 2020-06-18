import React from "react";
import './square.css';

function square(props)
{

return <button onClick={props.onClick} className="square" ><h1>{props.value}</h1></button>
}

export default square;
