import "../styles/TodoItem.css"
import {CheckIcon} from "./CheckIcon";
import {DeleteIcon} from "./DeleteIcon";

function TodoItem(props) {
    const textClassName = `TodoItem-p ${props.completed && "TodoItem-p--complete"}`;

    return (<li className="TodoItem">
        <CheckIcon
            completed = {props.completed}
            onComplete = {props.onComplete}
        />
        <p className={textClassName}>
            {props.text}
        </p>
        <DeleteIcon
            onDelete = {props.onDelete}
        />
    </li>);
}

export {TodoItem}