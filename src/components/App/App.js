import React from "react";
import './App.css';
import {useLocalStorage} from "./useLocalStorage";
import {AppUI} from "./AppUI";

function App() {
    const {
        items: TODOs,
        saveItems: saveTODOs,
        loading,
        error
    } = useLocalStorage('TODOs_1', []);
    // console.log("TODOS : " + TODOs);
    const [searchValue, setSearchValue] = React.useState("");
    const totalTODOs = TODOs.length;
    const completedTODOs = TODOs.filter(todo => todo.completed).length;
    const filteredTODOs = TODOs.filter(todo =>
        todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

    const onCompleteTODO = (todoKey) => {
        console.log("Check " + todoKey);
        const updatedTODOs = [...TODOs];
        const index = getIndex(updatedTODOs, todoKey)
        updatedTODOs[index].completed = !updatedTODOs[index].completed
        saveTODOs(updatedTODOs);
    };

    function getIndex(updatedTODOs, todoKey) {
        return updatedTODOs.findIndex(item => item.key === todoKey);
    }

    const onDeleteTODO = (todoKey) => {
        console.log("Delete " + todoKey);
        const updatedTODOs = [...TODOs];
        updatedTODOs.splice(getIndex(updatedTODOs, todoKey), 1)
        saveTODOs(updatedTODOs);
    };

    return <AppUI
        completedTODOs={completedTODOs}
        totalTODOs={totalTODOs}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        filteredTODOs={filteredTODOs}
        onCompleteTODO={onCompleteTODO}
        onDeleteTODO={onDeleteTODO}
        loading={loading}
        error={error}
    />
}

export default App;
