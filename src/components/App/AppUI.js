import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {AddTodoButton} from "../AddTodoButton";
import logoFlyka from "../../resources/flyka raw.png";
import React from "react";


function AppUI({
                   completedTODOs,
                   totalTODOs,
                   searchValue,
                   setSearchValue,
                   filteredTODOs,
                   onCompleteTODO,
                   onDeleteTODO
               }) {
    return (
        <>
            <TodoCounter
                completed={completedTODOs}
                total={totalTODOs}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
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