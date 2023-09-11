import React from "react";
import logoFlyka from "../../resources/flyka raw.png";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {TodoLoading} from "../TodoLoading/TodoLoading";
import {AddTodoButton} from "../AddTodoButton/AddTodoButton";
import {TodoError} from "../TodoError/TodoError";
import {TodoInitial} from "../TodoInitial/TodoInitial";
import {TodoContext} from "../TodoContext/TodoContext";
import {Modal} from "../Modal/Modal";


function AppUI() {
    const {
        filteredTODOs,
        onCompleteTODO,
        onDeleteTODO,
        loading,
        error,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter/>
            <TodoSearch/>

                    <TodoList>
                        {loading &&
                            (<>
                                <TodoLoading/>
                                <TodoLoading/>
                                <TodoLoading/>
                            </>)
                        }
                        {error && <TodoError/>}
                        {(!loading && filteredTODOs.length === 0) && <TodoInitial/>}

                        {filteredTODOs.map(
                            item => (
                                <TodoItem key={item.key}
                                          text={item.text}
                                          completed={item.completed}
                                          onComplete={() => onCompleteTODO(item.key)}
                                          onDelete={() => onDeleteTODO(item.key)}
                                />
                            )
                        )}
                    </TodoList>
            <AddTodoButton/>

            { openModal &&
                <Modal>
                    Vale por modal
                </Modal>
            }
            {<Footer/>}
        </>
    );
}

function Footer() {
    return (
        <footer className="App-footer">
            <img src={logoFlyka} className="App-logo" alt="logo"/>
        </footer>
    )
}

export {AppUI};