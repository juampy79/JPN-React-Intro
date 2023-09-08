import React from "react";
import {Icon} from "./Icon";
function CheckIcon({completed, onComplete}) {

    return (<Icon
        type="check"
        color= { completed ? "green" : "gray"}
        onClick={onComplete}
    />);

}

export {CheckIcon};