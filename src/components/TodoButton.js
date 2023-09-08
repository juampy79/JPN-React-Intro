import "../styles/TodoButton.css"

function TodoButton() {
    return (
        <button
            className="CreateTodoButton"
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

export {TodoButton}