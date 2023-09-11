import React from 'react';
import {TodoContext} from "../TodoContext/TodoContext";
import './TodoForm.css';

function TodoForm() {
    const { addTODO, setOpenModal } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTODO(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Add TODOs!</label>
            <textarea
                placeholder="type description..."
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}

export {TodoForm};