import "./AddTodoButton.css"

function AddTodoButton() {
    return (
        <button
            className="AddTodoButton"
            onClick={
                (event) => {
                    console.log("Click")
                    console.log(event.target)
                }
            }
        >
            +
        </button>
    );
}

export {AddTodoButton}