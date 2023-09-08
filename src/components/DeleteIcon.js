import React from "react";
import {Icon} from "./Icon";

function DeleteIcon({onDelete}) {
    return <Icon
        type="delete"
        color="gray"
        onClick={onDelete}
    />;
}

export {DeleteIcon};