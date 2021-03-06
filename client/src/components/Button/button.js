import React from "react";
import "./button.css";

function Button(props){
    return(
        <button {...props}>
            {props.name}
        </button>
    )
}

export default Button;