import "./AddTodoButton.css"

function AddTodoButton( {setOpenModal} ) {
    return (
        <button
            className="AddTodoButton"
            onClick={
                () => {
                    setOpenModal(state => !state);
                }
            }
        >
            +
        </button>
    );
}

export {AddTodoButton}