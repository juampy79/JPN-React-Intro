import React from "react";
import {useLocalStorage} from "./useLocalStorage";
 import {TodoContext} from "./TodoContext";

function TodoProvider({children}) {
    const {
        items: TODOs,
        saveItems: saveTODOs,
        loading,
        error
    } = useLocalStorage('TODOs_1', []);

    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);
    const totalTODOs = TODOs.length;
    const completedTODOs = TODOs.filter(todo => todo.completed).length;
    const filteredTODOs = TODOs.filter(todo =>
        todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    function getIndex(updatedTODOs, todoKey) {
        return updatedTODOs.findIndex(item => item.key === todoKey);
    }

    const addTODO = (text) => {
        const currentTODOs = [...TODOs];
        currentTODOs.push({
            key: currentTODOs.length + 1,
            text,
            completed: false
        });
        saveTODOs(currentTODOs);
    };

    const onCompleteTODO = (todoKey) => {
        console.log("Check " + todoKey);
        const updatedTODOs = [...TODOs];
        const index = getIndex(updatedTODOs, todoKey)
        updatedTODOs[index].completed = !updatedTODOs[index].completed
        saveTODOs(updatedTODOs);
    };

    const onDeleteTODO = (todoKey) => {
        console.log("Delete " + todoKey);
        const updatedTODOs = [...TODOs];
        updatedTODOs.splice(getIndex(updatedTODOs, todoKey), 1)
        saveTODOs(updatedTODOs);
    };


    return (
        <TodoContext.Provider value={
            {
                completedTODOs,
                totalTODOs,
                searchValue,
                setSearchValue,
                filteredTODOs,
                onCompleteTODO,
                onDeleteTODO,
                loading,
                error,
                openModal,
                setOpenModal,
                addTODO
            }
        }>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoProvider};
