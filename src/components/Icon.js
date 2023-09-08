import React from "react";
import "../styles/Icon.css";
import {ReactComponent as CheckSVG} from "../resources/icons/icon-check.svg";
import {ReactComponent as DeleteSVG} from "../resources/icons/icon-delete.svg";

function Icon({type, color, onClick}) {

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

export {Icon};