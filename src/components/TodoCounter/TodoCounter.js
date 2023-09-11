import React from "react";
import "./TodoCounter.css"
import {TodoContext} from "../TodoContext/TodoContext";


function TodoCounter({completed, total}) {
    const {} = React.useContext(TodoContext)
    return (
        <h1 className="TodoCounter" >
            Has completado <span>{completed}</span>  de <span>{total}</span> TODOs
        </h1>
    );
}

export { TodoCounter }