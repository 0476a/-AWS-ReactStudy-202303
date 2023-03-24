import React from "react";

function Button (props) {
    return (
        <button onClick={props.handlerClick}>이름전달</button>
    );
}

export default Button;