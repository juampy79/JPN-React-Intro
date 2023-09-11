import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {TodoLoading} from "../TodoLoading/TodoLoading";
import {AddTodoButton} from "../AddTodoButton/AddTodoButton";
import logoFlyka from "../../resources/flyka raw.png";
import React from "react";
import {TodoError} from "../TodoError/TodoError";
import {TodoInitial} from "../TodoInitial/TodoInitial";
import {TodoContext} from "../TodoContext/TodoContext";


function AppUI() {
    return (
        <>
            <TodoCounter/>
            <TodoSearch/>
            <TodoContext.Consumer>
                {(
                    {
                    filteredTODOs,
                    onCompleteTODO,
                    onDeleteTODO,
                    loading,
                    error}
                ) => (
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
                )}

            </TodoContext.Consumer>
            <AddTodoButton/>
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