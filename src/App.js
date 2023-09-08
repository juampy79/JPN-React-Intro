import React from "react";
import './styles/App.css';
import logoFlyka from './resources/flyka raw.png';
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {TodoButton} from "./components/TodoButton";
import {TodoItem} from "./components/TodoItem";

const localStorageTODOsList = localStorage.getItem('TODOs_1');

function useLocalStorage(){

}

function setLocalStorage(newTODOs) {
    localStorage.setItem('TODOs_1', JSON.stringify(newTODOs));
}

let parsedTODOsList;
if (!localStorageTODOsList) {
    setLocalStorage([]);
    parsedTODOsList = []

} else {
    parsedTODOsList = JSON.parse(localStorageTODOsList);
}

function App() {
    const [TODOs, setTODOs] = React.useState(parsedTODOsList);
    const [searchValue, setSearchValue] = React.useState("");
    const totalTODOs = TODOs.length;
    const completedTODOs = TODOs.filter(todo => todo.completed).length;
    const filteredTODOs = TODOs.filter(todo =>
        todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );




    const saveTODOs = (newTODOs) => {
        setLocalStorage(newTODOs);
        setTODOs(newTODOs)
    }

    const onCompleteTODO = (todoKey) => {
        console.log("Check " + todoKey);
        const updatedTODOs = [...TODOs];
        const index = getIndex(updatedTODOs, todoKey)
        updatedTODOs[index].completed = !updatedTODOs[index].completed
        saveTODOs(updatedTODOs);
    };

    function getIndex(updatedTODOs, todoKey) {
        return updatedTODOs.findIndex(item => item.key == todoKey);
    }

    const onDeleteTODO = (todoKey) => {
        console.log("Delete " + todoKey);
        const updatedTODOs = [...TODOs];
        updatedTODOs.splice(getIndex(updatedTODOs, todoKey), 1)
        saveTODOs(updatedTODOs);
    };

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
            <TodoButton/>
            {/*<Header/>*/}

        </>
    );
}

function Header() {
    return (
        <React.Fragment>
            <header className="App-header">
                <img src={logoFlyka} className="App-logo" alt="logo"/>
                <a
                    className="App-link"
                    href="http://flyka.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Flyka Home
                </a>
            </header>
        </React.Fragment>
    )
}


export default App;
