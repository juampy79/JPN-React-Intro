import React from "react";
import "./TodoCounter.css"
import {TodoContext} from "../TodoContext/TodoContext";


function TodoCounter() {
    const {
        completedTODOs,
        totalTODOs
    } = React.useContext(TodoContext)


    return (
        <h1 className="TodoCounter" >
            Has completado <span>{completedTODOs}</span>  de <span>{totalTODOs}</span> TODOs
        </h1>
    );
}

export { TodoCounter }