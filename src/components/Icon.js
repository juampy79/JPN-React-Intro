import React from "react";
import "../styles/Icon.css";
import {ReactComponent as CheckSVG} from "../resources/icons/icon-check.svg";
import {ReactComponent as DeleteSVG} from "../resources/icons/icon-delete.svg";
// import { FaCheck as CheckSVG } from 'react-icons/fa';
// import { MdOutlineDeleteForever as DeleteSVG } from 'react-icons/md';
function Icon({type, color, onClick}) {

    const iconTypes = {
        "check": (color) => <CheckSVG fill={color}/>,
        "delete":(color) => <DeleteSVG fill={color}/>
    };

    console.log(`Icon type: ${type}  color: ${color}`);

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