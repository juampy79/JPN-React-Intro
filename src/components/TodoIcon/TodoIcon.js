import React from "react";
import "./Icon.css";
import {ReactComponent as CheckSVG} from "./icon-check.svg";
import {ReactComponent as DeleteSVG} from "./icon-delete.svg";

function TodoIcon({type, color, onClick}) {

    const iconTypes = {
        "check": (color) => <CheckSVG fill={color}/>,
        "delete":(color) => <DeleteSVG fill={color}/>
    };

    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>

    );
}

export {TodoIcon};